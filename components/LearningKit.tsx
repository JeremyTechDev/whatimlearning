import Image from 'next/image';
import { FC, useEffect, useState } from 'react';
import ExternalLink from '../icons/ExternalLink';
import { PaginationResponse, Technology, User } from '../types';
import LinkCard from './LinkCard';
import TechCard from './TechCard';

interface T {
  user: User | null;
}

const LearningKit: FC<T> = ({ user }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [selected, setSelected] = useState<null | Technology>(null);
  const [technologies, setTechnologies] = useState<
    PaginationResponse<Technology>
  >({ count: 0, results: [], previous: null, next: null });

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

  // Loading screen
  if (isLoading) {
    return (
      <div className="flex h-96 items-center justify-center flex-col">
        <p className="text-8xl">⏱</p>
        <p className="text-4xl">Loading...</p>
      </div>
    );
  }

  // No technologies screen
  if (technologies.count === 0) {
    return (
      <div className="flex h-96 items-center justify-center flex-col">
        <p className="text-8xl">🤷‍♂️</p>
        <p className="text-4xl">Nothing in here</p>
        <p className="text-xl">
          Tell{' '}
          <a
            className="text-red hover:underline"
            href={`https://twitter.com/intent/tweet?screen_name=${user?.username}`}
            rel="noreferrer"
            target="_blank"
          >
            @{user?.username}
            <ExternalLink size="5" />
          </a>{' '}
          to share what they are learning on Twitter.
        </p>
      </div>
    );
  }

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
        {technologies?.results.map((tech, i) => (
          <TechCard
            key={tech.id}
            isSelected={tech.id === selected?.id}
            onClick={() => setSelected(tech)}
            technology={tech}
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
            />
          ))}
        </section>
      )}
    </div>
  );
};

export default LearningKit;
