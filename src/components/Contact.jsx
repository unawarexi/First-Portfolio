import React from "react";
import img5 from "../assets/img/snip.jpg";

const Contact = () => {
  return (
    <>
      <div className="max-w-1040 m-auto  p-6 ">
        <div className="flex justify-between items-center mb-16 gap-4 ">
          <div className=" h-[1px] bg-rose-500 w-[35%]  rounded-md mx-5"></div>
          <h1 className="text-3xl font-bold text-center text-[#090f4f]">
            {" "}
            Contact C.J{" "}
          </h1>
          <div className=" h-[1px] w-[35%] rounded-md bg-rose-500 mx-5"></div>
        </div>

        <div className="former grid grid-cols-1 md:grid-cols-2 gap-10 h-[500px] p-16 rounded-2xl  ">
          <form className="items-center justify-center">
            <div className="w-full ">
              <div className="flex gap-2  ">
                <div>
                  <input
                    type="text"
                    name="names"
                    id="Names"
                    placeholder="Name"
                    className="p-2 gap-2 m-2 border-none rounded-md w-full "
                  />
                </div>

                <div>
                  <input
                    type="number"
                    name="number"
                    id="number"
                    placeholder="phone"
                    className="p-2 gap-2 m-2  border-none rounded-md w-full"
                  />
                </div>
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@g-mail.com"
                  className="p-2 gap-2 m-2  border-none rounded-md w-full"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="subject"
                  className="p-2 gap-2 m-2  border-none rounded-md w-full"
                />
              </div>

              <div>
                <textarea
                  type="text"
                  name="textarea"
                  id="textarea"
                  placeholder="enter text"
                  rows= "6"
                  className="p-6 gap-2 m-2 py-2 border-none rounded-md w-full"
                />
              </div>
            </div>
            <button className="btn bg-[#090f4f] text-gray-100 mt-4 w-full p-3 rounded-full font-semibold">
              Send Message
            </button>
          </form>

          <div className="w-full flex justify-center">
            <img
              src={img5}
              alt="my image"
              className=" h-[40%] object-contain rounded-2xl shadow-md shadow-[#c1d0e0] "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
