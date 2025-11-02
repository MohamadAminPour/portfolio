"use client";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  github?: string;
  demo?: string;
}

export default function ProjectCard({
  id,
  title,
  description,
  image,
  tech,
  github,
  demo,
}: ProjectCardProps) {
  return (
    <div className="bg-darkM rounded-2xl shadow-xl p-3 overflow-hidden">
      <div className="relative h-52 w-full overflow-hidden">
        <Link href="">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-lg"
          />
        </Link>
      </div>

      <div className="p-3 flex flex-col gap-2">
        <Link href="" className="text-lg font-semibold text-white">
          {title}
        </Link>
        <p className="text-sm text-gray-400 line-clamp-2">{description}</p>

        <div
          style={{ direction: "ltr" }}
          className="flex items-center justify-center flex-wrap gap-2 mt-2"
        >
          {tech.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-full"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-3 mt-3">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <FaGithub size={18} />
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <HiOutlineExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
