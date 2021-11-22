import Image from 'next/image';
import { FC } from 'react';
import { Technology } from '../types';

interface T {
  technologies: Technology[];
}

const LearningKit: FC<T> = ({ technologies }) => (
  <section className="h-72 whitespace-nowrap overflow-x-auto">
    {technologies.slice(1, 10).map((tech) => (
      <div
        key={tech.id}
        className={`bg-gray-100 align-middle w-48 m-2 shadow-lg inline-block ${tech.id === 56 ? 'selected' : ''}`}
      >
        <Image
          className="object-cover"
          width={tech.id === 56 ? 224 : 192}
          height={tech.id === 56 ? 224 : 192}
          alt={tech.title}
          src={tech.cover_img}
          loader={() => tech.cover_img}
        />
        <h5>{tech.title}</h5>
      </div>
    ))}
  </section>
);

export default LearningKit;
