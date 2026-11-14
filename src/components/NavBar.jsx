import {
  CircleArrowOutUpRight,
  Code,
  Folder,
  Home,
  Mail,
  Menu,
  User,
  X,
} from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const NavBar = () => {
  const navigate = useNavigate();
  const [click, setclick] = useState(false);
  const handleClick = () => {
    setclick(!click);
  };
  return (
    <nav>
      <div className="z-10  bg-black/85 text-white rounded-full px-3 py-3 flex gap-4  w-[90%] lg:w-[75%] top-[5%] left-1/2 -translate-x-1/2 items-center justify-between absolute ">
        <div className="whitespace-nowrap">
          <span className="text-amber-500">~/</span> Devansh Chandra{" "}
        </div>
        <div className=" lg:flex gap-3 hidden">
          <Link to="/">
            <p className="hover:bg-white/10 transition-all duration-200 ease-in rounded-full px-3 py-1">
              Home
            </p>
          </Link>
          <Link to="/about">
            <p className="hover:bg-white/10 transition-all duration-200 ease-in rounded-full px-3 py-1">
              About
            </p>
          </Link>
          <Link to="/projects">
            <p className="hover:bg-white/10 transition-all duration-200 ease-in rounded-full px-3 py-1">
              Projects
            </p>
          </Link>
          <Link to="/skills">
            <p className="hover:bg-white/10 transition-all duration-200 ease-in rounded-full px-3 py-1">
              Skills
            </p>
          </Link>
          <Link to="/contact">
            <p className="hover:bg-white/10 transition-all duration-200 ease-in rounded-full px-3 py-1">
              Contact
            </p>
          </Link>
        </div>
        <div>
          <button
            onClick={() => navigate("/contact")}
            className="whitespace-nowrap transition-all duration-200 ease-in hover:bg-amber-500 bg-white text-black px-5 py-2 rounded-full hidden lg:flex items-center gap-1"
          >
            Lets Talk <CircleArrowOutUpRight className="size-4" />
          </button>
        </div>
        {!click ? (
          <Menu className="lg:hidden cursor-pointer" onClick={handleClick} />
        ) : (
          <X className="lg:hidden cursor-pointer" onClick={handleClick} />
        )}
      </div>
      {click && (
        <div className="z-30 absolute px-6 sm:px-10 py-4 w-[89%] top-[14%] left-[5%] bg-gray-950 rounded-4xl text-white">
          <div className="flex flex-col gap-2 border-b-2 py-3">
            <Link to="/">
              <p className="flex items-center gap-2">
                <Home className="size-5" /> Home
              </p>
            </Link>
            <Link to="/about">
              <p className="flex items-center gap-2">
                <User className="size-5" /> About
              </p>
            </Link>
            <Link to="/projects">
              <p className="flex items-center gap-2">
                <Folder className="size-5" />
                Projects
              </p>
            </Link>
            <Link to="/skills">
              <p className="flex items-center gap-2">
                <Code className="size-5" />
                Skills
              </p>
            </Link>
            <Link to="/contact">
              <p className="flex items-center gap-2">
                <Mail className="size-5" />
                Contact
              </p>
            </Link>
          </div>
          <Link to="/contact">
            <button className="bg-white text-black flex w-full justify-center items-center gap-2 mt-3 py-2 rounded-full">
              Let's Talk
              <CircleArrowOutUpRight className="size-5" />
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
