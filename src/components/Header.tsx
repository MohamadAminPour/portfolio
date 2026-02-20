"use client"

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


import { X } from 'lucide-react';
import Link from 'next/link'
import React, { useState } from 'react'
import { FaBars, FaGithub, FaTimes } from 'react-icons/fa';

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Header */}
            <header
                data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-delay="2000"
                className="static md:fixed top-0 md:top-5 w-full md:mt-0 pt-5 z-50!"
            >
                <nav className="w-[90%] md:w-[80%] mx-auto flex items-center justify-between bg-zinc-700/30 z-50! p-5 rounded-3xl backdrop-blur-sm border-1 border-zinc-200/20">
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
                        href="https://github.com/MohamadAminPour"
                        target="_blank"
                        onClick={() => setOpen(false)}
                        className="flex items-center justify-center gap-2 bg-primary text-white rounded-xl px-5 py-2 mt-2 hover:scale-95 transition-all"
                    >
                        {" "}
                        <FaGithub /> <span className="text-[.9rem]">گیت هاب</span>
                    </Link>
                </div>
            )}
        </>
    )
}
