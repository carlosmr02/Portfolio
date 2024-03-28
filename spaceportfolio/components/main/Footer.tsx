import React from "react";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full max-w-md flex flex-row items-center justify-between">
          <div>
            <a
              href="https://www.linkedin.com/in/carlos-mu%C3%B1oz-de-los-reyes-a3869b240/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center cursor-pointer"
              style={{ width: "70px", height: "70px" }}
            >
              <RxLinkedinLogo className="text-5xl" />
            </a>
          </div>
          <div>
            <a
              href="https://github.com/carlosmr02"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center cursor-pointer"
              style={{ width: "70px", height: "70px" }}
            >
              <RxGithubLogo className="text-5xl" />
            </a>
          </div>
          <div>
            <a
              href="mailto:carloosmr02@gmail.com"
              className="flex items-center cursor-pointer"
              style={{ width: "70px", height: "70px" }}
            >
              <FaEnvelope className="text-5xl" />
            </a>
          </div>
        </div>
        <div className="mt-5 text-center text-sm">
          Web Developer | carloosmr02@gmail.com
        </div>
      </div>
    </div>
  );
};

export default Footer;
