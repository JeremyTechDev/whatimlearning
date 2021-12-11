import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { User } from '../types';
import { handleLogin, getAuthData } from '../helpers/login';

/**
 * Custom hook to authenticate user in auth-required pages.
 *
 * @returns [boolean, User | null] whether hooks is still loading and user data
 */
const useAuth = (): [boolean, User | null] => {
  const { query } = useRouter();
  const [userData, setUserData] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const authenticate = async () => {
      const token = localStorage.getItem('auth-token');

      if (query && query.oauth_token && query.oauth_verifier) {
        setUserData(await handleLogin(query));
      } else if (token) {
        setUserData(await getAuthData(token));
      }

      setIsLoading(false);
    };

    authenticate();
  }, [query]);

  return [isLoading, userData];
};

export default useAuth;
