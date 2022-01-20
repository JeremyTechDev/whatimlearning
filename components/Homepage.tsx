import Link from 'next/link';
import Head from 'next/head';
import { NextPage } from 'next';
import { User, PaginationResponse } from '../types';
import LearningKit from './LearningKit';
import MainLayout from './MainLayout';
import UserBar from './UserBar';
import TwitterMeta from './TwitterMetaTags';
import { useState } from 'react';

interface T {
  users: PaginationResponse<User>;
  selected?: User | null;
}

const Homepage: NextPage<T> = ({ users, selected: selectedUser = null }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <>
      <Head>
        <TwitterMeta
          title="WhatImLearning"
          description={
            selectedUser?.twitter_name
              ? `See what @${selectedUser.twitter_name} is learning!`
              : null
          }
          image={selectedUser?.profile_image}
          creator={selectedUser?.username}
          path={'/' + (selectedUser?.username ? selectedUser.username : 'home')}
        />
      </Head>

      <div className="grid grid-cols-4">
        <UserBar
          users={users}
          className={`${
            isMenuOpen ? 'col-span-4' : 'hidden'
          } col-span-3 md:col-span-1 md:block h-screen overflow-y-auto`}
          selected={selectedUser}
          handleToggleMenu={toggleMenu}
        />

        <MainLayout
          className={`${
            isMenuOpen ? 'hidden' : 'col-span-4'
          } md:col-span-3  p-4 bg-gray-100 h-screen overflow-y-auto`}
        >
          <p className="flex justify-between items-center mb-4">
            <button
              className="btn md:hidden text-2xl"
              onClick={toggleMenu}
              title="Toggle Menu"
            >
              🍔
            </button>

            <span>
              Want to share your Learning Kit too?
              <Link href="/profile">
                <a className="btn btn--dark ml-2">Login</a>
              </Link>
            </span>
          </p>

          {selectedUser ? (
            <LearningKit user={selectedUser} />
          ) : (
            <div className="flex h-96 items-center justify-center flex-col">
              <p className="text-8xl">👈</p>
              <p className="text-4xl">Choose a creator!</p>
              <p className="text-xl">See all those creators?</p>
              <p className="text-xl">
                Now click on them to see what they are learning and what they
                use to learn
              </p>
            </div>
          )}
        </MainLayout>
      </div>
    </>
  );
};

export default Homepage;
