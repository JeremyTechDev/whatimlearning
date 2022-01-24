import Image from 'next/image';
import { FC } from 'react';
import { NewTechnology, Technology } from '../types';

interface T {
  technology: Technology | NewTechnology;
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
      {technology.cover_img ? (
        <Image
          alt={technology.title}
          className="object-cover"
          height={isSelected ? 224 : 192}
          src={technology.cover_img}
          unoptimized
          width={isSelected ? 224 : 192}
        />
      ) : (
        <div className="h-56 flex flex-col items-center justify-center">
          <p className="text-6xl">🖼</p>
          <p>No Image</p>
        </div>
      )}
      <figcaption className='break-words'>{technology.title}</figcaption>
      {editView && (
        <button onClick={handleDelete} className="btn btn--red w-full">
          Delete
        </button>
      )}
    </figure>
  );
};

export default TechCard;
