import React from "react";
import ProItems from "./ProItems";
import Img1 from "../assets/img/desk-g8dc5c779b_1280.jpg";
import Img2 from "../assets/img/office-932926.jpg";
import Img3 from "../assets/img/olive-oil-968657_1920.jpg";
import Img4 from "../assets/img/pexels-jane-doan-1099680.jpg";
const Project = () => {
  return (
    <div className=" animated fadeInDownBig max-w-[1040] m-auto md:p-20 p-4 py-10 ">

      <div className="flex justify-between items-center m-6 gap-4 ">
        <div className=" h-[1px] bg-rose-500 w-[50%] rounded-md mx-10"></div>
        <h1 className="text-4xl font-bold text-center text-[#090f4f]">
          Projects{" "}
        </h1>
        <div className=" h-[1px] w-[50%] rounded-md  bg-rose-500 mx-10 "></div>
      </div>

      <p className="text-center py-10">
        Here is a complete list of our various completed projects
      </p>
      <div className="project grid  sm:grid-cols-2 justify-between place-items-center gap-12">
        <ProItems img={Img1} title="Project one" author="John Doe"  />
        <ProItems img={Img2} title="Project two" author="John Doe" />
        <ProItems img={Img3} title="Project three" author="John Doe" />
        <ProItems img={Img4} title="Project four" author="John Doe" />
      </div>
    </div>
  );
};

export default Project;
