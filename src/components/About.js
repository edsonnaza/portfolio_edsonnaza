import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Edson.
            <br className="hidden lg:inline-block" />I love to build amazing apps.
          </h1>
          <p className="mb-8 text-lg leading-relaxed text-justify  ">
          I am currently based in Ciudad del Este, Paraguay, a vibrant border city known as the "Triple Frontier" connecting Brazil and Argentina.  
          Being immersed in this multicultural environment allowed me to become a native speaker of Spanish and Portuguese, with an advanced level of proficiency in English.
         <br /> <br />
          With over 8 years of experience in Computer Science, including 5 years as a software engineer, I bring extensive knowledge and expertise to the table. 
          Throughout my career, I have gained hands-on experience in the software development life cycle, and consistently contributed to the success of the organizations I worked with. <br /> In addition, I hold a degree in Computer Science from Universidad Privada del Este (2017).
          <br />  <br />
          
          Beyond my technical skill sets (PHP, Laravel, Vue.js, MySQL, MongoDB, Docker, Google Cloud, AWS, PhpUnit, Jest, CI/CD), I possess good problem-solving abilities, effective communication skills, and a collaborative mindset. 
          Thriving in team environments, I enjoy sharing knowledge and constantly seek opportunities for personal and professional growth. I am committed to continuous improvement to support the company's goals and make a meaningful impact.
          <br /> <br />
          Overall, I have developed this portfolio using React, effectively demonstrating my skills through a collection of showcased projects listed below.
          
          </p>
         <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
    </section>
  );
}
