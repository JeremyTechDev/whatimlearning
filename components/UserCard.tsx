import Image from 'next/image';
import router from 'next/router';
import { Dispatch, FC, SetStateAction } from 'react';
import ExternalLink from '../icons/ExternalLink';
import { User } from '../types';

interface T {
  user: User;
  isSelected: boolean;
}

const DEFAULT_IMAGE =
  'https://twirpz.files.wordpress.com/2015/06/twitter-avi-gender-balanced-figure.png';

const UserCard: FC<T> = ({ user, isSelected = false }) => {
  return (
    <article
      onClick={() => router.push(`/${user.username}`)}
      className={`flex items-center my-2 px-4 hover:bg-gray-100 cursor-pointer ${
        isSelected ? 'bg-gray-100' : ''
      }`}
    >
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
          <ExternalLink />
        </a>
      </figcaption>
    </article>
  );
};

export default UserCard;
