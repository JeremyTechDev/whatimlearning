import type { GetServerSideProps, NextPage } from 'next';

import { PaginationResponse, User } from '../../types';
import Homepage from '../../components/Homepage';

interface T {
  users: PaginationResponse<User>;
  initialUser: User;
}

const HomePage: NextPage<T> = ({ users, initialUser }) => {
  return <Homepage users={users} selected={initialUser} />;
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    const usersRes = await fetch('http://127.0.0.1:8000/users');
    const selectedUserRes = await fetch(
      `http://127.0.0.1:8000/user/${params?.username}`,
    );

    const users = await usersRes.json();
    const selectedUser = await selectedUserRes.json();

    return {
      props: {
        users,
        initialUser: selectedUser,
      },
    };
  } catch (error) {
    return { props: {} };
  }
};

export default HomePage;
