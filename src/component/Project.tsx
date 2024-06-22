import { useState } from "react";
import NavBar from "./NavBar";
import "./home.css";
function Project() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };
  window.addEventListener("resize", updateWindowWidth);
  return (
    <>
      <NavBar></NavBar>
      {windowWidth < 767 ? (
        <>
          <div className="flex flex-col justify-start pt-4 items-center font">
            <div className="anime-l  flex flex-col gap-5 w-11/12 max-w-6xl justify-center items-center mb-5 bg-gray-400 p-5 rounded-lg ">
              <a
                href="https://the-brand-shop.onrender.com"
                target="_blank"
                className="flex justify-center items-center"
              >
                <img
                  src="https://i.ibb.co/10CYcCN/the-brand.jpg"
                  alt="the_brand"
                  className="w-full rounded-lg shadow-xl"
                />
              </a>
              <div className="flex justify-between items-center flex-col gap-3 p-2 bg-white rounded-lg">
                <a href="https://the-brand-shop.onrender.com" target="_blank">
                  <p className="font-bold text-3xl text-center ">
                    The Brand Shop
                  </p>
                </a>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/94/MERN-logo.png"
                  alt=""
                  className="w-28 h-12"
                />
                <a
                  href="https://github.com/Ratchatrin/The-Brand-Shop"
                  target="_blank"
                  className="flex justify-center items-center "
                >
                  <img
                    src="https://pngimg.com/uploads/github/github_PNG23.png"
                    alt="github"
                    className="w-6/12 max-w-sm "
                  />
                </a>
              </div>
            </div>
            <div className="anime-l flex flex-col gap-5 w-11/12 max-w-6xl justify-center items-center mb-5 bg-gray-400 p-5 rounded-lg ">
              <a
                href="https://beatshop-1.onrender.com/"
                target="_blank"
                className="flex justify-center items-center"
              >
                <img
                  src="https://i.ibb.co/k4C6Z1B/beat.jpg"
                  alt="beats"
                  className="w-full rounded-lg shadow-xl"
                />
              </a>
              <div className="flex justify-between items-center flex-col gap-3 p-2 bg-white rounded-lg">
                <a href="https://the-brand-shop.onrender.com" target="_blank">
                  <p className="font-bold text-3xl text-center ">
                    Beats by Dr.dre
                  </p>
                </a>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/94/MERN-logo.png"
                  alt=""
                  className="w-28 h-12"
                />
                <a
                  href="https://github.com/Ratchatrin/BeatShop"
                  target="_blank"
                  className="flex justify-center items-center "
                >
                  <img
                    src="https://pngimg.com/uploads/github/github_PNG23.png"
                    alt="github"
                    className="w-6/12 max-w-sm "
                  />
                </a>
              </div>
            </div>
            <div className="anime-l flex flex-col gap-5 w-11/12 max-w-6xl justify-center items-center mb-5 bg-gray-400 p-5 rounded-lg ">
              <a
                href="https://recipes-69t.pages.dev/"
                target="_blank"
                className="flex justify-center items-center"
              >
                <img
                  src="https://i.ibb.co/S5JhRqS/cooking.jpg"
                  alt="cocking"
                  className="w-full rounded-lg shadow-xl"
                />
              </a>
              <div className="flex justify-between items-center flex-col gap-3 p-2 bg-white rounded-lg">
                <a href="https://the-brand-shop.onrender.com" target="_blank">
                  <p className="font-bold text-3xl text-center ">
                    Cooking Buddy
                  </p>
                </a>
                <img
                  src="https://logos-world.net/wp-content/uploads/2023/08/React-Symbol.png"
                  alt=""
                  className="w-24 h-12"
                />
                <a
                  href="https://github.com/Ratchatrin/recipes"
                  target="_blank"
                  className="flex justify-center items-center "
                >
                  <img
                    src="https://pngimg.com/uploads/github/github_PNG23.png"
                    alt="github"
                    className="w-6/12 max-w-sm "
                  />
                </a>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col justify-start pt-10 items-center  font">
            <div className="anime-l hover:scale-105 duration-150 flex w-11/12 max-w-6xl justify-center items-center mb-5 bg-gray-400 p-5 rounded-lg ">
              <a
                href="https://the-brand-shop.onrender.com"
                target="_blank"
                className="flex justify-center items-center"
              >
                <img
                  src="https://i.ibb.co/10CYcCN/the-brand.jpg"
                  alt="the_brand"
                  className="w-11/12 max-w-2xl rounded-lg shadow-xl"
                />
              </a>
              <div className="flex justify-between items-center flex-col gap-7 p-2 bg-white rounded-lg">
                <a href="https://the-brand-shop.onrender.com" target="_blank">
                  <p className="font-bold text-3xl text-center ">
                    The Brand Shop
                  </p>
                </a>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/94/MERN-logo.png"
                  alt=""
                  className="w-30 h-16"
                />
                <a
                  href="https://github.com/Ratchatrin/The-Brand-Shop"
                  target="_blank"
                  className="flex justify-center items-center "
                >
                  <img
                    src="https://pngimg.com/uploads/github/github_PNG23.png"
                    alt="github"
                    className="w-5/12 max-w-sm "
                  />
                </a>
              </div>
            </div>
            <div className="anime-r  hover:scale-105 duration-150 flex w-11/12 max-w-6xl justify-center items-center mb-5 bg-gray-400 p-5 rounded-lg ">
              <a
                href="https://beatshop-1.onrender.com/"
                target="_blank "
                className="flex justify-center items-center"
              >
                <img
                  src="https://i.ibb.co/k4C6Z1B/beat.jpg"
                  alt="the_brand"
                  className="w-11/12 max-w-2xl rounded-lg shadow-xl"
                />
              </a>
              <div className="flex justify-between items-center flex-col gap-7 p-2 bg-white rounded-lg ">
                <a href="https://beatshop-1.onrender.com/" target="_blank">
                  <p className="font-bold text-3xl text-center ">
                    Beats by Dr.dre
                  </p>
                </a>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/94/MERN-logo.png"
                  alt=""
                  className="w-30 h-16"
                />
                <a
                  href="https://github.com/Ratchatrin/BeatShop"
                  target="_blank"
                  className="flex justify-center items-center "
                >
                  <img
                    src="https://pngimg.com/uploads/github/github_PNG23.png"
                    alt="github"
                    className="w-5/12 max-w-sm bg-white rounded-lg"
                  />
                </a>
              </div>
            </div>
            <div className="anime-l flex hover:scale-105 duration-150 w-11/12 max-w-6xl justify-center items-center mb-5 bg-gray-400 p-5 rounded-lg ">
              <a
                href="https://recipes-69t.pages.dev/"
                target="_blank"
                className="flex justify-center items-center"
              >
                <img
                  src="https://i.ibb.co/S5JhRqS/cooking.jpg"
                  alt="the_brand"
                  className="w-11/12 max-w-2xl rounded-lg shadow-xl"
                />
              </a>
              <div className="flex justify-between items-center flex-col gap-7 p-2 bg-white rounded-lg">
                <a href="https://recipes-69t.pages.dev/" target="_blank">
                  <p className="font-bold text-3xl text-center ">
                    Cooking Buddy
                  </p>
                </a>
                <img
                  src="https://logos-world.net/wp-content/uploads/2023/08/React-Symbol.png"
                  alt=""
                  className="w-30 h-16"
                />
                <a
                  href="https://github.com/Ratchatrin/recipes"
                  target="_blank"
                  className="flex justify-center items-center "
                >
                  <img
                    src="https://pngimg.com/uploads/github/github_PNG23.png"
                    alt="github"
                    className="w-5/12 max-w-sm "
                  />
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Project;
