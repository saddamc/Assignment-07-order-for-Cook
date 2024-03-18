const Banner = () => {
  return (
    <div>
      <div className="lg:flex space-y-4  justify-between mx-auto text-center items-center">
        <div>
          <h2 className="text-3xl font-bold">Recipe Calories</h2>
        </div>
        <div>
          <ul className="flex gap-6 opacity-70 mx-4 justify-center">
            <li>Home</li>
            <li>Recipes</li>
            <li>About</li>
            <li>Search</li>
          </ul>
        </div>
        <div className="flex justify-center">
          <label className="input input-bordered flex items-center gap-2 rounded-full border-none bg-slate-100 mx-2 ">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-6 h-6 opacity-50"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <input type="text" className="grow" placeholder="Search" />
          </label>
          <button className="bg-[#0BE58A] w-12 h-12 rounded-full">
            <img className="p-3" src="/src/image/Vector.svg" alt="" />
          </button>
        </div>
      </div>
      <div className="my-8 max-w-[1320px] mx-auto rounded-2xl ">
        <div className="bg-[url(/src/image/profile-background.jpg)] bg-no-repeat  justify-center text-center bg-center bg-cover max-w-[1320px] h-[600px] rounded-2xl ">
          <div className="lg:px-[80px] px-[10px] lg:py-[110px] py-[20px] space-y-6 ">
            <h1 className="text-5xl font-bold text-white">
              Discover an exceptional cooking
            </h1>
            <h1 className="text-5xl font-bold text-white">
              class tailored for you!
            </h1>
            <p className="text-white text-lg p-3">
              Learn and Master Basic Programming, Data Structures, Algorithm,
              OOP, Database and solve 500+ coding <br /> problems to become an
              exceptionally well world-class Programmer.
            </p>
            <div className="flex justify-center gap-6 p-2">
              <button className="bg-[#0BE58A] p-4 rounded-full text-xl font-semibold ">
                Explore Now
              </button>
              <button className="text-white border border-xl p-4 rounded-full text-xl font-semibold">
                Our Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
