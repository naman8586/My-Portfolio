import React from "react";
import Image from "next/image";
import { assets, workData } from "@/assets/assets";

// https://todo-list-lovat-mu-88.vercel.app/

const Work = ({ isDarkMode }) => {
  return (
    <div
      id="work"
      className={`w-full px-[12%] py-16 scroll-mt-20 ${
        isDarkMode ? "bg-darkTheme text-white" : "bg-gray-50 text-gray-800"
      }`}
    >
      <h4
        className={`text-lg text-center font-Ovo mb-2 ${
          isDarkMode ? "text-gray-400" : "text-gray-600"
        }`}
      >
        My Portfolio
      </h4>
      <h2 className="text-5xl text-center font-Ovo">My Latest Work</h2>
      <p
        className={`max-w-2xl text-center mx-auto mt-5 mb-12 ${
          isDarkMode ? "text-gray-300" : "text-gray-700"
        }`}
      >
        Welcome to my Web development portfolio! Explore a collection of
        projects showcasing my expertise in Front-end development.
      </p>

      <div className="grid grid-cols-auto my-10 gap-5">
        {workData.map((project, index) => (
          <div
            key={index}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div
              className={`w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7 ${
                isDarkMode
                  ? "bg-gray-800 text-gray-300 group-hover:bg-gray-700"
                  : "bg-white text-gray-800 group-hover:bg-lightHover"
              }`}
            >
              <div>
                <h2
                  className={`font-semibold ${
                    isDarkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  {project.title}
                </h2>
                <p
                  className={`text-sm mt-1 ${
                    isDarkMode ? "text-gray-400" : "text-gray-700"
                  }`}
                >
                  {project.description}
                </p>
              </div>
              <div
                className={`border rounded-full w-9 h-9 flex items-center justify-center shadow-[2px_2px_0] transition ${
                  isDarkMode
                    ? "border-gray-500 shadow-gray-600 group-hover:bg-lime-400"
                    : "border-black shadow-black group-hover:bg-lime-300"
                }`}
              >
                <Image
                  src={assets.send_icon}
                  alt="Send Icon"
                  className="w-5"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <a
        href=""
        className={`w-max flex items-center justify-center gap-2 border-[0.5px] rounded-full py-3 px-10 mx-auto my-20 duration-500 ${
          isDarkMode
            ? "text-gray-300 border-gray-500 hover:bg-gray-700"
            : "text-gray-700 border-gray-700 hover:bg-lightHover"
        }`}
      >
        Show More
        <Image
          src={assets.right_arrow_bold}
          alt="Right Arrow"
          className="w-4"
        />
      </a>
    </div>
  );
};

export default Work;