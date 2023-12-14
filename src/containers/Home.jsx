import React from "react";
import { LoginBg, Personal } from "../assets/img";
import { TypeAnimation } from "react-type-animation";
import SideNav from "../components/SideNav";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
const Home = () => {
  return (
    <div>
      <div className="hompage w-full h-full flex relative">
        <div className="h-screen w-screen bg-white"></div>

        <div className="  flex  flex-col items-center justify-center top-4 absolute ml-[20%] gap-4 z-50">
          {/*==========================  ADDING TEXTS AND BUTTONS  ===============================*/}
          <div className=" first-text  animated fadeInDownBig p-6 mt-20  ">
            <h1 className="text-2xl font-semibold  text-white ">
              WELCOME BOSS
            </h1>
            <h1 className=" i-am text-color text-3xl font-semibold p-2 rounded-md text-white  ">
              {" "}
              <TypeAnimation
                sequence={[
                  " I'M ANDREW CHUKWUWEIKE. J",
                  1000,
                  " I'M A FRONTEND-DEVELOPER",
                  2000,
                  " I'M A BACK-END DEVELOPER",
                  2000,
                  "I'M A SOFT-WARE ENGINEER"
                ]}
                cursor={true}
                repeat={Infinity}
                style={{ display: "inline-block" }}
              />
            
            </h1>
            <p className=" text-rose-500 font-bold">FULL-STACK DEVELOPER</p>
          </div>
          </div>


          <div className="p-6 animated fadeInDownBig absolute z-[80] flex">
            <button className=" btn bg-white p-4 text-sm mr-2 rounded-lg text-white font-semibold">
              {" "}
              Download cv{" "}
            </button>{" "}
            {""}
            <button className=" bg-white p-4 text-sm m-2 rounded-lg">
              {" "}
              Hire me{" "}
            </button>
          </div>


          <div className=" bgg flex  items-cente w-full  h-full z-10 absolute px-4 py-4  lg:items-center">
            {/*==========================  ADDING SVG DESIGN ===============================*/}
            <div className="custom-shape-divider-bottom-1685378142">
              <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
              >
                <path
                  d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                  className="shape-fill"
                ></path>
              </svg>
            </div>

            {/**======================== ADDING LANDING IMAGE ================================ */}

            <div className=" landing ml-auto justify-center z-[99] -mt-6 ">
              
              <div className="mb-4 animat bounceInDown">
                <img
                  src={Personal}
                  alt="personal image"
                  className="personal-image w-60 h-full rounded-full shadow-md shadow-gray-500 "
                />
              </div>

              {/*==========================  ADDING Social media icons ===============================*/}

              <div className="icons flex gap-2 pr-4 animat bounceInDown">
                <a
                  href=""
                  className="first bg-white rounded-full shadow-lg font-semibold shadow-gray-400  p-4 items-center  hover:scale-95 transition ease-in-out duration-300 text-lg"
                >
                  <AiFillGithub className=" text-black" />
                </a>

                <a
                  href=""
                  className="first bg-white rounded-full shadow-lg font-semibold shadow-gray-400  p-4 items-center  hover:scale-95 transition ease-in-out duration-300 text-lg"
                >
                  <AiFillTwitterCircle className=" text-blue-600" />
                </a>

                <a
                  href=""
                  className="first bg-white rounded-full shadow-lg  shadow-gray-400  p-4 items-center  hover:scale-95 transition ease-in-out duration-300 text-lg"
                >
                  <AiFillInstagram className=" text-rose-600" />
                </a>

                <a
                  href=""
                  className="first bg-white rounded-full shadow-lg  shadow-gray-400  p-4   hover:scale-95 transition ease-in-out duration-300 
                text-lg"
                >
                  <AiFillLinkedin className=" text-sky-600" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Home;
