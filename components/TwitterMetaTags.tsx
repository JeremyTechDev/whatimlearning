import { FC, Fragment } from 'react';

interface Props {
  card?: 'summary' | 'summary_large_image';
  creator?: string | null;
  description?: string | null;
  image?: string | null;
}

const TwitterMeta: FC<Props> = ({
  card = 'summary',
  creator,
  description,
  image,
}) => {
  return (
    <Fragment>
      <meta name="twitter:card" content={card} />
      <meta
        content={image || 'https://whatimlearning.live/logo.png'}
        property="og:image"
      />
      {creator && <meta name="twitter:creator" content={`@${creator}`} />}
      {description && <meta content={description} property="og:description" />}
    </Fragment>
  );
};

export default TwitterMeta;
