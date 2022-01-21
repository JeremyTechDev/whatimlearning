import type { GetServerSideProps, NextPage } from 'next';

import { PaginationResponse, User } from '../types';
import Homepage from '../components/Homepage';
import handleFetch from '../helpers/fetch';

interface T {
  users: PaginationResponse<User>;
}

const HomePage: NextPage<T> = ({ users }) => {
  return <Homepage users={users} />;
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const users = await handleFetch({ url: '/users' });

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
