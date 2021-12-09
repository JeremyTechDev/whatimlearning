import Image from 'next/image';
import { FC } from 'react';
import { Technology } from '../types';

interface T {
  technology: Technology;
  isSelected?: boolean;
  onClick?: () => void;
}

const TechCard: FC<T> = ({ technology, isSelected, onClick }) => {
  return (
    <figure
      onClick={onClick}
      className={`tech-card ${isSelected ? 'tech-card--active' : ''}`}
    >
      <Image
        alt={technology.title}
        className="object-cover"
        height={isSelected ? 224 : 192}
        loader={() => technology.cover_img}
        src={technology.cover_img}
        width={isSelected ? 224 : 192}
      />
      <figcaption>{technology.title}</figcaption>
    </figure>
  );
};

export default TechCard;
