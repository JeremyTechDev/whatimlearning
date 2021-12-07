import type { NextPage } from 'next';

import MainLayout from '../components/MainLayout';
import LearningKit from '../components/LearningKit';
import { PaginationResponse, Technology, User } from '../types';
import UserBar from '../components/UserBar';

interface T {
  technologies: PaginationResponse<Technology>;
  users: PaginationResponse<User>;
}

const HomePage: NextPage<T> = ({ technologies, users }) => {
  return (
    <div className="grid grid-cols-4">
      <UserBar
        users={users}
        className="col-span-3 md:col-span-1 h-screen overflow-y-auto"
      />

      <MainLayout className="col-span-3 md:col-span-3 p-4 bg-gray-100 relative overflow-y-hidden">
        <LearningKit technologies={technologies.results} />
      </MainLayout>
    </div>
  );
};

export async function getServerSideProps() {
  try {
    const techResponse = await fetch('http://127.0.0.1:8000/technologies');
    const userResponse = await fetch('http://127.0.0.1:8000/users');
    const technologies = await techResponse.json();
    const users = await userResponse.json();

    if (!technologies) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        technologies,
        users,
      },
    };
  } catch (error) {
    return { props: {} };
  }
}

export default HomePage;
