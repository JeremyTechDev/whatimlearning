import Image from 'next/image';
import { FC } from 'react';
import { User } from '../types';

interface T {
  children: React.ReactNode;
  className?: string;
  loggedUser: User | null;
}

const MainLayout: FC<T> = ({ loggedUser, children, className = '' }) => {
  return (
    <div className={className}>
      {loggedUser ? (
        <section className="flex justify-end items-center">
          <p className="mr-2 text-sm">
            Logged as <span className="font-bold">@{loggedUser.username}</span>
          </p>
          <Image
            className="rounded-full"
            alt={loggedUser.username}
            height={50}
            loader={({ src }) => src}
            src={loggedUser.profile_image || 'sample image'}
            width={50}
          />
          <a href="/me" className="bg-red px-2 py-1 rounded text-sm text-white ml-2 cursor-pointer hover:bg-opacity-70">
            Profile
          </a>
        </section>
      ) : 'not logged'}

      <main>{children}</main>

      <footer className="text-sm">
        Made with ♥️ by{' '}
        <a
          className="text-red font-bold hover:underline"
          href="https://twitter.com/askjere"
          rel="noreferrer"
          target="_blank"
        >
          Jeremy
        </a>
      </footer>
    </div>
  );
};

export default MainLayout;
