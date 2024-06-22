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
          <div className="anime font w-full h-full flex flex-col gap-10 justify-start items-center">
            <div className="flex font-home font-bold flex-col gap-3 justify-center items-center  text-3xl text-center">
              <img
                src="https://i.ibb.co/ydbqNZx/306749716-746133143151985-792680549932249393-n.jpg"
                alt="profile"
                className="w-56 mb-5 rounded-lg"
              />
              <p>Full-Stack Developer </p>
              <p>Hi, My name is OHm Ratchatrin</p>
              <Link to="/about">
                <button
                  className={
                    "bg-slate-500 p-3 mt-5 text-white rounded-lg hover:bg-slate-200 hover:text-slate-700"
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
          <div className="anime font w-full h-3/5 flex flex-col gap-10 justify-center items-center">
            <div className="flex font-home font-bold flex-col gap-3 justify-center items-center  text-4xl">
              <img
                src="https://i.ibb.co/ydbqNZx/306749716-746133143151985-792680549932249393-n.jpg"
                alt="profile"
                className="w-56 mb-5 rounded-lg"
              />
              <p>Full-Stack Developer </p>
              <p>Hi, My name is OHm Ratchatrin</p>
              <Link to="/about">
                <button
                  className={
                    "duration-300 bg-slate-500 p-3 mt-5 text-white rounded-lg hover:bg-slate-400 hover:text-slate-700"
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
