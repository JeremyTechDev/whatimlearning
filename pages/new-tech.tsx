import { ChangeEventHandler, useState } from 'react';

type HandleChangeInput =
  | HTMLInputElement
  | HTMLTextAreaElement
  | HTMLSelectElement;

const NewTechForm = () => {
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

  return (
    <main className="container mt-20 mx-auto">
      <h1 className="text-4xl">New Technology</h1>
      <h4 className="text-xl">
        Show <span className="text-red">your audience</span> what you are
        learning and help them find your{' '}
        <span className="text-red">favorite resources</span>
      </h4>

      <section className="absolute py-8 left-0 my-8 bg-light w-screen">
        <div className="bg-dark bg-opacity-20 container rounded-3xl mx-auto p-8 grid grid-cols-12 grid-rows-4 gap-y-4 gap-x-8">
          <p className="text-white text-xl col-span-6">Tech Details:</p>
          <p className="text-white text-xl col-span-3">Show off some code:</p>
          <p className="text-white text-xl col-span-3">Preview:</p>

          <input
            className="col-span-6 new-tech-input"
            name="title"
            onChange={handleChange}
            placeholder="What are you learning?"
            value={data.title}
          />

          <textarea
            className="col-span-6 row-start-3 row-span-2 new-tech-input resize-none"
            defaultValue={data.description}
            name="description"
            onChange={handleChange}
            placeholder="Briefly tell your audience why you are learning that in"
          />

          <input
            className="col-span-6 row-start-5 new-tech-input"
            name="image"
            onChange={handleChange}
            placeholder="Image URL (we still don't support uploads :c)"
            value={data.image}
          />

          <select
            className="col-span-3 new-tech-input"
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
            className="col-span-3 row-span-3 row-start-3 new-tech-input resize-none"
            defaultValue={data.code}
            name="code"
            onChange={handleChange}
            placeholder="console.log('Show off some code here');"
          />

          <div className="bg-white col-span-3 row-span-4">preview</div>
        </div>
      </section>
    </main>
  );
};

export default NewTechForm;
