import BackgroundImage from "../components/BackgroundImage";
import NavBar from "../components/NavBar";
import img1 from "../assets/character_expressions_hd/1.png";
import img2 from "../assets/character_expressions_hd/2.png";
import img3 from "../assets/character_expressions_hd/3.png";
import img4 from "../assets/character_expressions_hd/4.png";
import img5 from "../assets/character_expressions_hd/5.png";
import img6 from "../assets/character_expressions_hd/6.png";
import img7 from "../assets/character_expressions_hd/7.png";
import img8 from "../assets/character_expressions_hd/8.png";
import { useState, useEffect } from "react";
import {
  BriefcaseBusiness,
  CircleArrowRight,
  Code,
  Layers,
  Share2,
} from "lucide-react";
import github from "../assets/companies/github.png";
import linkedin from "../assets/companies/linkedin.webp";
import twitter from "../assets/companies/twitter.jpeg";
import {useNavigate} from 'react-router-dom';
const HomePage = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div  style={{ height: "100dvh" }} className="w-full overflow-hidden relative bg-amber-100/50 flex flex-col items-center sm:justify-center ">
      <BackgroundImage />
      <NavBar />
      <div className="flex flex-col gap-1 items-center mt-40 sm:mt-0">
        <h1 className="z-1 text-2xl sm:text-4xl md:text-5xl font-semibold sm:font-bold">
          I'm <span className="text-amber-400">Devansh Chandra</span>
        </h1>
        <p className="text-lg sm:text-2xl  text-gray-700">
          Full Stack Developer
        </p>
      </div>
      <div className="w-3xs sm:w-xs relative flex flex-col items-center justify-center mt-2">
        <div className="z-10 absolute w-2xs sm:w-sm top-[30%] sm:top-[5%] flex justify-between">
          <div className="shadow-lg bg-white p-2 rounded-full sm:rounded-md translate-x-[-10%] sm:translate-x-[-50%] sm:translate-y-[35%] md:translate-x-[-75%] h-fit">
            <Share2 className="sm:hidden" />
            <div className="hidden sm:flex flex-col">
              <p className="text-gray-700 text-xs mb-1 font-semibold tracking-wide">
                FOLLOW ME ON
              </p>
              <div className="flex gap-2 shrink-0">
                <img src={github} className="h-7" alt="github" />
                <img src={linkedin} className="h-7" alt="linkedin" />
                <img src={twitter} className="h-7" alt="twitter" />
              </div>
            </div>
          </div>
          <div className="bg-amber-400 p-2 rounded-full sm:rounded-md sm:bg-white sm:translate-x-[65%] md:translate-x-[79%] h-fit shadow-lg">
            <Code className="sm:text-amber-400" />
            <p className="w-42 text-sm hidden sm:flex">
              I build modern, user-friendly and scalable web applications
            </p>
          </div>
        </div>
        <div className="z-10 absolute w-2xs sm:w-sm  top-[70%] flex justify-between ">
          <div className="shadow-lg sm:bg-white sm:rounded-md bg-amber-400 p-2 rounded-full h-fit translate-x-[-10%] sm:translate-x-[-65%] md:translate-x-[-99%] sm:-translate-y-9 ">
            <BriefcaseBusiness className="sm:hidden" />
            <div className="hidden sm:flex flex-col text-xs font-semibold tracking-wide text-gray-700">
              <p className="mb-1">OPEN TO OPPORTUNITIES</p>
              <div className="flex gap-1 flex-col ">
                <div className="flex gap-3">
                  <p className="bg-amber-400 text-black rounded-full py-0.5 px-1.5">
                    Full Stack
                  </p>
                  <p className="bg-black text-white rounded-full py-0.5 px-1.5">
                    SASS
                  </p>
                </div>
                <p className="bg-amber-400 text-black rounded-full py-0.5 px-1.5 w-fit">
                  Software Development
                </p>
              </div>
            </div>
          </div>
          <div className="shadow-lg bg-white p-2 rounded-full h-fit sm:rounded-md sm:translate-x-[65%] sm:-translate-y-7 md:translate-x-[85%] lg:translate-x-[101%]">
            <Layers className="sm:hidden" />
            <div className="text-xs  font-semibold hidden sm:flex flex-col gap-1">
              <div className="flex gap-1">
                <p className="bg-amber-400 rounded-full px-1.5 py-0.5">React.js</p>
                <p className="bg-black/85 text-white rounded-full px-1.5 py-0.5">Tailwind CSS</p>
              </div>
              <p className="whitespace-nowrap  bg-black/85 text-white px-1.5 py-0.5 rounded-full">REST API & AI Integrations</p>
              <div className="flex gap-1">
                <p className="bg-black/85 text-white rounded-full px-1.5 py-0.5">Node.js</p>
                <p className="bg-amber-400 rounded-full px-1.5 py-0.5">MongoDB</p>
              </div>
            </div>
          </div>
        </div>

        <img
          src={images[index]}
          alt="profile"
          className="z-10  -translate-x-3  h-55 md:h-65"
        />
        <div className="z-1 absolute top-[15%] md:top-[7%] h-65 w-65 md:h-75 md:w-75 bg-white/35 rounded-full"></div>

        <div className=" shadow-amber-200 z-20 rounded-full bg-white w-64 sm:w-2xs  py-2 absolute top-[95%] flex justify-center">
          <div className="absolute -z-10 -inset-2  bg-amber-200/80 blur-3xl rounded-full"></div>
          
          <button onClick={() => navigate("/projects")} className="flex items-center justify-center gap-2 w-[90%] bg-amber-400 px-4 py-2 rounded-full">
            Explore my work <CircleArrowRight size={22} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
