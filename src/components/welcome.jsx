function Home() {
  return (
    <section className="overflow-hidden flex flex-col justify-around px-16 border-red-600 border-2 h-screen text-center my-0 mx-auto max-w-screen-sm">
      <img
        className="w-3/5 block border-red-600 border-2 mx-auto"
        src="img/shelfie-logo.png"
        alt="Shelfie Logo"
      />
      <div>
        <h1 className="max-w-full text-7xl text-teal-700 mb-6">
          Welcome to Shelfie
        </h1>
        <p className="max-w-full text-3xl text-slate-500	">
          Discover and review your favorite books
        </p>
      </div>
      <div>
        <a
          href=""
          className="max-w-full rounded-lg mb-8 py-4 block font-medium text-2xl text-white bg-teal-700"
        >
          Sign Up
        </a>
        <a
          href=""
          className="max-w-full rounded-lg py-4 block font-medium text-2xl text-white bg-teal-700"
        >
          Sign In
        </a>
      </div>
    </section>
  );
}
export default Home;
