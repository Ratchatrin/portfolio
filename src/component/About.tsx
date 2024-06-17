import { useState } from "react";
import NavBar from "./NavBar";

function AboutMe() {
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
          <div className="w-full flex justify-center items-center anime">
            <div className="font-home font-bold text-xl flex flex-col justify-center items-center w-10/12 max-w-xl text-pretty">
              <img
                src="https://scontent.fcnx4-1.fna.fbcdn.net/v/t39.30808-6/448617868_7490656041060510_7200582433962848854_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=oAfENk-jmtQQ7kNvgFDcJIK&_nc_ht=scontent.fcnx4-1.fna&oh=00_AYCVLK0-RetE9C5e1JX_Pax04BShhmaZIZE2rLqCYg__EQ&oe=6675BAFE"
                alt=""
                className="w-56 mb-5 rounded-lg"
              />
              <div className="mb-20">
                <p>
                  Hello, my name is OHm Ratchatrin. I am a dedicated and
                  passionate full stack developer with extensive experience in
                  designing, developing, and maintaining complex web
                  applications. My expertise spans across both front-end and
                  back-end technologies, allowing me to deliver seamless and
                  efficient solutions that meet the unique needs of each
                  project.
                </p>
                <br />
                <p className="text-4xl mb-5 text-center">Technical Skills</p>
                <div className="grid grid-cols-2 justify-items-center gap-5">
                  <div className="flex  gap-3">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/2048px-HTML5_Badge.svg.png"
                      alt="html"
                      className="w-14 h-14"
                    />
                    <img
                      src="https://static-00.iconduck.com/assets.00/file-type-css-icon-902x1024-dqy5inwy.png"
                      alt="css"
                      className="w-14 h-14"
                    />
                  </div>
                  <div className="flex  gap-3">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
                      alt="js"
                      className="w-14 h-14"
                    />
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"
                      alt="ts"
                      className="w-14 h-14"
                    />
                  </div>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/9/94/MERN-logo.png"
                    alt="mern"
                    className="w-30 h-16 col-span-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="w-full flex justify-center items-center anime">
            <div className="font-home font-bold text-2xl flex flex-col justify-center items-center w-10/12 max-w-xl text-pretty">
              <img
                src="https://scontent.fcnx4-1.fna.fbcdn.net/v/t39.30808-6/448617868_7490656041060510_7200582433962848854_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=oAfENk-jmtQQ7kNvgFDcJIK&_nc_ht=scontent.fcnx4-1.fna&oh=00_AYCVLK0-RetE9C5e1JX_Pax04BShhmaZIZE2rLqCYg__EQ&oe=6675BAFE"
                alt=""
                className="w-56 mb-5 rounded-lg"
              />
              <div className="text-3xl">
                <p>
                  Hello, my name is OHm Ratchatrin. I am a dedicated and
                  passionate full stack developer with extensive experience in
                  designing, developing, and maintaining complex web
                  applications. My expertise spans across both front-end and
                  back-end technologies, allowing me to deliver seamless and
                  efficient solutions that meet the unique needs of each
                  project.
                </p>
                <br />
                <p className="text-4xl mb-5 text-center">Technical Skills</p>
                <div className="grid grid-cols-3  justify-items-center">
                  <div className="flex  gap-3">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/2048px-HTML5_Badge.svg.png"
                      alt="html"
                      className="w-14 h-14"
                    />
                    <img
                      src="https://static-00.iconduck.com/assets.00/file-type-css-icon-902x1024-dqy5inwy.png"
                      alt="css"
                      className="w-14 h-14"
                    />
                  </div>
                  <div className="flex  gap-3">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
                      alt="js"
                      className="w-14 h-14"
                    />
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"
                      alt="ts"
                      className="w-14 h-14"
                    />
                  </div>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/9/94/MERN-logo.png"
                    alt="mern"
                    className="w-30 h-16 ml-3"
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default AboutMe;
