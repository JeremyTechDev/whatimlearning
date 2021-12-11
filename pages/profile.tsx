import Image from 'next/image';

import { IsLoading, LoginRequired } from '../components/Helpers';
import useAuth from '../hooks/useAuth';
import { User } from '../types';
import LearningKit from '../components/LearningKit';
import { logout } from '../helpers/login';
import handleDelete from '../helpers/handleDelete';

const Profile = () => {
  const [isLoading, userData] = useAuth();

  const handleDeleteAccount = (user: User) => {
    handleDelete(
      'Are you sure you want to delete your account?\nThis action cannot be undone.',
      `http://127.0.0.1:8000/users/${user.id}/`,
    );
  };

  if (isLoading) return <IsLoading />;
  if (!userData?.id) return <LoginRequired />;

  return (
    <main className="container mx-auto">
      <section className="flex items-center justify-between">
        <h1 className="text-4xl">Profile</h1>

        <div className="text-xl flex items-center">
          <h2 className="mr-4">Logged as @{userData.username}</h2>
          <Image
            src={userData.profile_image || 'image'}
            alt={userData.username}
            width={65}
            height={65}
            className="rounded-full"
            loader={({ src }) => src}
          />
        </div>
      </section>

      <section className="flex justify-between my-8">
        <a href="/new-tech" className="btn btn--dark">
          New Learning Stack
        </a>

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
