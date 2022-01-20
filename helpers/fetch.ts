interface Props {
  url: string;
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  body?: object;
  includeToken?: boolean;
}

const handleFetch = (opts: Props) => {
  const { url, method = 'GET', body = null, includeToken = false } = opts;
  const BASE_URL =
    process.env.NODE_ENV === 'production'
      ? 'https://what-im-learning.herokuapp.com'
      : 'http://127.0.0.1:8000';

  return fetch(`${BASE_URL}${url}`, {
    method,
    ...(body && { body: JSON.stringify(body) }),
    ...(includeToken &&
      localStorage && {
        headers: {
          Authorization: `Token ${localStorage?.getItem('auth-token')}`,
          'Content-Type': 'application/json',
        },
      }),
  })
    .then((res) => res.json())
    .catch((error) => console.error(error));
};

export default handleFetch;
