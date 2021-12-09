import { NextPage } from 'next';
import { PaginationResponse, User } from '../types';

import UserCard from './UserCard';

interface T {
  className?: string;
  selected: User | null;
  users: PaginationResponse<User>;
}

const UserBar: NextPage<T> = ({
  users,
  selected,
  className = '',
}) => {
  return (
    <nav className={className}>
      <header className="p-4 pb-0 sticky top-0 bg-white z-10 shadow-lg">
        <p className="text-center text-2xl">whatImLearning</p>
        <p className="text-center text-xs px-2">
          Find out what your{' '}
          <span className="text-red font-semibold">favorite creators</span> are
          using to learn
        </p>

        <input
          className="bg-gray-100 my-4 p-1 rounded w-full"
          placeholder="Search top creator..."
          type="text"
        />
      </header>

      <section>
        {users.results.map((user) => (
          <UserCard
            isSelected={user.id === selected?.id}
            key={user.id}
            user={user}
          />
        ))}
      </section>

      <footer className="p-4 text-sm text-center text-gray-400">
        Amazing creators, right? We know 😎
      </footer>
    </nav>
  );
};

export default UserBar;
