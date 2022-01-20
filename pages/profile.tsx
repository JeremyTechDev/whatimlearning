import Link from 'next/link';
import Image from 'next/image';

import { IsLoading, LoginRequired } from '../components/Helpers';
import useAuth from '../hooks/useAuth';
import { User } from '../types';
import LearningKit from '../components/LearningKit';
import { logout } from '../helpers/login';
import handleDelete from '../helpers/handleDelete';
import { DEFAULT_USER_IMAGE } from '../helpers/constants';
import HomeBtn from '../components/HomeBtn';

const Profile = () => {
  const [isLoading, userData] = useAuth();

  const handleDeleteAccount = (user: User) => {
    handleDelete(
      'Are you sure you want to delete your account?\nThis action cannot be undone.',
      `/users/${user.id}/`,
    );
  };

  if (isLoading) return <IsLoading />;
  if (!userData?.id) return <LoginRequired />;

  return (
    <main className="container mx-auto mt-4">
      <section className="flex items-center justify-between">
        <div className="flex items-center">
          <HomeBtn />
          <h1 className="text-4xl">Profile 👩‍💻👨‍💻</h1>
        </div>

        <div className="text-xl flex items-center">
          <h2 className="mr-4">
            Logged as <span className="font-bold">@{userData.username}</span>
          </h2>
          <Image
            alt={userData.username}
            className="rounded-full"
            height={65}
            src={userData.profile_image || DEFAULT_USER_IMAGE}
            unoptimized
            width={65}
          />
        </div>
      </section>

      <section className="flex justify-between my-8">
        <Link href="/new-tech">
          <a className="btn btn--filled--dark">Publish new Learning Kit 🚀</a>
        </Link>

        <span className="grid grid-cols-2 gap-2">
          <button onClick={logout} className="btn btn--red">
            Log out
          </button>
          <button
            onClick={() => handleDeleteAccount(userData)}
            className="btn btn--red"
          >
            Close account
          </button>
        </span>
      </section>

      <section>
        <h2 className="text-2xl">This is how your page looks 👇</h2>
        <hr className="my-4" />

        <LearningKit user={userData} editView />
      </section>
    </main>
  );
};

export default Profile;
