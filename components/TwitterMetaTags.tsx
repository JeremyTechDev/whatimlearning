import { FC } from 'react';

interface Props {
  card?: 'summary' | 'summary_large_image';
  creator?: string | null;
  description?: string | null;
  image?: string | null;
  title: string;
  path?: string | null;
}

const TwitterMeta: FC<Props> = ({
  card = 'summary',
  creator,
  description,
  image,
  title,
  path = '',
}) => {
  const defaultURL = process.env.PRODUCTION_URL;

  return (
    <>
      <meta name="twitter:card" content={card} />
      <meta property="og:title" content={title} />
      {creator && <meta name="twitter:creator" content={`@${creator}`} />}
      {description && <meta property="og:description" content={description} />}
      {image && <meta property="og:image" content={image} />}
      <meta property="og:url" content={defaultURL + path} />
    </>
  );
};

export default TwitterMeta;
