import { FC } from 'react';
import { TechnologyCard } from '../types';

interface T {
  details: TechnologyCard;
}
const TechCard: FC<T> = ({ details }) => {
  const { title, description, image } = details;

  return (
    <figure className="relative rounded-lg shadow-md overflow-hidden">
      <figcaption className="absolute p-3 w-full text-white z-10 bg-gradient-to-b from-gray-500 break-words">
        <h4 className="mb-1 leading-5">
          <span className="bg-red py-1 text-lg font-extrabold">
            {title || 'Your title comes here'}
          </span>
        </h4>

        <p className="m-0 leading-6">{description || 'You will see your brief description here'}</p>
      </figcaption>

      <img src={image || 'https://www.sinrumbofijo.com/wp-content/uploads/2016/05/default-placeholder.png'} />
    </figure>
  );
};

export default TechCard;
