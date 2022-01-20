import Link from 'next/link';

const HomeBtn = () => (
  <Link href="/home">
    <a className="btn btn--filled--dark mr-8">Go back 🏠</a>
  </Link>
);

export default HomeBtn;
