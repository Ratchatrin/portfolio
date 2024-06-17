import NavBar from "./NavBar";

function Contact() {
  return (
    <>
      <NavBar></NavBar>
      <div className="h-full text-center mt-10">
        <p className="font-bold text-4xl mb-10 font">My Contact</p>
        <div className="flex flex-col  w-full justify-center items-center gap-10 ">
          <a
            href="https://github.com/Ratchatrin"
            className="anime-r hover:shadow-lg rounded-lg"
            target="_blank"
          >
            <img
              src="https://pngimg.com/uploads/github/github_PNG23.png"
              alt="github"
              className="w-72 hover:bg-gray-300 duration-150 rounded-lg"
            />
          </a>
          <a
            href="https://www.facebook.com/s.ratchatrin/"
            target="_blank"
            className="w-full flex justify-center items-center anime-l "
          >
            <div className="flex justify-center  w-5/12 items-center max-w-xs gap-3 hover:bg-gray-300 duration-150 hover:shadow-lg p-3 rounded-lg">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/768px-Facebook_Logo_%282019%29.png"
                alt="facebook"
                className="w-14 h-14"
              />
              <p className="font-home font-bold text-3xl text-nowrap">
                Ohm Ratchatrin
              </p>
            </div>
          </a>
          <a
            href="https://www.instagram.com/i_o_h_m_l/"
            className="w-full flex justify-center items-center anime-r"
            target="_blank"
          >
            <div className="flex justify-center w-3/12 items-center max-w-xs gap-3 hover:bg-gray-300 duration-150 hover:shadow-lg p-3 rounded-lg">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1000px-Instagram_logo_2022.svg.png"
                alt="ig"
                className="w-14 h-14"
              />
              <p className="font-home font-bold text-3xl ">i_o_h_m_l</p>
            </div>
          </a>
          <div className="flex justify-center items-center max-w-xs anime-l">
            <img
              src="https://media.istockphoto.com/id/1125279178/vector/mail-line-icon.jpg?s=612x612&w=0&k=20&c=NASq4hMg0b6UP9V0ru4kxL2-J114O3TaakI467Pzjzw="
              alt="email"
              className="w-24"
            />
            <p className="font-home font-bold text-2xl">
              Ratchatrin12@hotmail.com
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
