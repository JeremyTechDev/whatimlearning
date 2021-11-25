import { ChangeEvent, useState } from 'react';

import LinkCard from './LinkCard';
import { ResourceCard } from '../types';

const DEFAULT_RESOURCE: ResourceCard = {
  isFree: false,
  url: '',
};

const NewResource = () => {
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

  return (
    <section className="container mx-auto">
      <h2 className="text-3xl">Resources</h2>

      <h5 className="text-lg">
        Add links to the resources you are using to learn...
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
            <div key={keyCount++} className="grid grid-cols-12 gap-2 my-4">
              <p className="col-span-1 text-right">#{index + 1}</p>
              <input
                className="col-span-9 border rounded"
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
                title="Remove item"
                className="col-span-1 border h-7 w-7 rounded hover:bg-gray-200"
                onClick={() => handleRemoveResource(index)}
              >
                x
              </button>
            </div>
          );
        })}

        <button
          className="border rounded border-light px-2 py-1 text-xl hover:bg-light hover:text-white"
          onClick={handleNewResource}
        >
          Add new Resource
        </button>
      </section>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        {resources.map((resource, index) => (
          <LinkCard key={keyCount++} resource={resource} index={index} />
        ))}
      </div>
    </section>
  );
};

export default NewResource;