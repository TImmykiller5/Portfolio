import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function FirstPage() {
  const [open, setOpen] = useState(false);
  const setControl = () => {
    setOpen(!open);
  };
  // Image by <a href="https://www.freepik.com/free-vector/hand-drawn-web-developers_12063795.htm#query=fullstack%20development&position=3&from_view=search&track=ais">Freepik</a>
  return (
    <div className=" max-h-screen md:max-h-fit flex flex-col justify-between items-center">
      <div className=" md:mb-40 mb-20 sm:mb-12 w-full pt-6 md:pt-10 px-4 lg:px-24 md:px-12 ">
        <div className="flex w-full justify-between">
          <div className=" text-orange-300">TIMMY</div>
          <div className="flex flex-col">
            <button onClick={setControl}>
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </div>
        <div
          className={`w-full ${
            open ? "h-fit" : "h-0 hidden"
          } mt-6 gap-4 flex flex-col items-center justify-center`}
        >
          <HashLink
            className="border w-24 text-center rounded-lg px-2 py-1 hover:text-white hover:bg-purple-400 transition-all  border-purple-400"
            onClick={setControl}
            smooth
            to={"/#about-me"}
          >
            About me
          </HashLink>
          <HashLink
            className="border w-24 text-center rounded-lg px-2 py-1 hover:text-white hover:bg-orange-400 transition-all  border-orange-400"
            onClick={setControl}
            smooth
            to={"/#projects"}
          >
            Projects
          </HashLink>
          <HashLink
            className="border w-24 text-center rounded-lg px-2 py-1 hover:text-white hover:bg-cyan-400 transition-all border-cyan-400"
            onClick={setControl}
            smooth
            to={"/#contact"}
          >
            Hire me
          </HashLink>
        </div>
      </div>

      <div className="flex flex-col items-center px-6 md:px-24">
        <div className=" text-center text-2xl lg:text-5xl md:text-3xl font-bold mb-6 md:mb-12">
          Full Stack Web Developer, Passionate about Frontend and Backend
          Development
        </div>
        <div className="md:text-xl mb-10 lg:text-3xl text-sm text-center md:font-medium">
          I craft intricate designs and seamless code, driven by a deep passion
          for what I do.
        </div>
        <div className="rounded-full border shadow-md shadow-neutral-800 border-neutral-900">
          <img
            alt="man"
            className="  lg:w-96 sm:w-80 w-56"
            src="/images/man.svg"
          />
        </div>
        <div></div>
      </div>
      <div className=" flex justify-center md:w-10/12 w-full lg:w-8/12 ">
        <img
          alt="background"
          className=" w-80 sm:w-3/4"
          src="/images/test.svg"
          width={700}
        />
      </div>
    </div>
  );
}

export default FirstPage;
