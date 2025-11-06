"use client";

import Link from "next/link";
import { BsFillHeartPulseFill, BsStars } from "react-icons/bs";
import { FaCode, FaGithub, FaJs, FaLinkedin, FaNodeJs, FaReact, FaTelegram } from "react-icons/fa";
import { IoArrowDownCircle, IoNewspaperOutline } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { RiInstagramFill, RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaBars, FaTimes } from "react-icons/fa";
import { skillsIcon } from "@/lib/skillsIcon";
import ProjectCard from "@/components/ProjectCard";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { LuBrainCircuit } from "react-icons/lu";
import {
  MdEmail,
  MdOutlineSentimentVerySatisfied,
  MdOutlineTimer,
} from "react-icons/md";
import { X } from "lucide-react";

interface IMenuLinks {
  id: number;
  title: string;
  link: string;
}

const menuLinks: IMenuLinks[] = [
  { id: 1, title: "خانه", link: "/" },
  { id: 2, title: "درباره من", link: "#aboutme" },
  { id: 3, title: "مهارت ها", link: "#skills" },
  { id: 4, title: "پروژه ها", link: "#projects" },
  { id: 5, title: "ارتباط با من", link: "#contactme" },
];

const projects = [
  {
    id: 1,
    title: "پنل رزرواسیون ویزیت می",
    description:
      "سیستم رزرواسیون آنلاین دکتر با قابلیت های مدیریت ویزیت ها، پزشکان، بیماران، مشاهده پزشکان و رزرو نوبت",
    image: "/images/visitme.jpeg",
    tech: ["NextJs", "TypeScript", "React Query", "Tailwind", "API Routes"],
    github: "https://github.com/MohamadAminPour/visit-me",
    demo: "https://vissit-me.vercel.app/",
  },
  {
    id: 2,
    title: "سایت موزیکال",
    description:
      "پلتفرم پخش موزیک با قابلیت های ایجاد موزیک، آلبوم، خواننده  میتوانید همه را مشاهده و بخش کنید !",
    image: "/images/musicall.jpeg",
    tech: [
      "NextJs",
      "TypeScript",
      "Tailwind",
      "NodeJs",
      "ExpressJs",
      "MongoDB",
    ],
    github: "https://github.com/MohamadAminPour/musicall",
  },
  {
    id: 3,
    title: "لندینگ پیج آرامیس",
    description:
      "سایت آرامیس جایی برای خرید محصولاتی مانند مبل، تشک، پتو، بالشت و کلی لوازم دیگر !",
    image: "/images/aramis.png",
    tech: ["ReactJs", "Tailwind"],
    github: "https://github.com/MohamadAminPour/musicall",
    demo: "https://aramis.onrender.com/",
  },
  {
    id: 4,
    title: "سایت فیلم و سریال پوفوفیلم",
    description:
      "سایت پوفوفیلم جایی برای تماشا و دانلود جدیدترین فیلم و سریال های روز دنیای سینما !",
    image: "/images/pofofilm.png",
    tech: ["html", "css", "Js", "php", "mySql"],
    github: "https://github.com/MohamadAminPour/pofofilm",
  },
  {
    id: 5,
    title: "سایت پروژه های دانشجویی پروجه",
    description:
      "سایت پروجه پلتفرمی برای انتشار پروژه های دانشجویی و خرید و فروش آنهاست تا دانشجویان بتوانند خودشان را به بقیه نشان دهند !",
    image: "/images/proje.png",
    tech: ["ReactJs", "Tailwind", "php", "Laravel", "mySql"],
    github: "https://github.com/futureindustrryuni/mainProject",
  },
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
        className="static md:fixed top-0 md:top-5 w-full md:mt-0 pt-5 z-50!"
      >
        <nav className="w-[90%] md:container mx-auto flex items-center justify-between bg-zinc-700/30 z-50! p-5 rounded-3xl backdrop-blur-sm border-1 border-zinc-200/20">
          {/* لوگو */}
          <Link href="/" className="text-primary text-[1.3rem] font-semibold">
            .PortFolio
          </Link>

          {/* دکمه منو در موبایل */}
          <button
            className="text-white text-[1.5rem] md:hidden cursor-pointer"
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
                  className={`${item.link === "/" ? "text-primary" : "text-white"
                    } hover:text-primary duration-300`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* دکمه گیت‌هاب */}
          <Link
            href="https://github.com/MohamadAminPour"
            target="_blank"
            className="hidden md:flex items-center justify-center text-dark duration-300 hover:text-white hover:scale-110 hover:rotate-2 gap-2 bg-primary rounded-xl px-4 py-2"
          >
            <FaGithub className="text-[1.1rem]" />
            <p className="text-[.8rem]">گیت هاب</p>
          </Link>
        </nav>
      </header>
      {/* منوی موبایل */}
      {open && (
        <div className="fixed h-screen top-0 left-0 w-full z-50! bg-zinc-800 backdrop-blur-md p-6 flex flex-col items-center justify-center gap-5 text-white animate-fade-in">
          <p className="absolute top-5 right-5 cursor-pointer" onClick={() => setOpen(false)}><X /></p>
          {menuLinks.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              onClick={() => setOpen(false)}
              className="hover:text-primary duration-300"
            >
              {" "}
              {item.title}{" "}
            </Link>
          ))}{" "}
          <Link
            href="https://github.com"
            target="_blank"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 bg-primary text-white rounded-xl px-5 py-2 mt-2 hover:scale-95 transition-all"
          >
            {" "}
            <FaGithub /> <span className="text-[.9rem]">گیت هاب</span>
          </Link>
        </div>
      )}

      {/* Hiro */}
      <div className="relative w-full h-[80vh] md:h-[100vh] -z-10">
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
        <div className="absolute top-0 w-full h-full flex flex-col items-center justify-center text-center gap-5 px-4">
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
              href="#aboutme"
              className="mt-4 fadeInAnimation inline-flex items-center gap-2 px-8 py-2 rounded-full text-white bg-gradient-to-r from-blue-600 to-indigo-500 hover:scale-95 duration-300 shadow-md"
            >
              منو بیشتر بشناس
              <BsStars className="text-lg" />
            </Link>
          </div>

          {/* آیکن پایین */}
          <Link
            href="#skills"
            data-aos="zoom-out"
            data-aos-delay="100"
            className="absolute fadeInAnimation bottom-10 hover:bg-dark text-[2.3rem] duration-300 text-gray-300"
          >
            <IoArrowDownCircle className="hover:text-white" />
          </Link>
        </div>
      </div>

      {/* About me */}
      <div id="aboutme" className="w-[90%] md:w-[80%] mx-auto flex items-center justify-center py-[8rem]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="">
            <span className="bg-primary/20 inline-flex items-center justify-center gap-2 text-primary  text-[.9rem] px-4 py-2 border-1 border-zinc-200/20 rounded-full">
              <FaCode className="mt-1" />
              مرن استک دولوپر
            </span>
            <p className="mt-3 text-3xl">محمد امین پور</p>
            <p
              className="mt-3 text-zinc-500 text-justify"
              style={{ direction: "rtl" }}
            >
              توسعه دهنده و مرن استک با تخصص در زمینه های ExpressJs NodeJs
              NextJs ReactJs MongoDB و دارای تجربه همکاری در تیم های برنامه
              نویسی و همچنین روحیه کار تیمی، مسئولیت پذیرو سخت کوش. هدف اصلی من
              توی این حوزه یادگیری تکنولوژی های جدید هست تا بتونم پروژه ها رو به
              بهترین نحو ارائه بدم...
            </p>
            <ul className="mt-3 grid grid-cols-2 gap-2 *:flex *:items-center *:gap-2 *:bg-darkM *:rounded-lg *:px-2 *:py-2">
              <li>
                <BsFillHeartPulseFill className="bg-zinc-700 text-primary size-[2.5rem] p-2 rounded-md " />
                <p>پایبند به قول</p>
              </li>
              <li>
                <IoNewspaperOutline className="bg-zinc-700 text-primary size-[2.5rem] p-2 rounded-md " />
                <p>مسئولیت پذیر</p>
              </li>
              <li>
                <MdOutlineSentimentVerySatisfied className="bg-zinc-700 text-primary size-[2.5rem] p-2 rounded-md " />
                <p>خوش اخلاق</p>
              </li>
              <li>
                <MdOutlineTimer className="bg-zinc-700 text-primary size-[2.5rem] p-2 rounded-md " />
                <p>وقت شناس</p>
              </li>
              <li>
                <LuBrainCircuit className="bg-zinc-700 text-primary size-[2.5rem] p-2 rounded-md " />
                <p>ذهن خلاق</p>
              </li>
            </ul>
          </div>
          <div className="" style={{ direction: "ltr" }}>
            <div className="relative h-[20rem] md:h-[40rem] lg:h-[25rem] xl:h-[30rem] rounded-[1.5rem] overflow-hidden ">
              <Image
                src="/images/img.jpg"
                alt=""
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div
        className="flex items-center justify-center flex-col text-center pt-10 md:pt-28"
        id="skills"
      >
        <h2 className="text-2xl md:text-3xl font-bold">مهارت‌ های من</h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full mt-2"></div>
        <p className="mt-3 text-gray-500 text-sm md:text-base w-[80%] md:max-w-md mx-auto">
          مهارت هایی که در این چند سال آموزش دیدم و در آن ها تخصص دارم را
          میتوانید مشاهده کنید !
        </p>

        <ul className="w-[90%] md:container *:border-1 *:border-zinc-200/10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-5 gap-3">
          {skillsIcon.map((item) => (
            <li
              key={item.id}
              className="skillItem duration-300 p-3 bg-darkM rounded-xl shadow flex flex-row-reverse justify-between items-center"
            >
              <div className="font-medium flex items-center justify-center gap-2">
                {item.skill}
                {item.icon}
              </div>
              <div className="flex items-center gap-2">
                <div className="w-40 bg-gray-300 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-primary h-3"
                    style={{ width: `${item.percentAge}%` }}
                  ></div>
                </div>
                <span className="text-sm text-primary">{item.percentAge}%</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Projects */}
      <div
        className="flex items-center justify-center flex-col text-center pt-10 md:pt-28 md:mt-0 mt-20"
        id="projects"
      >
        <h2 className="text-2xl md:text-3xl font-bold">پروژه های من</h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full mt-2"></div>
        <p className="mt-3 text-gray-500 text-sm md:text-base w-[80%] md:max-w-md mx-auto">
          کلی پروژه اینجاست که همه رو با شوق و ذوق طراحی و توسعه دادم، میتونین
          آن ها را مشاهده کنید !
        </p>

        <ul className="w-[90%] md:container *:border-1 *:border-zinc-200/10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-5 gap-3">
          {projects.map((p) => (
            <ProjectCard key={p.id} {...p} />
          ))}
        </ul>
      </div>

      {/* Contact me */}
      <div className="flex items-center justify-center flex-col text-center pt-10 md:pt-28 md:mt-0 mt-20"
        id="contactme">
        <h2 className="text-2xl md:text-3xl font-bold">ارتباط با من</h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full mt-2"></div>
        <p className="mt-3 text-gray-500 text-sm md:text-base w-[80%] md:max-w-md mx-auto">
          شما میتوانید برای ارتباط و صحبت با من از طریق فضا های مجازی زیر اقدام کنید !
        </p>

        <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 *:flex *:items-center *:justify-center *:flex-col *:border-1 *:border-zinc-100/20 *:px-3 *:rounded-xl *:size-[12rem] sm:*:size-[15rem] *:bg-darkM mt-5">
          <li>
            <FaTelegram className="size-[4rem] md:size-[5rem]  p-1 rounded-md text-primary" />
            <p className="mt-1 text-[1rem] md:text-[1.2rem]">Telegram</p>
            <Link className="bg-dark w-full duration-300 hover:text-primary py-2 px-2 mt-5 md:mt-9 text-[.8rem] md:text-[.9rem] rounded-lg " href="">Send Text</Link>
          </li>
          <li>
            <FaLinkedin className="size-[4rem] md:size-[5rem] rounded-md  text-primary" />
            <p className="mt-1 text-[1rem] md:text-[1.2rem]">Linked in</p>
            <Link className="bg-dark w-full duration-300 hover:text-primary py-2 px-2 mt-5 md:mt-9 text-[.8rem] md:text-[.9rem] rounded-lg " href="">Connect</Link>
          </li>
          <li>
            <RiInstagramFill className="size-[4rem] md:size-[5rem] rounded-md  text-primary" />
            <p className="mt-1 text-[1rem] md:text-[1.2rem]">Instagram</p>
            <Link className="bg-dark w-full duration-300 hover:text-primary py-2 px-2 mt-5 md:mt-9 text-[.8rem] md:text-[.9rem] rounded-lg " href="">Follow</Link>
          </li>
          <li>
            <MdEmail className="size-[4rem] md:size-[5rem]  rounded-md text-primary"/>
            <p className="mt-1 text-[1rem] md:text-[1.2rem]">Email</p>
            <Link className="bg-dark w-full duration-300 hover:text-primary py-2 px-2 mt-5 md:mt-9 text-[.8rem] md:text-[.9rem] rounded-lg " href="">Send Email</Link>
          </li>
        </ul>
      </div>


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
    </div>
  );
}
