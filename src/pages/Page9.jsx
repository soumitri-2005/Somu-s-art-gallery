import React from "react";
import pallete from "../images/color-palette.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Page9 = () => {
  return (
    <>
      <div className="page9 h-[35vh] w-screen bg-[#6a4c93] flex justify-content-center items-center flex-col ">
        <div className="h-[88%] w-full flex justify-between items-center flex-row ">
          <div className="h-full w-[45%] flex justify-center items-center gap-6">
            <img src={pallete} className="h-[90%] w-auto" />
            <div className="h-full w-[60%] flex justify-center items-center">
              <h1 className="font-two text-[4rem] text-start leading-[4rem] pl-4 pt-1 pb-1 border-l-[1rem] rounded-lg border-[#ff595e] bg-gradient-to-r from-[#f8ff6b] to-[#1bafb1] text-transparent bg-clip-text">
                Somu's Art Gallery.
              </h1>
            </div>
          </div>
          <div className="h-full w-[55%] flex justify-center items-center flex-row gap-4">
            <div className="h-full w-[30%] flex justify-center items-center flex-col gap-2 font-two">
              <a
                href="https://www.instagram.com/mesomu__/"
                className="p-2 rounded-full transition-all duration-300 hover:bg-[#ff595e1a] hover:scale-110 cursor-none"
              >
                <InstagramIcon className="icon text-[#ff595e] transition-all duration-300 hover:bg-[#ff595e] hover:text-[wheat]" />
              </a>
              <h1 className="pl-2 border-l-[4px] border-[#ff595e] bg-gradient-to-r from-[#f8ff6b] to-[#1bafb1] text-transparent bg-clip-text">
                Instagram
              </h1>
            </div>
            <div className="h-full w-[30%] flex justify-center items-center flex-col gap-2">
              <a
                href="https://www.linkedin.com/in/soumitri-mishra/"
                className="p-2 rounded-full transition-all duration-300 hover:bg-[#1983c424] hover:scale-110 cursor-none"
              >
                <LinkedInIcon className="icon text-[#1982c4] transition-all duration-300 hover:bg-[#1982c4] hover:text-[wheat]" />
              </a>
              <h1 className="pl-2 border-l-[4px] border-[#1982c4] bg-gradient-to-r from-[#f8ff6b] to-[#1bafb1] text-transparent bg-clip-text">
                LinkedIn
              </h1>
            </div>
            <div className="h-full w-[30%] flex justify-center items-center flex-col gap-2">
              <a
                href="https://github.com/soumitri-2005"
                className="p-2 rounded-full transition-all duration-300 hover:bg-[#00000010] hover:scale-110 cursor-none"
              >
                <GitHubIcon className="icon text-[black] transition-all duration-300 hover:bg-[black] hover:text-[wheat]" />
              </a>
              <h1 className="pl-2 border-l-[4px] border-[#8ac926] bg-gradient-to-r from-[#f8ff6b] to-[#1bafb1] text-transparent bg-clip-text">
                GitHub
              </h1>
            </div>
          </div>
        </div>

        <div className="h-[12%] w-full flex justify-center items-center font-two text-[0.9rem] mb-2">
          <p className="font-two text-[0.8rem] text-[white] ">
            Created by{" "}
            <a
              href="https://soumitri-2005.github.io/Bento-portfolio/"
              className="cursor-none text-[#ff595e]"
            >
              @Soumitri Mishra
            </a>{" "}
            🌻
          </p>
        </div>
      </div>
    </>
  );
};

export default Page9;
