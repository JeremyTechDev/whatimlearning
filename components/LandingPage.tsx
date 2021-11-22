const LandingPage = () => {
  const handleLogin = async () => {
    window.location.replace('http://127.0.0.1:8000/auth/twitter');
  };

  return (
    <main className="flex h-screen w-screen justify-center items-center bg-gray-200">
      <section className="shadow-2xl lg:m-40 bg-gray-100 rounded">
        <div className="pt-12 px-12 flex items-center justify-between">
          <span className="text-4xl md:text-6xl">🚀</span>
          <button
            onClick={handleLogin}
            className="bg-twitter text-sm md:text-base px-2 py-1 text-white rounded-lg"
          >
            Sign in with Twitter
          </button>
        </div>

        <div className="grid px-2 md:px-none grid-cols-1 md:grid-cols-8 gap-16 md:pt-16 pb-12 md:pb-24">
          <section className="col-span-1" />

          <section className="md:col-span-3 text-left flex flex-col items-start justify-center">
            <h1 className="text-2xl md:text-4xl font-extrabold">
              WhatImLearning
            </h1>
            <h3 className="md:text-xl my-6">
              Find out what your{' '}
              <span className="text-red">favorite creators</span> are learning
              and their <span className="text-red">favorite resources</span> 🚀
            </h3>

            <button className="bg-red text-white py-1 px-2 rounded-lg">
              Explore
            </button>
          </section>

          <section className="md:col-span-4 whitespace-nowrap overflow-y-hidden overflow-x-scroll">
            <div className="grid grid-cols-5 w-52">
              <span className="text-xl cursor-pointer">⬅️</span>
              <span className="text-xl cursor-pointer">1️⃣</span>
              <span className="text-xl cursor-pointer">2️⃣</span>
              <span className="text-xl cursor-pointer">3️⃣</span>
              <span className="text-xl cursor-pointer">➡️</span>
            </div>

            <section>
              <article className="inline-block w-36 md:w-52 h-36 md:h-52 bg-red">
                1
              </article>
              <article className="inline-block mx-2 w-36 md:w-52 h-36 md:h-52 bg-light">
                2
              </article>
              <article className="inline-block w-36 md:w-52 h-36 md:h-52 bg-orange">
                3
              </article>
            </section>
          </section>
        </div>

        <div className="text-right pb-4 pr-6">
          Crafted with ♥️ by{' '}
          <a
            href="https://twitter.com/AskJere"
            target="_blank"
            rel="noreferrer"
            className="text-red hover:underline"
          >
            @AskJere
          </a>
        </div>
      </section>
    </main>
  );
};

export default LandingPage;
