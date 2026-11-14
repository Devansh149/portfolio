
import NavBar from "../components/NavBar";
import BackgroundImage from "../components/BackgroundImage";
import ProjectCard from "../components/ProjectCard";


const Project = () => {
  return (
    <div className="bg-orange-100 min-h-screen flex flex-col items-center justify-center">
        <BackgroundImage />
        <NavBar />
        <ProjectCard/>
        
    </div>
  );
};

export default Project;
