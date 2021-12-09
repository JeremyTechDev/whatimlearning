import type { GetServerSideProps, NextPage } from 'next';

import { PaginationResponse, User } from '../types';
import Homepage from '../components/Homepage';
import _default from 'next/router';

interface T {
  users: PaginationResponse<User>;
}

const HomePage: NextPage<T> = ({ users }) => {
  return <Homepage users={users} />;
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const userResponse = await fetch('http://127.0.0.1:8000/users');
    const users = await userResponse.json();

    return {
      props: {
        users,
      },
    };
  } catch (error) {
    return { props: {} };
  }
};

export default HomePage;
