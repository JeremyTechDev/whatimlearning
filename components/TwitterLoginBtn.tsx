import handleFetch from '../helpers/fetch';

const TwitterLoginBtn = () => {
  const handleLogin = async () => {
    try {
      const data = await handleFetch({ url: '/auth/twitter' });
      window.location.replace(data.redirect_to);
    } catch (error) {
      alert('Ops! Something went wrong ☹️ Try again later');
    }
  };

  return (
    <button
      onClick={handleLogin}
      className="bg-twitter text-sm md:text-base px-2 py-1 text-white rounded-lg"
    >
      Sign in with Twitter
    </button>
  );
};

export default TwitterLoginBtn;
