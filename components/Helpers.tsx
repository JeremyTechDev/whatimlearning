import Link from 'next/link';
import { FC } from 'react';
import ExternalLink from '../icons/ExternalLink';
import { User } from '../types';
import TwitterLoginBtn from './TwitterLoginBtn';

export const IsLoading = () => (
  <section className="container mx-auto my-40 text-center">
    <p className="text-8xl">⏱</p>
    <p className="text-4xl">Loading...</p>
  </section>
);

export const LoginRequired = () => (
  <section className="container mx-auto my-40 text-center">
    <p className="text-8xl">‍🔐</p>
    <p className="text-4xl">Twitter Login Required</p>
    <p className="my-4">You need to login with Twitter to post content</p>
    <TwitterLoginBtn />
    <p className="text-xs text-gray-400">You will redirected to Twitter</p>
  </section>
);

export const NotYourProfile: FC<{ profileHref: string }> = ({
  profileHref,
}) => (
  <section className="container mx-auto my-40 text-center">
    <p className="text-8xl">🤔</p>
    <p className="text-4xl my-4">Looks like this is not your profile page</p>
    <Link href={profileHref}>
      <a className="btn btn--red cursor-pointer">Go to your profile</a>
    </Link>
  </section>
);

export const NoTechnologies: FC<{ user: User | null }> = ({ user }) => (
  <div className="flex h-96 items-center justify-center flex-col">
    <p className="text-8xl">🤷‍♂️</p>
    <p className="text-4xl">Nothing in here</p>
    {user && (
      <p className="text-xl">
        Tell{' '}
        <a
          className="text-red hover:underline"
          href={`https://twitter.com/intent/tweet?screen_name=${user.username}`}
          rel="noreferrer"
          target="_blank"
        >
          @{user.username}
          <ExternalLink size="20px" />
        </a>{' '}
        to share what they are learning on Twitter.
      </p>
    )}
  </div>
);
