import React, { useRef } from "react";
import AnimatedText from "./AnimatedText";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ companyName, position, time, responsibilities, skills }) => {
  const ref = useRef(null);
  return (
    <>
      <li
        ref={ref}
        className="my-5 first:mt-0 last:mb-0 w-[100%] mx-auto flex flex-col items-center justify-between"
      >
        <LiIcon reference={ref} />
        <div>
          <h1 className="capitalize font-extrabold text-3xl">{position}</h1>
          <h1 className="capitalize font-semibold text-2xl">@{companyName}</h1>
          <span className="capitalize font-medium text-dark/75">{time}</span>
          <h5 className="capitalize font-semibold text-dark">{skills}</h5>
          <p className="font-medium w-full">{responsibilities}</p>
        </div>
      </li>
    </>
  );
};
const Experience = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-6 mb-48">
      <h1 className="font-bold text-8xl mb-32 w-full text-center">
        <AnimatedText text="Experience" className="!text-6xl text-center" />
      </h1>
      <div className="w-[100%] mx-auto relative" ref={ref}>
        <motion.div
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-16 mb-16">
          <Details
            companyName="Ugam Solutions Pvt Ltd, Thane"
            time="Mar-2021 to April-2022"
            position="Associate Software Developer"
            skills="ReactJS, redux, javascript, Bootstrap, HTML/CSS"
            responsibilities="Managing frontend with expertise"
          />
        </ul>
        <ul className="w-full flex flex-col items-start justify-between ml-16 mb-16">
          <Details
            companyName="Ugam Solutions Pvt Ltd, Thane"
            time="Mar-2021 to April-2022"
            position="Associate Software Developer"
            skills="ReactJS, redux, javascript, Bootstrap, HTML/CSS"
            responsibilities="Managing frontend with expertise"
          />
        </ul>
        <ul className="w-full flex flex-col items-start justify-between ml-16 mb-16">
          <Details
            companyName="Ugam Solutions Pvt Ltd, Thane"
            time="Mar-2021 to April-2022"
            position="Associate Software Developer"
            skills="ReactJS, redux, javascript, Bootstrap, HTML/CSS"
            responsibilities="Managing frontend with expertise"
          />
        </ul>
        <ul className="w-full flex flex-col items-start justify-between ml-16 mb-16">
          <Details
            companyName="Ugam Solutions Pvt Ltd, Thane"
            time="Mar-2021 to April-2022"
            position="Associate Software Developer"
            skills="ReactJS, redux, javascript, Bootstrap, HTML/CSS"
            responsibilities="Managing frontend with expertise"
          />
        </ul>
        <ul className="w-full flex flex-col items-start justify-between ml-16 mb-16">
          <Details
            companyName="Ugam Solutions Pvt Ltd, Thane"
            time="Mar-2021 to April-2022"
            position="Associate Software Developer"
            skills="ReactJS, redux, javascript, Bootstrap, HTML/CSS"
            responsibilities="Managing frontend with expertise"
          />
        </ul>
        <ul className="w-full flex flex-col items-start justify-between ml-16 mb-16">
          <Details
            companyName="Ugam Solutions Pvt Ltd, Thane"
            time="Mar-2021 to April-2022"
            position="Associate Software Developer"
            skills="ReactJS, redux, javascript, Bootstrap, HTML/CSS"
            responsibilities="Managing frontend with expertise"
          />
        </ul>
        <ul className="w-full flex flex-col items-start justify-between ml-16 mb-16">
          <Details
            companyName="Ugam Solutions Pvt Ltd, Thane"
            time="Mar-2021 to April-2022"
            position="Associate Software Developer"
            skills="ReactJS, redux, javascript, Bootstrap, HTML/CSS"
            responsibilities="Managing frontend with expertise"
          />
        </ul>
        <ul className="w-full flex flex-col items-start justify-between ml-16 mb-16">
          <Details
            companyName="Ugam Solutions Pvt Ltd, Thane"
            time="Mar-2021 to April-2022"
            position="Associate Software Developer"
            skills="ReactJS, redux, javascript, Bootstrap, HTML/CSS"
            responsibilities="Managing frontend with expertise"
          />
        </ul>
        <ul className="w-full flex flex-col items-start justify-between ml-16 mb-16">
          <Details
            companyName="Ugam Solutions Pvt Ltd, Thane"
            time="Mar-2021 to April-2022"
            position="Associate Software Developer"
            skills="ReactJS, redux, javascript, Bootstrap, HTML/CSS"
            responsibilities="Managing frontend with expertise"
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
