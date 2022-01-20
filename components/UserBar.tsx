import { NextPage } from 'next';
import { ChangeEvent, useState } from 'react';
import { PaginationResponse, User } from '../types';
import debounce from 'lodash.debounce';

import UserCard from './UserCard';
import handleFetch from '../helpers/fetch';

interface T {
  className?: string;
  selected: User | null;
  users: PaginationResponse<User>;
  handleToggleMenu: () => void;
}

const UserBar: NextPage<T> = ({ users, selected, handleToggleMenu, className = '' }) => {
  const [renderedUsers, setRenderedUsers] = useState(users);
  const [notFound, setNotFound] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;

    handleFetch({ url: `/users/?q=${query}` })
      .then((data) => {
        if (data.count) {
          setRenderedUsers(data);
          setNotFound(false);
        } else {
          setRenderedUsers(users);
          setNotFound(true);
        }
      })
      .catch(() => setRenderedUsers(users));
  };

  const debouncedChangeHandler = debounce(handleChange, 300);

  return (
    <nav className={className}>
      <header className="p-4 pb-0 sticky top-0 bg-white z-10 shadow-lg">
        <button
          className="md:hidden btn text-xl float-right"
          onClick={handleToggleMenu}
          title="Toggle Menu"
        >
          ❌
        </button>

        <p className="text-center text-2xl">whatImLearning 🚀</p>
        <p className="text-center text-xs px-2">
          Find out what your{' '}
          <span className="text-red font-semibold">favorite creators</span> are
          using to learn
        </p>

        <input
          className="bg-gray-100 my-4 p-1 rounded w-full"
          onChange={debouncedChangeHandler}
          placeholder="🔎 Search top creator..."
          type="text"
        />
      </header>

      <section>
        {notFound && (
          <p className="text-center">No creators under your search ☹️</p>
        )}

        {renderedUsers.results.map((user) => (
          <UserCard
            isSelected={user.id === selected?.id}
            key={user.id}
            user={user}
          />
        ))}
      </section>

      <footer className="p-4 text-sm text-center text-gray-400">
        Amazing creators, right? I know 😎
      </footer>
    </nav>
  );
};

export default UserBar;
