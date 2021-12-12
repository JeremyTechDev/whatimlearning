import Link from 'next/link';
import Image from 'next/image';
import { FC } from 'react';
import { DEFAULT_USER_IMAGE } from '../helpers/constants';
import ExternalLink from '../icons/ExternalLink';
import { User } from '../types';

interface T {
  user: User;
  isSelected: boolean;
}

const UserCard: FC<T> = ({ user, isSelected = false }) => {
  return (
    <Link href={`/${user.username}`} passHref>
      <a>
        <article
          className={`flex items-center my-2 px-4 hover:bg-gray-100 cursor-pointer ${
            isSelected ? 'bg-gray-100' : ''
          }`}
        >
          <figure>
            <Image
              alt={user.username}
              className="rounded-full"
              height={75}
              objectFit="cover"
              src={user.profile_image || DEFAULT_USER_IMAGE}
              unoptimized
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
              <ExternalLink />
            </a>
          </figcaption>
        </article>
      </a>
    </Link>
  );
};

export default UserCard;
