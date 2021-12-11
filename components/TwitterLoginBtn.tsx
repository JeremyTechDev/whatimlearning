const TwitterLoginBtn = () => {
  const handleLogin = async () => {
    const res = await fetch('http://127.0.0.1:8000/auth/twitter');
    const data = await res.json();

    window.location.replace(data.redirect_to);
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
