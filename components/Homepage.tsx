import { NextPage } from 'next';
import { User, PaginationResponse } from '../types';
import LearningKit from './LearningKit';
import MainLayout from './MainLayout';
import UserBar from './UserBar';

interface T {
  users: PaginationResponse<User>;
  selected?: User | null;
}

const Homepage: NextPage<T> = ({ users, selected: selectedUser = null }) => {
  return (
    <div className="grid grid-cols-4">
      <UserBar
        users={users}
        className="col-span-3 md:col-span-1 h-screen overflow-y-auto"
        selected={selectedUser}
      />

      <MainLayout className="col-span-3 md:col-span-3 p-4 bg-gray-100 h-screen overflow-y-auto">
        {selectedUser ? (
          <LearningKit user={selectedUser} />
        ) : (
          <div className="flex h-96 items-center justify-center flex-col">
            <p className="text-8xl">👈</p>
            <p className="text-4xl">Choose a creator!</p>
            <p className="text-xl">See all those creators?</p>
            <p className="text-xl">
              Now click on them to see what they are learning and what they use
              to learn
            </p>
          </div>
        )}
      </MainLayout>
    </div>
  );
};

export default Homepage;
