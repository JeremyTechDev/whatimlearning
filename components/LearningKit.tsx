import { FC, useEffect, useState } from 'react';
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
    const url = `http://127.0.0.1:8000/users/${tech.user.id}/technologies/${tech.id}/`;
    handleDelete(confirmationMessage, url);
  };

  const handleDeleteResource = (tech: Technology, resource: Resource) => {
    const confirmationMessage = `Are you sure you want to remove this resource?\nThis action cannot be undone.`;
    const url = `http://127.0.0.1:8000/users/${tech.user.id}/technologies/${tech.id}/resources/${resource.id}/`;
    handleDelete(confirmationMessage, url);
  };

  useEffect(() => {
    if (user) {
      setIsLoading(true);
      fetch(`http://127.0.0.1:8000/users/${user.id}/technologies`)
        .then((res) => res.json())
        .then((data) => {
          setTechnologies(data);
          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(false);
          console.error(err);
        });
    }
  }, [user]);

  if (isLoading) return <IsLoading />;

  // No technologies screen
  if (technologies.count === 0) return <NoTechnologies user={user} />;

  return (
    <div className="z-50">
      <h1 className="text-3xl">
        This is what{' '}
        <a
          className="text-red font-bold hover:underline"
          href={`https://twitter.com/${user?.username}`}
          rel="noreferrer"
          target="_blank"
        >
          @{user?.username}
          <ExternalLink size="8" />
        </a>{' '}
        is learning 🚀
      </h1>

      <section className="whitespace-nowrap overflow-x-auto ">
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
        <p className="text-xl">Click 👆 to see more!</p>
      ) : (
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
      )}
    </div>
  );
};

export default LearningKit;
