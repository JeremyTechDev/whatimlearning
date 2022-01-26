import { FC, useEffect, useState } from 'react';

import handleFetch from '../helpers/fetch';
import handleDelete from '../helpers/handleDelete';
import ExternalLink from '../icons/ExternalLink';
import { PaginationResponse, Resource, Technology, User } from '../types';
import { IsLoading, NoTechnologies } from './Helpers';
import LinkCard from './LinkCard';
import TechCard from './TechCard';

interface T {
  user: User | null;
  editView?: boolean;
}

const LearningKit: FC<T> = ({ user, editView = false }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [selected, setSelected] = useState<null | Technology>(null);
  const [technologies, setTechnologies] = useState<
    PaginationResponse<Technology>
  >({ count: 0, results: [], previous: null, next: null });

  const handleDeleteTech = (tech: Technology) => {
    const confirmationMessage = `Are you sure you want to remove the ${tech.title} learning kit?\nThis will remove all its resources as as well and cannot be undone.`;
    const url = `/users/${tech.user.id}/technologies/${tech.id}/`;
    handleDelete(confirmationMessage, url);
  };

  const handleDeleteResource = (tech: Technology, resource: Resource) => {
    const confirmationMessage = `Are you sure you want to remove this resource?\nThis action cannot be undone.`;
    const url = `/users/${tech.user.id}/technologies/${tech.id}/resources/${resource.id}/`;
    handleDelete(confirmationMessage, url);
  };

  useEffect(() => {
    if (user) {
      setIsLoading(true);
      handleFetch({
        url: `/users/${user.id}/technologies`,
      })
        .then((data) => {
          if (data?.count) {
            setTechnologies(data);
          }
          setIsLoading(false);
        })
        .catch(() => setIsLoading(false));
    }
  }, [user]);

  if (isLoading) return <IsLoading />;

  // No technologies screen
  if (technologies?.count === 0) return <NoTechnologies user={user} />;

  return (
    <div className="z-50">
      <h1 className="text-xl md:text-3xl">
        This is what{' '}
        <a
          className="text-red font-bold hover:underline"
          href={`https://twitter.com/${user?.username}`}
          rel="noreferrer"
          target="_blank"
        >
          @{user?.username}
          <ExternalLink size="32px" />
        </a>{' '}
        is learning 🚀
      </h1>

      <section className="whitespace-nowrap overflow-x-auto">
        {technologies.results.map((tech) => (
          <TechCard
            key={tech.id}
            isSelected={tech.id === selected?.id}
            onClick={() => setSelected(tech)}
            technology={tech}
            editView={editView}
            handleDelete={() => handleDeleteTech(tech)}
          />
        ))}
      </section>

      {selected === null ? (
        <p className="text-xl">Click one Learning Kit 👆 to see more!</p>
      ) : selected.resources.length ? (
        <section>
          <div className="my-8">
            <h3 className="text-lg">
              {selected.user.twitter_name} is learning...
            </h3>
            <h4 className="text-2xl font-bold">{selected.title}</h4>
          </div>

          <section className="mb-6 grid gap-4 lg:grid-cols-3">
            {selected.resources.map((resource, i) => (
              <LinkCard
                index={i}
                key={resource.id}
                resource={{ ...resource, isFree: resource.is_free }}
                editView={editView}
                handleDelete={() => handleDeleteResource(selected, resource)}
              />
            ))}
          </section>
        </section>
      ) : (
        <p className="text-lg md:text-xl my-4">
          🤷‍♂️ @{user?.username} has not added any resources yet
        </p>
      )}
    </div>
  );
};

export default LearningKit;
