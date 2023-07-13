import React from "react";
import AnimatedText from "./AnimatedText";
import developerImage from "./images/programmer.png";
import { LinkArrow } from "./Icons";
import resume from "../PDF/MUkesh__Resume.pdf";
import Layout from "./Layout";

const Home = () => {
  return (
    <Layout className="pt-0 mb-8">
      <div className="flex items-center justify-between w-full max-h-5/6">
        <div className="w-[50%]">
          <img
            src={developerImage}
            alt="developerImage"
            className="w-full h-[600px]"
          />
        </div>
        <div className="w-[500px] mx-40 flex flex-col items-center self-center">
          <AnimatedText
            text="Turning Vision Into Reality With Code And Design."
            className="!text-4xl text-left"
          />
          <p className="my-4 text-base font-medium">
            As a skilled full-stack developer, I am dedicated to turning ideas
            into innovative web applications. Explore my latest projects and
            articles, showcasing my expertise in React.js and web development.
          </p>
          <div className="flex items-center self-start mt-2">
            <a
              href={resume}
              target="_blank"
              rel="noreferrer"
              className="flex items-center bg-dark text-light px-6 p-2.5 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark hover:border-dark border-2 border-solid"
            >
              Resume <LinkArrow className="w-5 ml-1" />
            </a>
            <a
              href="mailto:er.mukeshpatil2018@gmail.com"
              className="ml-4 text-lg font-medium capitalize text-dark underline "
            >
              contact
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
