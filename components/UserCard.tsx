import Image from 'next/image';
import { FC } from 'react';
import { User } from '../types';

interface T {
  user: User;
}

const DEFAULT_IMAGE =
  'https://twirpz.files.wordpress.com/2015/06/twitter-avi-gender-balanced-figure.png';

const UserCard: FC<T> = ({ user }) => {
  return (
    <article className="flex items-center my-2 px-4 hover:bg-gray-100 cursor-pointer">
      <figure>
        <Image
          alt={user.twitter_name || 'missing twitter name'}
          className="rounded-full"
          height={75}
          loader={({ src }) => src}
          objectFit="cover"
          src={user.profile_image || DEFAULT_IMAGE}
          width={75}
        />
      </figure>

      <figcaption className="mx-2">
        <h5 className="font-bold text-lg">{user.twitter_name}</h5>
        <a
          className="text-red italic hover:underline"
          href={`https://twitter.com/${user.username}`}
          rel="noreferrer"
          target="_blank"
        >
          @{user.username}
          <span className="ml-1">
            <svg
              className="inline w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              />
            </svg>
          </span>
        </a>
      </figcaption>
    </article>
  );
};

export default UserCard;
