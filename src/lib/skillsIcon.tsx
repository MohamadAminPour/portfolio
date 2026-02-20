import {
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJsSquare,
} from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiExpress,
  SiNextdotjs,
} from "react-icons/si";
import { CgFigma } from "react-icons/cg";
import { TbBrandReact } from "react-icons/tb";
import { GrNode } from "react-icons/gr";
import { BiLogoTypescript } from "react-icons/bi";


export const skillsIcon = [
  { id: 1, skill: "html", percentAge: 90, icon: <FaHtml5 className="text-orange-500" /> },
  { id: 2, skill: "css", percentAge: 80, icon: <IoLogoCss3 className="text-blue-500" /> },
  { id: 3, skill: "bootstrap", percentAge: 80, icon: <FaBootstrap className="text-purple-500" /> },
  { id: 4, skill: "tailwind", percentAge: 90, icon: <RiTailwindCssFill className="text-blue-300" /> },
  { id: 5, skill: "js", percentAge: 85, icon: <FaJsSquare className="text-yellow-400" /> },
  { id: 6, skill: "ts", percentAge: 85, icon: <BiLogoTypescript className="text-blue-600" /> },
  { id: 7, skill: "react", percentAge: 90, icon: <TbBrandReact className="text-blue-400" /> },
  { id: 8, skill: "nextJs", percentAge: 90, icon: <SiNextdotjs className="text-white" /> },
  { id: 9, skill: "nodeJs", percentAge: 30, icon: <GrNode className="text-green-700" /> },
  { id: 10, skill: "express", percentAge: 30, icon: <SiExpress className="text-green-500 text-[1.2rem]" /> },
  { id: 11, skill: "github", percentAge: 70, icon: <FaGithub className="text-white" /> },
  { id: 12, skill: "git", percentAge: 70, icon: <FaGitAlt className="text-orange-500" /> },
];