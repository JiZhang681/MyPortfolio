import React from "react";
export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Welcome!
            <br className="hidden lg:inline-block" />
            <br />
            My name is Jizhou.
            <br />
            <br className="hidden lg:inline-block" />
            And I build incredible software and hardware applications.
            <br />
          </h1>
          <p className="mb-8 leading-relaxed">
            I graduated from Oakland University in 2020 with a Bachelors of
            Science in Computer Science, and I am currently pursuing a Masters
            of Science in Cybersecurity and Information Assurance at University
            of Michigan - Dearborn. I also have a passion for game and web
            development. If you ever need help on a development project
            especially if it's in game or web, I am more than willing to offer
            my help.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-white-400 bg-green-800 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 hover:text-white rounded text-lg"
            >
              See My Past Projects
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./profilelink2.jpg"
          />
        </div>
      </div>
    </section>
  );
}
