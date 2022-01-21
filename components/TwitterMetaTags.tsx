import { FC } from 'react';

interface Props {
  card?: 'summary' | 'summary_large_image';
  creator?: string | null;
  description?: string | null;
  image?: string | null;
  title: string;
}

const TwitterMeta: FC<Props> = ({
  card = 'summary',
  creator,
  description,
  image,
  title,
}) => {

  return (
    <>
      <meta name="twitter:card" content={card} />
      <meta property="og:title" content={title} />
      {creator && <meta name="twitter:creator" content={`@${creator}`} />}
      {description && <meta property="og:description" content={description} />}
      <meta property="og:image" content={image || './favicon.ico'} />
    </>
  );
};

export default TwitterMeta;
