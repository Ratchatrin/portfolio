import { Link } from "react-router-dom";
import "./nav.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { page } from "./redux/slicer";
interface state {
  page: {
    page: string;
  };
}
function NavBar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };
  window.addEventListener("resize", updateWindowWidth);
  const dispatch = useDispatch();
  const pageRedux = useSelector((state: state) => state.page.page);
  return (
    <>
      <div
        className={`bg-white font text-lg font-bold flex w-full justify-center items-center ${
          windowWidth < 767 ? "gap-2" : "gap-10"
        } h-20`}
      >
        <Link to="/">
          <p
            className={`hover:border-black hover:border-b-2 ${
              pageRedux == "home" ? "border-b-4 border-black" : ""
            }`}
            onClick={() => {
              dispatch(page("home"));
            }}
          >
            Home
          </p>
        </Link>
        <Link to="/project">
          <p
            className={`hover:border-black hover:border-b-2 ${
              pageRedux == "project" ? "border-b-4 border-black" : ""
            }`}
            onClick={() => {
              dispatch(page("project"));
            }}
          >
            Project
          </p>
        </Link>
        <Link to="/about">
          <p
            className={`hover:border-black hover:border-b-2 ${
              pageRedux == "about" ? "border-b-4 border-black" : ""
            }`}
            onClick={() => {
              dispatch(page("about"));
            }}
          >
            About Me
          </p>
        </Link>
        <Link to="/contact">
          <p
            className={`hover:border-black hover:border-b-2 ${
              pageRedux == "contact" ? "border-b-4 border-black" : ""
            }`}
            onClick={() => {
              dispatch(page("contact"));
            }}
          >
            Contact
          </p>
        </Link>
      </div>
    </>
  );
}

export default NavBar;
