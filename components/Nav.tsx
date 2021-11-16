import { FC } from 'react';

interface T {
  children: React.ReactNode;
}
const Layout: FC<T> = ({ children }) => {
  return (
    <div className="grid grid-cols-3">
      <nav className="col-span-3 md:col-span-1 p-4">
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
      </nav>

      <div className="col-span-3 md:col-span-2 p-4 bg-gray-100 relative">
        <main>{children}</main>

        <footer className="absolute bottom-0 text-center text-sm">
          Made with ♥️ by{' '}
          <a
            className="text-lightBlue font-bold underline"
            href="https://twitter.com/askjere"
            rel="noreferrer"
            target="_blank"
          >
            Jeremy
          </a>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
