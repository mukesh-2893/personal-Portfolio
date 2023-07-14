import React from "react";
import AnimatedText from "./AnimatedText";
import Image from "./images/MukeshImage.jpg";
import Layout from "./Layout";
import { AnimatedNumbers } from "./AnimatedNumbers";
import Skills from "./Skills";

const About = () => {
  return (
    <>
      <div className="flex w-full mx-40 flex-row justify-center items-center">
        <AnimatedText
          text="Innovative front-end Developer "
          className="!text-6xl"
        />
      </div>
      {/* <div className="flex w-full mx-40 px-40  flex-row justify-center items-center self-center"> */}
      <Layout className="ml-[120px]">
        <div className="grid w-full grid-cols-8 gap-16 mx-40 my-8">
          <div className="col-span-3 flex flex-col items-start justify-start">
            <h2 className="mb-4 font-bold text-lg uppercase text-dark/75">
              Something about me !
            </h2>
            <p className="font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              amet voluptate necessitatibus explicabo. Necessitatibus soluta
              dolore omnis illo dignissimos, non ipsa ab, accusantium in
              molestiae, maiores cum blanditiis facilis hic. Quasi sequi itaque
              debitis deleniti in ducimus minus. Aliquam nihil obcaecati est ut
              accusantium veritatis neque tenetur atque quas, tempora corrupti,
              dolorem unde earum quisquam ullam facilis cum nostrum et. quasi
              accusantium mollitia, harum assumenda quo deleniti placeat cumque
              autem error aspernatur adipisci eaque corrupti orum repellat
            </p>
            <p>
              <AnimatedNumbers value={100} />+
            </p>
          </div>
          <div className="col-span-3 w-[500px] relative h-max rounded-2xl border-b-8 border-l-2 border-t-2 border-r-8 border-solid border-dark bg-light p-6">
            <img
              src={Image}
              alt="profile_pic"
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      </Layout>
      <Skills />
    </>
  );
};

export default About;
