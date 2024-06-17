import { useState } from "react";
import "./home.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { page } from "./redux/slicer";
function Home() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };
  const dispatch = useDispatch();
  window.addEventListener("resize", updateWindowWidth);
  return (
    <>
      {windowWidth < 767 ? (
        <>
          <div className="anime font-home w-full h-full flex flex-col gap-10 justify-start items-center">
            <div className="flex flex-col gap-3 justify-center items-center font-bold text-3xl text-center">
              <img
                src="https://scontent.fcnx4-1.fna.fbcdn.net/v/t39.30808-6/448617868_7490656041060510_7200582433962848854_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=oAfENk-jmtQQ7kNvgFDcJIK&_nc_ht=scontent.fcnx4-1.fna&oh=00_AYCVLK0-RetE9C5e1JX_Pax04BShhmaZIZE2rLqCYg__EQ&oe=6675BAFE"
                alt=""
                className="w-56 mb-5 rounded-lg"
              />
              <p>Full-Stack Developer </p>
              <p>Hi, My name is OHm Ratchatrin</p>
              <Link to="/about">
                <button
                  className={
                    "bg-slate-500 p-3 mt-5 text-white rounded-lg hover:bg-slate-200 hover:text-slate-600"
                  }
                  onClick={() => {
                    dispatch(page("about"));
                  }}
                >
                  Go to About Me
                </button>
              </Link>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="anime font-home w-full h-3/5 flex flex-col gap-10 justify-center items-center">
            <div className="flex flex-col gap-3 justify-center items-center font-bold text-4xl">
              <img
                src="https://scontent.fcnx4-1.fna.fbcdn.net/v/t39.30808-6/448617868_7490656041060510_7200582433962848854_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=oAfENk-jmtQQ7kNvgFDcJIK&_nc_ht=scontent.fcnx4-1.fna&oh=00_AYCVLK0-RetE9C5e1JX_Pax04BShhmaZIZE2rLqCYg__EQ&oe=6675BAFE"
                alt=""
                className="w-56 mb-5 rounded-lg"
              />
              <p>Full-Stack Developer </p>
              <p>Hi, My name is OHm Ratchatrin</p>
              <Link to="/about">
                <button
                  className={
                    "duration-300 bg-slate-500 p-3 mt-5 text-white rounded-lg hover:bg-slate-400 hover:text-slate-600"
                  }
                  onClick={() => {
                    dispatch(page("about"));
                  }}
                >
                  Go to About Me
                </button>
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Home;
