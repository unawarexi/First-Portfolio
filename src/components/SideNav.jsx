import React, { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineMail,
  AiOutlineMenu,
  AiOutlineProject,
} from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { BsPerson } from "react-icons/bs";

const SideNav = () => {
  const [NavBar, setNavBar] = useState(false);
  const handletoggle = () => {
    setNavBar(!NavBar);
  };

  return (
    <>
      <div className="">
        <AiOutlineMenu
          className=" absolute self-end text-3xl  right-10 top-4 md:hidden text-black mx-4 my-2 z-[999] bg-white rounded-full p-1
          items-center justify-center "
          onClick={handletoggle}
        />

        {NavBar ? (
          <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-[90] transition ease-in-out duration-300">
            <a
              className="w-[75%] flex bg-gray-100 shadow-lg shadow-gray-400 rounded-full justify-center items-center text-center py-4 m-2
            hover:scale-110 cursor-pointer gap-4 transition ease-in-out duration-300"
            >
              <AiOutlineHome className="" 
              {...handletoggle} />
              <span> Home </span>
            </a>

            <a
              className=" anima flipInX w-[75%] flex bg-gray-100 shadow-lg shadow-gray-400 rounded-full justify-center items-center text-center py-4 m-2
            hover:scale-110 cursor-pointer gap-4 transition ease-in-out duration-300"
            >
              <GrProjects className="" />
              <span> About </span>
            </a>

            <a
              className=" anima flipInX w-[75%] flex bg-gray-100 shadow-lg shadow-gray-400 rounded-full justify-center items-center text-center py-4 m-2
            hover:scale-110 cursor-pointer gap-4 transition ease-in-out duration-300"
            >
              <AiOutlineProject className="" />
              <span> Project </span>
            </a>

            <a
              className=" anima flipInX w-[75%] flex bg-gray-100 shadow-lg shadow-gray-400 rounded-full justify-center items-center text-center py-4 m-2
            hover:scale-110 cursor-pointer gap-4 transition ease-in-out duration-300"
            >
              <BsPerson className="" />
              <span> Resume </span>
            </a>

            <a
              className="anima flipInX w-[75%] flex bg-gray-100 shadow-lg shadow-gray-400 rounded-full justify-center items-center text-center py-4 m-2
            hover:scale-110 cursor-pointer gap-4 transition ease-in-out duration-300"
            >
              <AiOutlineMail className="" />
              <span> Contact </span>
            </a>
          </div>
        ) : (
          <div className=" justify-center items-center bg-[#e6e6e3] w-[20%] absolute  z-[80] h-full md:block hidden backdrop-blur-md  p-4 px-4 py-10  ">
            <div className=" nav flex flex-col justify-start items-center gap-28 mt-6">
              <a
                href=""
                className=" anima flipInX first bg-white rounded-full shadow-lg shadow-gray-400 p-6 flex gap-4 font-semibold items-center text-xs hover:scale-95 transition ease-in-out duration-300 "
              >
                <AiOutlineHome className=" text-orange-500 " />
                <span> Home </span>
              </a>

              <a
                href=""
                className="anima flipInX first bg-white rounded-full shadow-lg font-semibold shadow-gray-400 p-6 flex gap-4 items-center text-xs hover:scale-95 transition ease-in-out duration-300"
              >
                <GrProjects className="text-lime-500" />
                <span> About </span>
              </a>

              <a
                href=""
                className=" anima flipInX first bg-white rounded-full shadow-lg font-semibold shadow-gray-400 p-6 flex gap-4 items-center text-xs hover:scale-95 transition ease-in-out duration-300"
              >
                <AiOutlineProject className=" text-fuchsia-500" />
                <span> Project </span>
              </a>

              <a
                href=""
                className=" anima flipInX first bg-white rounded-full font-semibold shadow-lg shadow-gray-400 p-6 flex gap-4 items-center text-xs hover:scale-95 transition ease-in-out duration-300"
              >
                <BsPerson className=" text-orange-500 " />
                <span> Resume </span>
              </a>

              <a
                href=""
                className=" anima flipInX first bg-white rounded-full shadow-lg font-semibold shadow-gray-400 p-6 flex gap-4 items-center hover:scale-95 transition ease-in-out duration-300 text-xs"
              >
                <AiOutlineMail className=" text-lime-500 " />
                <span> Contact </span>
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SideNav;
