import { FC } from 'react';
import { LinkPreview } from '@dhaiwat10/react-link-preview';

import { ResourceCard } from '../types';

interface T {
  resource: ResourceCard;
  index: number;
  editView?: boolean;
  handleDelete?: () => void;
}

const LinkCard: FC<T> = ({ resource, index, editView = false, handleDelete }) =>
  resource.url ? (
    <article className="overflow-hidden">
      <div className="font-bold flex items-center justify-between">
        <span>#{index + 1}</span>
        {editView && (
          <button onClick={handleDelete} className="btn btn--red">
            Delete
          </button>
        )}
      </div>

      <LinkPreview openInNewTab url={resource.url} />

      {resource.isFree && (
        <span className="flex items-center justify-center m-2">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="limegreen"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
            />
          </svg>
          FREE
        </span>
      )}
    </article>
  ) : null;

export default LinkCard;
