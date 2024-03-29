import { FC } from 'react';

interface T {
  size?: string;
}

const ExternalLink: FC<T> = ({ size = '16px' }) => (
  <svg
    fill="none"
    height={size}
    stroke="currentColor"
    style={{ display: 'inline', marginLeft: '4px' }}
    viewBox="0 0 24 24"
    width={size}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default ExternalLink;
