import Image from 'next/image';
import { FC } from 'react';
import { Technology } from '../types';

interface T {
  technology: Technology;
  isSelected?: boolean;
  onClick?: () => void;
  editView?: boolean;
  handleDelete?: () => void;
}

const TechCard: FC<T> = ({
  technology,
  isSelected,
  onClick,
  editView = false,
  handleDelete,
}) => {
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
      {editView && (
        <button onClick={handleDelete} className="btn btn--red w-full">
          Delete
        </button>
      )}
    </figure>
  );
};

export default TechCard;
