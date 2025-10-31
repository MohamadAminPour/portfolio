"use client";

import Link from "next/link";
import { BsStars } from "react-icons/bs";
import { FaGithub, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { IoArrowDownCircle } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaBars, FaTimes } from "react-icons/fa";
interface IMenuLinks {
  id: number;
  title: string;
  link: string;
}

const menuLinks: IMenuLinks[] = [
  { id: 1, title: "خانه", link: "/" },
  { id: 2, title: "درباره من", link: "/aboutme" },
  { id: 3, title: "مهارت ها", link: "/skills" },
  { id: 4, title: "پروژه ها", link: "/projects" },
  { id: 5, title: "ارتباط با من", link: "/contactme" },
];

export default function Home() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <div className="relative h-screen">
      {/* Grid background */}
      <div className="absolute inset-0 grid grid-cols-6 md:grid-cols-12 grid-rows-8 opacity-20">
        {Array.from({ length: 96 }).map((_, i) => (
          <div key={i} className="border border-gray-500/40"></div>
        ))}
      </div>

      {/* Header */}
      <header
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-delay="2000"
        className="fixed w-full top-5 z-50 px-5 md:px-0"
      >
        <nav className="container mx-auto flex items-center justify-between bg-zinc-700/30 p-5 rounded-3xl backdrop-blur-sm border-1 border-zinc-200/20">
          {/* لوگو */}
          <Link href="/" className="text-primary text-[1.3rem] font-semibold">
            .PortFolio
          </Link>

          {/* دکمه منو در موبایل */}
          <button
            className="text-white text-[1.5rem] md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>

          {/* منو در دسکتاپ */}
          <ul className="hidden md:flex items-center gap-6">
            {menuLinks.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.link}
                  className={`${
                    item.link === "/" ? "text-primary" : "text-white"
                  } hover:text-primary duration-300`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* دکمه گیت‌هاب */}
          <Link
            href="https://github.com"
            target="_blank"
            className="hidden md:flex items-center justify-center text-dark duration-300 hover:text-white hover:scale-110 hover:rotate-2 gap-2 bg-primary rounded-xl px-4 py-2"
          >
            <FaGithub className="text-[1.1rem]" />
            <p className="text-[.8rem]">گیت هاب</p>
          </Link>
        </nav>

        {/* منوی موبایل */}
        {open && (
          <div className="md:hidden absolute top-[4.5rem] left-0 w-full bg-zinc-800/90 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center gap-5 text-white animate-fade-in">
            {menuLinks.map((item) => (
              <Link
                key={item.id}
                href={item.link}
                onClick={() => setOpen(false)}
                className="hover:text-primary duration-300"
              >
                {item.title}
              </Link>
            ))}

            <Link
              href="https://github.com"
              target="_blank"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 bg-primary text-white rounded-xl px-5 py-2 mt-2 hover:scale-95 transition-all"
            >
              <FaGithub />
              <span className="text-[.9rem]">گیت هاب</span>
            </Link>
          </div>
        )}
      </header>

      {/* Hiro */}
      <div className="relative w-full h-screen ">
        <div className="absolute h-full w-full *:text[3rem] opacity-0 md:opacity-100 text-black *:border-1 *:border-zinc-200/20">
          <FaReact
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1600"
            className="text-blue-600 bg-zinc-900 shadow-2xs p-3 size-[5rem] rounded-2xl shadow-blue-600 text-[3rem] absolute top-[10rem] right-[15rem] rotate-12  "
          />
          <FaJs
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1800"
            className=" text-yellow-500 bg-zinc-900 shadow-2xs p-3 size-[4rem] rounded-2xl shadow-yellow-500 text-[3rem] absolute top-[30rem] right-[5rem] rotate-12"
          />
          <RiNextjsFill
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="2000"
            className=" text-zinc-300 bg-zinc-900 shadow-2xs p-3 size-[4rem] rounded-2xl shadow-zinc-300 text-[3rem] absolute top-[35rem] right-[25rem] rotate-12"
          />

          <RiTailwindCssFill
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1000"
            className=" text-blue-300 bg-zinc-900 shadow-2xs p-3 size-[4rem] rounded-2xl shadow-blue-300 text-[3rem] absolute top-[10rem] left-[15rem] rotate-12"
          />
          <FaNodeJs
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1200"
            className=" text-green-500 bg-zinc-900 shadow-2xs p-3 size-[4.5rem] rounded-2xl shadow-green-500 text-[3rem] absolute top-[30rem] left-[5rem] rotate-12"
          />
          <SiMongodb
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1400"
            className=" text-green-700 bg-zinc-900 shadow-2xs p-3 size-[3.5rem] rounded-2xl shadow-green-700 text-[3rem] absolute top-[35rem] left-[25rem] rotate-12"
          />
        </div>
        <div className="absolute top-0 w-full h-full flex flex-col items-center justify-center text-center gap-5 px-4 z-30">
          {/* عنوان اصلی */}
          <div
            data-aos="zoom-out"
            data-aos-duration="1000"
            className="relative"
          >
            <p className="font-semibold text-[2.5rem] md:text-[3.2rem] text-gray-900 dark:text-white tracking-tight">
              محمد امین پور
            </p>
            {/* خط تزئینی زیر عنوان */}
            <div className="w-16 h-[5px] bg-gradient-to-r from-blue-600 to-indigo-500 mx-auto mt-2 rounded-full" />
            {/* نور پشت عنوان */}
            <div className="absolute -z-10 top-4 left-1/2 -translate-x-1/2 w-32 h-16 bg-blue-500/20 blur-3xl rounded-full"></div>
          </div>

          {/* زیرعنوان */}
          <p
            data-aos="zoom-out"
            data-aos-delay="200"
            data-aos-duration="1000"
            className="text-[1.2rem] md:text-[1.4rem] text-gray-700 dark:text-gray-300"
          >
            توسعه‌دهنده مرن‌استک | ReactJs • NextJs • NodeJs • ExpressJs •
            MongoDB
          </p>

          {/* توضیح کوتاه */}
          <p
            data-aos="zoom-out"
            data-aos-delay="400"
            data-aos-duration="1000"
            className="max-w-[680px] text-[1rem] md:text-[1.2rem] leading-relaxed text-gray-600 dark:text-gray-400"
          >
            با تمرکز بر توسعه وب اپلیکیشن‌های مدرن، سریع و قابل اعتماد. اینجا
            جایی است برای معرفی خودم، نمایش مهارت‌ها و پروژه‌هایی که با عشق
            ساخته‌ام !
          </p>

          {/* دکمه معرفی */}
          <div data-aos="zoom-in" data-aos-delay="600">
            <Link
              href="#about"
              className="mt-4 fadeInAnimation inline-flex items-center gap-2 px-8 py-2 rounded-full text-white bg-gradient-to-r from-blue-600 to-indigo-500 hover:scale-95 duration-300 shadow-md"
            >
              منو بیشتر بشناس
              <BsStars className="text-lg" />
            </Link>
          </div>

          {/* آیکن پایین */}
          <Link
            href="#projects"
            data-aos="zoom-out"
            data-aos-delay="100"
            className="absolute fadeInAnimation bottom-10 hover:bg-dark text-[2.3rem] duration-300 text-gray-300"
          >
            <IoArrowDownCircle className="hover:text-white" />
          </Link>
        </div>
      </div>

      {/* About me */}
      {/* Skills */}
      {/* Projects */}
      {/* Contact me */}
      {/* Footer */}

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
