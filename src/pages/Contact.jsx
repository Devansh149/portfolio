import {  ArrowUpRight, Send } from "lucide-react";
import BackgroundImage from "../components/BackgroundImage";
import NavBar from "../components/NavBar";
const Contact = () => {
  return (
    <div className="min-h-screen relative bg-green-100/50 flex items-start sm:items-center justify-center">
      <BackgroundImage />
      <NavBar />
      <div className="flex flex-col w-full max-w-5xl px-3 pt-20 md:pt-0  ">
        <div className="flex gap-1 sm:justify-center items-center w-full ">
          <span className="text-green-600">•</span>
          <h2 className="text-gray-600 ">Let's Connect</h2>
        </div>
        <div className="flex flex-col  sm:items-center gap-2 w-full mb-3">
          <h3 className="text-3xl sm:text-4xl md:text-5xl sm:mb-4">
            Have a project <span className="text-green-500">in mind?</span>
          </h3>
          <p className="text-gray-600 sm:text-lg md:text-xl ">
            I'm always open to discussing new projects, freelance opportunities,
            or collaborating on innovative solutions.
          </p>
        </div>
        <div className="w-full md:flex gap-5 ">
          <div className="flex flex-col gap-2  mb-2 sm:mb-0">
            <div className="flex flex-col  sm:flex-row z-1 gap-2">
              <input
                type="text"
                placeholder="Your name"
                className=" bg-white border rounded-lg px-2 py-1 w-full"
              />
              <input
                type="text"
                placeholder="Your email"
                className=" bg-white border rounded-lg px-2 py-1 w-full"
              />
              </div>
              <textarea
                placeholder="Your message"
                rows={5}
                className=" bg-white border rounded-lg z-1 px-2 py-1 resize-none"
              ></textarea>
              <button className="text-sm sm:text-base w-fit flex gap-1 items-center bg-green-400 px-3 py-2 rounded-full z-1">
                Send Message
                <Send size={20}/>
              </button>
          </div>
          <div>
            <h3 className="text-green-500 text-lg">EMAIL</h3>
            <p className="text-gray-700 mb-3 sm:text-lg break-all">devanshchandra300@gmail.com</p>
            <div>
              <h3 className="text-green-500 text-lg mb-2">Connect</h3>
              <div className="flex gap-2 flex-wrap text-sm ">
                <button className="shadow-md md:shadow-lg z-1 flex gap-1 bg-white/90 rounded-full px-3 py-1">
                  LinkedIn <ArrowUpRight />
                </button>
                <button className="shadow-md md:shadow-lg z-1 flex gap-1 bg-white/90 rounded-full px-3 py-1">
                  Github <ArrowUpRight />
                </button>
                <button className="shadow-md md:shadow-lg z-1 flex gap-1 bg-white/90 rounded-full px-3 py-1">
                  X(Twitter) <ArrowUpRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
