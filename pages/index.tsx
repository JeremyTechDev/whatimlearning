import type { NextPage } from 'next';

import Layout from '../components/Nav';
import LearningKit from '../components/LearningKit';
import { Technology } from '../types';
import LandingPage from '../components/LandingPage';

interface T {
  technologies: Technology[];
}

const Home: NextPage<T> = ({ technologies }) => {
  return <LandingPage />;
  return (
    <Layout>
      Just some title here
      <LearningKit technologies={technologies} />
    </Layout>
  );
};

export async function getServerSideProps() {
  return { props: {} };

  const res = await fetch('http://127.0.0.1:8000/technologies/');
  const technologies = await res.json();

  if (!technologies) {
    return {
      notFound: true,
    };
  }

  console.log(technologies);
  return {
    props: {
      technologies,
    },
  };
}

export default Home;
