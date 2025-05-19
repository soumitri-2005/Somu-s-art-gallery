import React from "react";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-[450px] bg-[#dbaa37] rounded-tr-[50%] rounded-br-[50%] border-r-[30px] border-[#b67029] cursor-none flex justify-center items-center shadow-md z-50 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <nav className="flex flex-col p-4 gap-4 options">
        <div className="one bg-[red] ml-[60px]">
          <a href="#" className=" cursor-none">
            Home
          </a>
        </div>
        <div className="two bg-[green] ml-[150px]">
          <a href="#" className=" cursor-none">
            About
          </a>
        </div>
        <div className="three bg-[blue] ml-[150px] mt-[30px]">
          <a href="#" className="cursor-none">
            Sketchbook
          </a>
        </div>
        <div className="four bg-[orange] ml-[60px]">
          <a href="#" className=" cursor-none">
            Contact
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
