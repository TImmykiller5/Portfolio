import React from "react";
import { useEffect, useState } from "react";

function SecondPage() {
  const [parHeight, setParHeight] = useState(10);
  const setter = () => {
    const skillsContainer =
      document.getElementById("skills-container").clientHeight;
    const parentHeight = skillsContainer - 250;
    setParHeight(parentHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", setter);
    const skillsContainer =
      document.getElementById("skills-container").clientHeight;
    const parentHeight = skillsContainer - 126;
    setParHeight(parentHeight);
  }, []);

  return (
    <div className="">
      <div className=" relative  ">
        <div className=" bg-orange-400 text-zinc-900 px-10 sm:px-12  lg:px-40 text-center pt-16 pb-80">
          <div id="about-me" className=" text-2xl sm:text-4xl pb-6 font-extrabold">
            Hi, I'm Timmy, Nice to meet you.
          </div>
          <div className=" sm:text-xl text-base  sm:leading-8 font-medium">
            Venturing into the realm of web development 18 months ago, I've
            dived into the world of personal projects, absorbing invaluable
            insights from hands-on experience. While my journey doesn't boast
            professional collaborations yet, my quiet confidence and unyielding
            curiosity drive me. I'm dedicated to advancing my skills, taking on
            coding challenges with each project, and eagerly embracing every
            chance for growth as I set my sights on an entry-level developer
            role.
          </div>
        </div>
        <div
          style={{ height: `${parHeight}px` }}
          className="relative md:mx-20 lg:mx-28 mx-10 xl:mx-60 "
        >
          <div
            id="skills-container"
            className="items-center rounded-3xl w-full bg-black border lg:items-start  border-gray-800 shadow-slate-900 absolute -top-64 flex flex-col lg:flex-row "
          >
            <div className="flex h-full  flex-col shadow-md  lg:border-r border-b border-gray-800 text-center items-center gap-12 px-10 sm:w-11/12 bg-black py-6 pt-10 rounded-t-3xl  lg:rounded-tr-none lg:rounded-l-3xl ">
              <div className="flex flex-col gap-6  items-center">
                <div className=" w-fit p-2 rounded-full bg-lime-500">
                  <img alt="frontend logo" className=" sm:w-16 w-10" src="/images/back.svg" />
                </div>
                <span className=" sm:text-2xl font-bold">
                  Frontend Developer
                </span>
                <span className=" sm:text-lg">
                  I enjoy creating backend solutions by writing code that turns
                  ideas into functional components.
                </span>
              </div>
              <div className=" sm:text-lg flex flex-col gap-2 sm:gap-4">
                <span className="  text-purple-300 sm:font-bold">
                  Languages I Speak:
                </span>
                <span>HTML, CSS, Javascript, Git</span>
              </div>
              <div className="sm:text-lg  flex flex-col gap-1 sm:gap-2">
                <span className=" text-purple-300 sm:font-bold">
                  Dev Tools:
                </span>
                <span>React</span>
                <span>GitHub</span>
                <span>Terminal</span>
                <span>Bootstrap</span>
                <span>Tailwind</span>
                <span>VSCode</span>
              </div>
            </div>
            <div className="flex h-full flex-col text-center items-center gap-12 px-10 sm:w-11/12 bg-black py-6 pt-10 rounded-b-3xl  lg:rounded-bl-none  lg:rounded-r-3xl ">
              <div className="flex flex-col gap-6  items-center">
                <div className=" w-fit p-2 rounded-full bg-lime-500">
                  <img alt="backend logo" className=" sm:w-16 w-10" src="/images/front.svg" />
                </div>
                <span className=" sm:text-2xl font-bold">
                  Backend Developer
                </span>
                <span className=" sm:text-lg">
                  I enjoy creating backend solutions by writing code that turns
                  ideas into functional components.
                </span>
              </div>
              <div className="sm:text-lg  flex flex-col gap-4">
                <span className=" text-purple-300 sm:font-bold">
                  Languages I Speak:
                </span>
                <span>Python, Django</span>
              </div>
              <div className="sm:text-lg  flex flex-col gap-2">
                <span className=" text-purple-300 sm:font-bold">
                  Dev Tools:
                </span>
                <span>Django</span>
                <span>GitHub</span>
                <span>Terminal</span>
                <span>Simple JWT</span>
                <span>Django Rest Framework</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondPage;
