import BackgroundImage from "../components/BackgroundImage";
import NavBar from "../components/NavBar";
import img from "../assets/character_expressions_hd/3.png";
const About = () => {
  return (
    <div className="min-h-screen overflow-x-hidden relative bg-pink-100/50 flex  items-center justify-center">
      <BackgroundImage />
      <NavBar />
      <div className=" relative w-full  pt-28 sm:pt-27 lg:pt-12 pb-15 px-4 flex flex-col items-center ">
        <p className="text-gray-700 ">
          <span className="text-red-500">•</span> ABOUT ME
        </p>
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold whitespace-nowrap ">
          The Developer Behind <span className="text-red-500">The Code</span>
        </h1>
        <div className="flex  flex-col items-center justify-center lg:flex-row lg:w-3/4 px-3">
          <img src={img} alt="profile" className="  h-55 md:h-65 mr-8" />
          <p className=" text-gray-700 text-base sm:text-lg leading-relaxed text-center lg:text-left max-w-4xl">
            I'm a Full Stack Developer focused on building modern, user-friendly and scalable
            web applications using React and Node.js. I enjoy turning ideas into
            complete products from responsive interfaces to backend APIs,
            databases and third-party integrations. <br />I've worked on projects
            involving price tracking, authentication, automated email alerts,
            full-stack platforms using technologies like MongoDB, JavaScript and
            Tailwind CSS. I'm continuously improving my backend development,
            system design and problem-solving skills.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
