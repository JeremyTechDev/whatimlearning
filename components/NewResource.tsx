import { ChangeEvent, FC, useState } from 'react';
import router from 'next/router';

import LinkCard from './LinkCard';
import { NewTechnology, ResourceCard, User } from '../types';
import validateNewResource from '../helpers/validateNewResource';
import handleFetch from '../helpers/fetch';

const DEFAULT_RESOURCE: ResourceCard = {
  isFree: false,
  url: '',
};

interface T {
  newTechnology: NewTechnology;
  userData: User;
}

const NewResource: FC<T> = ({ newTechnology, userData }) => {
  let keyCount = 0;
  const [resources, setResources] = useState<ResourceCard[]>([
    DEFAULT_RESOURCE,
  ]);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const { name, value, checked } = event.target;
    const newResources = [...resources];
    newResources[index] = {
      ...resources[index],
      [name]: name === 'url' ? value : checked,
    };
    setResources(newResources);
  };

  const handleNewResource = () => {
    setResources((prev) => [...prev, DEFAULT_RESOURCE]);
  };

  const handleRemoveResource = (index: number) => {
    const newResources = [...resources];
    newResources.splice(index, 1);
    setResources(newResources);
  };

  const handleSubmit = () => {
    const { isValid, message } = validateNewResource(newTechnology, resources);
    if (!isValid) return alert(message);

    handleFetch({
      url: `/users/${userData.id}/technologies/`,
      method: 'POST',
      body: newTechnology,
      includeToken: true,
    })
      .then((data) =>
        handleFetch({
          url: `/users/${userData.id}/technologies/${data.id}/resources/`,
          method: 'POST',
          body: resources,
          includeToken: true,
        }),
      )
      .then(() => {
        alert('Learning kit published! 🚀');
        router.push('/profile');
      })
      .catch(() => alert('Ops! Something went wrong 😅 Try again later'));
  };

  return (
    <section className="container mx-auto">
      <h2 className="text-3xl">Resources 🌐</h2>

      <h5 className="text-lg">
        Add links to the resources you are using to learn
      </h5>

      <section className="my-8">
        <div className="grid grid-cols-12 gap-2 my-4 font-bold">
          <p className="col-span-1 text-right">#</p>
          <p className="col-span-9">URL</p>
          <p className="col-span-1">Is free?</p>
          <p className="col-span-1" />
        </div>

        {resources.map((resource, index) => {
          return (
            <div
              key={keyCount++}
              className="grid grid-cols-12 gap-2 my-4 items-center"
            >
              <p className="col-span-1 text-right">#{index + 1}</p>
              <input
                className="col-span-9 border rounded p-1"
                name="url"
                onChange={(e) => handleChange(e, index)}
                type="url"
                value={resource.url}
              />
              <input
                type="checkbox"
                name="isFree"
                className="col-span-1 h-4/5 w-1/2 cursor-pointer"
                onChange={(e) => handleChange(e, index)}
              />
              <button
                className="btn btn--red"
                onClick={() => handleRemoveResource(index)}
                title="Remove item"
              >
                Remove
              </button>
            </div>
          );
        })}

        <button className="btn btn--dark" onClick={handleNewResource}>
          Add new Resource ➕
        </button>
      </section>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        {resources.map((resource, index) => (
          <LinkCard key={keyCount++} resource={resource} index={index} />
        ))}
      </div>

      <div className="flex flex-col items-end">
        <button
          className="btn btn--filled--dark text-xl my-4"
          onClick={handleSubmit}
        >
          Publish ✈️
        </button>
      </div>
    </section>
  );
};

export default NewResource;
