import { ChangeEventHandler, useState } from 'react';

import { IsLoading, LoginRequired } from '../components/Helpers';
import NewResource from '../components/NewResource';
import NewTechCard from '../components/NewTechCard';
import useAuth from '../hooks/useAuth';

type HandleChangeInput =
  | HTMLInputElement
  | HTMLTextAreaElement
  | HTMLSelectElement;

const NewTechForm = () => {
  const [isLoading, userData] = useAuth();
  const [data, setData] = useState({
    code: '',
    description: '',
    image: '',
    language: 'TS',
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
        <h1 className="text-4xl">New Technology</h1>
        <h4 className="text-xl">
          Show <span className="text-red">your audience</span> what you are
          learning and help them find your{' '}
          <span className="text-red">favorite resources</span>
        </h4>
      </header>

      <section className="py-8 my-8 bg-light w-screen">
        <div className="bg-dark bg-opacity-20 container rounded-3xl mx-auto p-4 lg:p-8 grid grid-cols-12 md:grid-rows-4 gap-y-4 md:gap-x-4 lg:gap-x-8">
          <p className="text-white text-xl col-span-12 md:col-span-6">
            Tech Details:
          </p>

          <input
            className="col-span-12 md:col-span-6 new-tech-input"
            name="title"
            onChange={handleChange}
            placeholder="What are you learning?"
            value={data.title}
          />

          <textarea
            className="col-span-12 md:col-span-6 md:row-start-3 md:row-span-2 new-tech-input resize-none"
            defaultValue={data.description}
            name="description"
            onChange={handleChange}
            placeholder={`Briefly tell your audience why you are learning ${
              data.title || '...'
            }`}
          />

          <input
            className="col-span-12 md:col-span-6 md:row-start-5 new-tech-input"
            name="image"
            onChange={handleChange}
            placeholder="Image URL (we still don't support uploads :c)"
            value={data.image}
          />

          <p className="text-white text-xl col-span-12 md:col-span-3 md:col-start-7 md:row-start-1">
            Show off some code:
          </p>

          <select
            className="col-span-12 md:col-span-3 new-tech-input"
            defaultValue={data.language}
            id="language"
            name="language"
            onChange={handleChange}
          >
            <option value="JS">JavaScript</option>
            <option value="TS">TypeScript</option>
            <option value="PY">Python</option>
          </select>

          <textarea
            className="col-span-12 md:col-span-3 md:row-span-3 md:row-start-3 new-tech-input resize-none"
            defaultValue={data.code}
            name="code"
            onChange={handleChange}
            placeholder="console.log('Show off some code here');"
          />

          <p className="text-white text-xl col-span-12 md:col-span-3 md:col-start-10 md:row-start-1">
            Preview:
          </p>

          <div className="col-span-12 md:col-span-3 md:row-span-6">
            <NewTechCard details={data} />
          </div>
        </div>
      </section>

      <NewResource />
    </main>
  );
};

export default NewTechForm;
