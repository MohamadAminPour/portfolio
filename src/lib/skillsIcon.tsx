import {
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJsSquare,
} from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import {  RiTailwindCssFill } from "react-icons/ri";
import {
  SiExpress,
  SiNextdotjs,
} from "react-icons/si";
import { CgFigma } from "react-icons/cg";
import {  TbBrandReact } from "react-icons/tb";
import { GrNode } from "react-icons/gr";


export const skillsIcon = [
  { id: 1,  skill: "html",percentAge:90, icon: <FaHtml5 className="text-orange-500" /> },
  { id: 2,  skill: "css",percentAge:80, icon: <IoLogoCss3 className="text-blue-500" /> },
  { id: 3,  skill: "bootstrap",percentAge:80, icon: <FaBootstrap  className="text-purple-500" /> },
  { id: 4,  skill: "tailwind",percentAge:90, icon: <RiTailwindCssFill  className="text-blue-300" /> },
  { id: 5,  skill: "js",percentAge:70, icon: <FaJsSquare className="text-yellow-400" /> },
  { id: 6,  skill: "react",percentAge:85, icon: <TbBrandReact className="text-blue-400" /> },
  { id: 7,  skill: "nextJs",percentAge:80, icon: <SiNextdotjs className="text-white" /> },
  { id: 8,  skill: "nodeJs",percentAge:55, icon: <GrNode className="text-green-700" /> },
  { id: 9,  skill: "express",percentAge:60, icon: <SiExpress className="text-green-500 text-[1.2rem]"/> },
  { id: 10, skill: "github",percentAge:70, icon: <FaGithub className="text-white" /> },
  { id: 11, skill: "git",percentAge:50, icon: <FaGitAlt className="text-orange-500" /> },
  { id: 12, skill: "figma",percentAge:50, icon: <CgFigma  className="text-purple-500" /> },
];