import React from "react";
import NavBar from "../components/NavBar";
import BackgroundImage from "../components/BackgroundImage";
import { Code, Database, Server, ToolCase, Wrench } from "lucide-react";

const Skills = () => {
  return (
    <div className="min-h-screen bg-cyan-100/50 flex items-center justify-start sm:justify-center">
      <NavBar />
      <BackgroundImage />
      <div className=" px-2 pt-27 sm:pt-5 md:pt-0  max-w-5xl ">
        {/* Heading  */}
        <div className="sm:mb-5">
          <div className="flex  sm:justify-center">
            <span className="text-blue-700">•</span>
            <h2 className="text-gray-700">TECHNICAL STACK</h2>
          </div>
          <p className="sm:text-center sm:mb-4 text-3xl sm:text-4xl md:text-5xl ">
            Skills and <span className="text-blue-700">Technologies</span>
          </p>
          <p className="mb-3 text-gray-600 sm:text-lg tracking-wide">
            Full-stack development skills showcased through real projects and scalable
            architectures developing modern web applications with the help of cutting edge tools and technologies.
          </p>
        </div>
        <div className="sm:grid  sm:grid-cols-2 gap-4  flex flex-col">
          
          <div className="hover:-translate-y-2 hover:-translate-x-2 transition-all duration-500 shadow-md hover:shadow-lg z-1 bg-red-50 px-2 py-3  rounded-2xl">
            <p className="tracking-wide flex gap-1 items-center border-b mb-3 py-2">
              <Code /> Frontend Development
            </p>
            <div className="flex gap-2 flex-wrap  text-xs sm:text-sm">
              <p className=" bg-white px-2 py-1 rounded-full">React.js</p>
              <p className=" bg-white px-2 py-1 rounded-full">HTML5 and CSS3</p>
              <p className=" bg-white px-2 py-1 rounded-full">Tailwind CSS</p>
              <p className=" bg-white px-2 py-1 rounded-full">GSAP</p>
            </div>
          </div>
          <div className="hover:-translate-y-2 hover:-translate-x-2 transition-all duration-500 shadow-md hover:shadow-lg z-1 bg-red-50 px-2 py-3  rounded-2xl">
            <p className="tracking-wide flex gap-1 items-center border-b mb-3 py-2">
              <Server /> Backend Development
            </p>
            <div className="flex gap-2 flex-wrap text-xs sm:text-sm">
              <p className=" bg-white px-2 py-1 rounded-full">Node.js</p>
              <p className=" bg-white px-2 py-1 rounded-full">Express.js</p>
              <p className=" bg-white px-2 py-1 rounded-full">JWT Auth</p>
              <p className=" bg-white px-2 py-1 rounded-full">REST API</p>
            </div>
          </div>
          <div className="hover:-translate-y-2 hover:-translate-x-2 transition-all duration-500 shadow-md hover:shadow-lg z-1 bg-red-50 px-2 py-3  rounded-2xl">
            <p className="tracking-wide flex gap-1 items-center border-b mb-3 py-2 ">
              <Database/> Databases
            </p>
            <div className="flex gap-2 flex-wrap text-xs sm:text-sm">
              <p className=" bg-white px-2 py-1 rounded-full">MongoDB</p>
              <p className=" bg-white px-2 py-1 rounded-full">PostgreSQL</p>
              <p className=" bg-white px-2 py-1 rounded-full">Supabase</p>
              <p className=" bg-white px-2 py-1 rounded-full">Mongoose</p>
            </div>
          </div>
          <div className="hover:-translate-y-2 hover:-translate-x-2 transition-all duration-500 shadow-md hover:shadow-lg z-1 bg-red-50 px-2 py-3  rounded-2xl">
            <p className="tracking-wide flex gap-1 items-center border-b mb-3 py-2">
              <Wrench /> Tools
            </p>
            <div className="flex gap-2 flex-wrap text-xs sm:text-sm">
              <p className=" bg-white px-2 py-1 rounded-full">Git/Github</p>
              <p className=" bg-white px-2 py-1 rounded-full">Postman</p>
              <p className=" bg-white px-2 py-1 rounded-full">Render</p>
              <p className=" bg-white px-2 py-1 rounded-full">Vercel</p>
              <p className=" bg-white px-2 py-1 rounded-full">Netlify</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
