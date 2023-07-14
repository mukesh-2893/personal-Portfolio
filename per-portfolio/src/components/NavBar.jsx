import React from "react";
import Logo from "./Logo";
import { motion } from "framer-motion";
import { DribbbleIcon, GithubIcon, LinkedInIcon, TwitterIcon } from "./Icons";

const CustomLink = ({ href, title, className = "" }) => {
  const path = window.location.pathname;
  console.log(href + " " + path);

  return (
    <a href={href} className={`${className} relative capitalize group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full translate-[width] ease duration-300 ${
          path === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </a>
  );
};
const NavBar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      {/* <button className="flex flex-col justify-center items-center">
        <span className="bg-dark block h-0.5 w-6 rounded-sm -translate-y-0.5"></span>
        <span className="bg-dark block h-0.5 w-6 rounded-sm my-0.5"></span>
        <span className="bg-dark block h-0.5 w-6 rounded-sm translate-y-0.5"></span>
      </button> */}
      <nav>
        <CustomLink href="/personal-Portfolio/" title="home" className="mr-4" />
        <CustomLink
          href="/personal-Portfolio/about/"
          title="about"
          className="mx-4"
        />
        <CustomLink
          href="/personal-Portfolio/experience/"
          title="experience"
          className="mx-4"
        />
        <CustomLink
          href="/personal-Portfolio/education"
          title="education"
          ml-4
        />
      </nav>
      <nav className="flex items-center justify-center flex-wrap">
        <motion.a
          href="/personal-Portfolio/"
          className="w-8 mr-8"
          whileHover={{ scale: 1.5 }}
        >
          <LinkedInIcon />
        </motion.a>

        <motion.a
          href="/personal-Portfolio/"
          className="w-8 mr-8"
          whileHover={{ scale: 1.5 }}
        >
          <GithubIcon />
        </motion.a>

        <motion.a
          href="/personal-Portfolio/"
          className="w-8 mr-8"
          whileHover={{ scale: 1.5 }}
        >
          <TwitterIcon />
        </motion.a>

        <motion.a
          href="/personal-Portfolio/"
          className="w-8"
          whileHover={{ scale: 1.5 }}
        >
          <DribbbleIcon />
        </motion.a>
      </nav>

      <div className="absolute left-[50%] top-4 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
