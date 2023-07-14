import { motion } from "framer-motion";
import React from "react";

const Skill = ({ name, x, y }) => {
  return (
    <>
      <motion.div
        className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-5 shadow-dark cursor-pointer absolute "
        whileHover={{ scale: 1.05 }}
        initial={{ x: 0, y: 0 }}
        whileInView={{ x: x, y: y }}
        transition={{ duration: 1.5 }}
      >
        {name}
      </motion.div>
    </>
  );
};
const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>
      <div className="w-3/4 h-screen relative flex items-center justify-center rounded-full bg-circularLight">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          web
        </motion.div>
        <Skill name="ReactJS" x="-10vw" y="1vw" />
        <Skill name="NextJS" x="12vw" y="12vw" />
        <Skill name="NodeJS" x="0.5vw" y="-15vw" />
        <Skill name="Javascript" x="-0.5vw" y="10vw" />
        <Skill name="Typescript" x="-0.5vw" y="10vw" />
        <Skill name="Bootstrap" x="20vw" y="1vw" />
        <Skill name="HTML5" x="15vw" y="-10vw" />
        <Skill name="CSS" x="-10vw" y="-10vw" />
        <Skill name="TailwindCSS" x="-0.5vw" y="10vw" />
        <Skill name="Github" x="-15vw" y="10vw" />
      </div>
    </>
  );
};

export default Skills;
