import { FC } from 'react';

interface T {
  children: React.ReactNode;
  className?: string;
}

const MainLayout: FC<T> = ({ children, className = '' }) => {
  return (
    <div className={className}>
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
  );
};

export default MainLayout;
