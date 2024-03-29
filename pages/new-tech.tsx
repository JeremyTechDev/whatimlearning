import { ChangeEventHandler, useState } from 'react';

import { IsLoading, LoginRequired } from '../components/Helpers';
import HomeBtn from '../components/HomeBtn';
import NewResource from '../components/NewResource';
import TechCard from '../components/TechCard';
import useAuth from '../hooks/useAuth';

type HandleChangeInput =
  | HTMLInputElement
  | HTMLTextAreaElement
  | HTMLSelectElement;

const NewTechForm = () => {
  const [isLoading, userData] = useAuth();
  const [data, setData] = useState({
    cover_img: '',
    title: '',
  });

  const handleChange: ChangeEventHandler<HandleChangeInput> = (event) => {
    const { name, value } = event.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  if (isLoading) return <IsLoading />;
  if (!userData?.id) return <LoginRequired />;

  return (
    <main className="mt-20">
      <header className="container mx-auto">
        <div className="flex items-center justify-between">
          <h1 className="text-lg md:text-3xl">New Learning Kit 🚀</h1>
          <HomeBtn />
        </div>
        <h4 className="text-md md:text-xl">
          #1 Show <span className="text-red">your audience</span> what you are
          learning and help them find your{' '}
          <span className="text-red">favorite resources</span>
        </h4>
      </header>

      <section className="py-8 my-8 bg-light w-screen flex items-center justify-center md:gap-12 flex-col-reverse md:flex-row">
        <div className="w-4/5 md:w-2/5 bg-dark bg-opacity-20 rounded px-8 py-6 grid gap-6">
          <p className="text-white text-md md:text-xl">Learning Kit details:</p>

          <input
            className="new-tech-input"
            name="title"
            onChange={handleChange}
            placeholder="What are you learning? 🤔"
            value={data.title}
            maxLength={50}
          />

          <input
            className="new-tech-input"
            name="cover_img"
            onChange={handleChange}
            placeholder="Image URL (we still don't support uploads :c)"
            value={data.cover_img}
          />
        </div>

        <div className="w-auto md:w-1/5">
          <TechCard technology={data} />
        </div>
      </section>

      <NewResource newTechnology={data} userData={userData} />
    </main>
  );
};

export default NewTechForm;
