import React from "react";
import Workitem from "./Workitem";
const data = [
  {
    year: "more",
    title: "Experience",
    duration: "3 Years",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo suscipit et sunt, alias consectetur odit praesentium officiis autem, fugiat maiores perferendis minima iste earum consequatur beatae nobis eligendi! Atque, tempore.",
  },
  {
    year: "more",
    title: "Skills / Tools",
    duration: "3 Years",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo suscipit et sunt, alias consectetur odit praesentium officiis autem, fugiat maiores perferendis minima iste earum consequatur beatae nobis eligendi! Atque, tempore.",
  },
  {
    year: "more",
    title: "Services",
    duration: "3 Years",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo suscipit et sunt, alias consectetur odit praesentium officiis autem, fugiat maiores perferendis minima iste earum consequatur beatae nobis eligendi! Atque, tempore.",
  },
  {
    year: "more",
    title: "Resume",
    duration: "3 Years",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo suscipit et sunt, alias consectetur odit praesentium officiis autem, fugiat maiores perferendis minima iste earum consequatur beatae nobis eligendi! Atque, tempore.",
  },
];
const Work = () => {
  return (
    <div id="work" className=" animated fadeInDownBig max-w-[1040px] m-auto md:pl-20 p-4 py-16">

       <div className="flex justify-between items-center gap-4 ">
        <div className=" h-[1px] bg-rose-500 w-[30%] m-10  rounded-md"></div>
        <h1 className="text-4xl font-bold text-center text-[#090f4f]"> About C.J </h1>
        <div className=" h-[1px] w-[30%] rounded-md m-10 bg-rose-500 "></div>
      </div>
      
      {data.map((item, idx) => (
        <Workitem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}

      <div>
        
      </div>
    </div>
  );
};

export default Work;