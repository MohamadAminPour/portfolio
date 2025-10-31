"use client";

import Link from "next/link";
import {
  BsBackpack2,
  BsClipboardData,
  BsHeartPulse,
  BsRocketTakeoff,
  BsShieldCheck,
  BsStars,
} from "react-icons/bs";
import {
  FaEnvelope,
  FaGithub,
  FaJs,
  FaLinkedin,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { IoArrowDownCircle, IoCodeSlashOutline } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
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

const texts = [
  { text: "محمد امین پور", delay: 0, className: "text-[3rem]" },
  {
    text: "مرن استک دولوپر",
    delay: 300,
    className: "text-[1.5rem] text-zinc-600 dark:text-white/50",
  },
  {
    text: "منبعی برای معرفی خودم، مهارت‌هایم و پروژه‌هایی که توسعه دادم!",
    delay: 500,
    className: "text-[1.8rem] text-center",
  },
];

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800, // زمان انیمیشن
      once: true, // فقط یک‌بار اجرا شود
    });
  }, []);
  return (
    <div className="relative h-screen">
      {/* Grid background */}
      <div className="absolute inset-0 grid grid-cols-12 grid-rows-8 opacity-20">
        {Array.from({ length: 96 }).map((_, i) => (
          <div
            key={i}
            className="border border-gray-400/45 dark:border-gray-500/20"
          ></div>
        ))}
      </div>

      {/* Header */}
      <header
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-delay="2000"
        className="fixed w-full top-5 z-50 "
      >
        <nav className="container mx-auto flex items-center justify-between bg-zinc-700/50 p-5 rounded-3xl backdrop-blur-sm">
          <Link href="/" className="text-primary text-[1.2rem] ">
            .PortFolio
          </Link>
          <ul className="flex items-center gap-5">
            {menuLinks.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.link}
                  className={`${
                    item.link === "/" ? "text-primary" : ""
                  } hover:text-primary duration-300
                  `}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="github.com"
            className="flex items-center justify-center text-dark duration-300 hover:text-white hover:scale-110 hover:rotate-2 gap-2 bg-primary rounded-xl px-4 py-2"
          >
            <FaGithub className="text-[1.1rem]" />
            <p className="text-[.8rem]">گیت هاب</p>
          </Link>
        </nav>
      </header>

      {/* Hiro */}
      <div className="relative w-full h-screen">
        <div className="absolute h-full w-full *:text[3rem] opacity-0 md:opacity-100 text-black ">
          <FaReact
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1600"
            className="bg-blue-600 shadow-xl p-3 size-[5rem] rounded-2xl shadow-zinc-900 text-[3rem] absolute top-[10rem] right-[15rem] rotate-12  "
          />
          <FaJs
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1800"
            className=" bg-yellow-500 shadow-xl p-3 size-[4rem] rounded-2xl shadow-zinc-900 text-[3rem] absolute top-[30rem] right-[5rem] rotate-12"
          />
          <RiNextjsFill
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="2000"
            className=" bg-zinc-300 shadow-xl p-3 size-[4rem] rounded-2xl shadow-zinc-900 text-[3rem] absolute top-[35rem] right-[25rem] rotate-12"
          />

          <RiTailwindCssFill
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1000"
            className=" bg-blue-300 shadow-xl p-3 size-[4rem] rounded-2xl shadow-zinc-900 text-[3rem] absolute top-[10rem] left-[15rem] rotate-12"
          />
          <FaNodeJs
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1200"
            className=" bg-green-500 shadow-xl p-3 size-[4.5rem] rounded-2xl shadow-zinc-900 text-[3rem] absolute top-[30rem] left-[5rem] rotate-12"
          />
          <SiMongodb
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1400"
            className=" text-green-700 bg-zinc-300 shadow-xl p-3 size-[3.5rem] rounded-2xl shadow-zinc-900 text-[3rem] absolute top-[35rem] left-[25rem] rotate-12"
          />
        </div>
        <div className="absolute top-0 w-full h-full flex flex-col items-center justify-center text-center gap-5 px-4 z-30 bg-gradient-to-b from-white/60 via-transparent to-white/10 dark:from-gray-900/70 dark:via-gray-900/40 dark:to-gray-900/10 backdrop-blur-[2px]">
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
            <div className="w-16 h-[3px] bg-gradient-to-r from-blue-600 to-indigo-500 mx-auto mt-2 rounded-full" />
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
            با تمرکز بر توسعه اپلیکیشن‌های مدرن، سریع و قابل اعتماد. اینجا جایی
            است برای معرفی خودم، نمایش مهارت‌ها و پروژه‌هایی که با عشق ساخته‌ام.
          </p>

          {/* دکمه معرفی */}
          <div data-aos="zoom-in" data-aos-delay="600">
            <Link
              href="#about"
              className="mt-4 fadeInAnimation inline-flex items-center gap-2 px-8 py-2 rounded-full text-white bg-gradient-to-r from-blue-600 to-indigo-500 hover:scale-95 duration-300 shadow-md"
            >
              بیشتر درباره من
              <BsStars className="text-lg" />
            </Link>
          </div>

          {/* آیکن پایین */}
          <Link
            href="#projects"
            data-aos="zoom-out"
            data-aos-delay="100"
            className="absolute fadeInAnimation bottom-[3rem] text-[2.3rem] text-gray-700 dark:text-gray-300"
          >
            <IoArrowDownCircle />
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
