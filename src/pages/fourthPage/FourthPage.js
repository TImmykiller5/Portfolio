import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";

function FourthPage() {
  return (
    <div id="contact">
      <div  className="mt-20 pb-10 flex flex-col gap-8 lg:gap-20 text-center lg:text-left items-center justify-center lg:items-start  md:mx-20 lg:mx-28 mx-10 xl:mx-60">
        <div>
          <div className="text-2xl  font-bold">Contact</div>
          <div className="text-xl  mt-4">I'm Available for Hire! 👇</div>
        </div>
        <div className="flex flex-col gap-8 lg:flex-row justify-start lg:gap-20">
          <div className="text-xl font-semibold flex flex-col lg:flex-row   lg:items-center lg:gap-6 items-center">
            <div className="p-4 text-xl lg:text-2xl rounded-full bg-purple-500 w-fit">
              <FontAwesomeIcon icon={faMap} />
            </div>
            <div className="mt-4 lg:gap-4 lg:text-xl flex flex-col ">
              <div>Location</div>
              <div className="lg:text-xl">Lagos, Nigeria</div>
            </div>
          </div>
          <a
            href="mailto:olawaleolajide8.to@gmail.com"
            className="text-2xl font-semibold flex flex-col lg:flex-row  lg:items-center lg:gap-6 items-center"
          >
            <div className="p-4 text-3xl rounded-full lg:text-2xl bg-purple-500 w-fit">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className="lg:flex lg:flex-col ">
              <div className="my-4 lg:text-xl">Mail</div>
              <div>
                <a
                  className="text-lg sm:text-xl"
                  href="mailto:olawaleolajide8.to@gmail.com"
                >
                  olawaleolajide8.to@gmail.com
                </a>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col items-center py-6 px-4 gap-2 bg-orange-100 text-black sm:justify-between">
        <div>Copyright © 2023. All rights are reserved</div>
        <div className="flex gap-3 text-xl">
          <a target="_blank" href="https://github.com/TImmykiller5">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a target="_blank" href="https://twitter.com/Timmykiller5">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default FourthPage;
