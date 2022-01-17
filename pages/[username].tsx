import type { GetServerSideProps, NextPage } from 'next';

import { PaginationResponse, User } from '../types';
import Homepage from '../components/Homepage';
import handleFetch from '../helpers/fetch';

interface T {
  users: PaginationResponse<User>;
  initialUser: User;
}

const HomePage: NextPage<T> = ({ users, initialUser }) => {
  return <Homepage users={users} selected={initialUser} />;
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    const users = await handleFetch({ url: '/users' });
    const selectedUser = await handleFetch({
      url: `/user/${params?.username}`,
    });

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
