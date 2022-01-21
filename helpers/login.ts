import router from 'next/router';
import { AuthData, User } from '../types';
import handleFetch from './fetch';

interface AuthQuery {
  oauth_token?: string;
  oauth_verifier?: string;
}

/**
 * Sets a new auth token
 * @param query Twitter oauth token and verifier
 * @returns user data if successful, null otherwise
 */
export const handleLogin = async (query: AuthQuery): Promise<AuthData> => {
  let userData: AuthData = null;

  if ('oauth_token' in query && 'oauth_verifier' in query) {
    try {
      const token = query.oauth_token;
      const verifier = query.oauth_verifier;

      // remove auth params from url
      window?.history?.pushState({}, document.title, window.location.pathname);

      userData = await handleFetch({
        url: `/auth/twitter/callback?oauth_token=${token}&oauth_verifier=${verifier}`,
      });
      if (userData && userData.auth_token) {
        localStorage.setItem('auth-token', userData.auth_token);
      }
    } catch (error) {
      userData = null;
    } finally {
      return userData;
    }
  }

  return null;
};

/**
 * Gets user data using token
 * @returns User data attached to the token, null if token is invalid
 */
export const getAuthData = async (): Promise<User | null> => {
  let userData: User | null = null;
  try {
    userData = await handleFetch({ url: '/auth/token/', includeToken: true });
  } catch {
    userData = null;
  } finally {
    return userData;
  }
};

/**
 * Removes user token and redirects to home.
 */
export const logout = () => {
  localStorage.removeItem('auth-token');
  router.push('/home');
};
