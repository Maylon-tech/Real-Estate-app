"use client";

import { useState } from "react";
import Link from "next/link"
import Button from "../ui/Button"
import { FaHome } from "react-icons/fa"
import { IoClose } from "react-icons/io5";
import { HiOutlineMenuAlt3 } from "react-icons/hi";


interface NavbarProps {
    variant?: "transparent" | "solid"
}

const navLinks = [
    "Home",
    "Proprieties",
    "MarketPlace"
]


const Navbar = ({ variant = "transparent" }: NavbarProps) => {
    const [isOpen, setIsOpen] = useState(false)

    const isTransparent = variant === "transparent"
    
  return (
      <section className={
          `absolute top-0 left-0 w-full z-50  
          ${isTransparent ? "absolute" : "sticky border-b border-black/5 bg-card"}`
      }>
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <nav className={`flex h-20 items-center justify-between ${isTransparent ? "mt-6 rounded-3xl border-white/10 bg-white/5 px-6 backdrop-blur-2xl" : "px-0"}`}>
            {/* LOGO */}
            <Link
                href="/"
                className="flex items-center text-2xl font-semibold"
            >
                <span className={isTransparent ? "text-gray-300" : "text-text"}>
                    Next
                </span>
                <span className="bg-primary text-white px-2 py-1 rounded-tr-2xl rounded-bl-2xl">
                    Estate
                </span>
            </Link>
            
            {/* DESKTOP LINKS */}
            <div className="hidden items-center gap-8 lg:flex">
                {
                    navLinks.map((item) => (
                        <Link
                            key={item}
                            href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                            className={`text-sm font-medium transition hover:text-primary ${isTransparent ? "text-white/80" : "text-text/70"}`}
                        >
                         {item}   
                        </Link>
                    ))
                }
            </div>
            
            {/* DESKTOP BUTTONS */}
            <div className="hidden items-center gap-4 lg:flex">
                    <Button variant="outline">
                        Login
                    </Button>
                      <Button
                          iconPosition="left"
                          icon={<FaHome />}
                          variant="outline"
                        >
                        Add Property
                    </Button>
            </div>
            
            {/* MOBILE MENU BUTTON*/}

            <button 
                className={`flex h-11 w-11 items-center justify-center rounded-2xl transition lg:hidden
                    ${isTransparent ? "border border/white/10 bg-white/5 text-white" : "border border-black/10 bg-background text-text"}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                {
                    isOpen ? <IoClose size={24} /> : <HiOutlineMenuAlt3 size={24} />
                }
            </button>
        </nav>
        
            {/* MOBILE MENU */}
            
            {
                isOpen && (
                    <div className={`mt-4 rounded-3xl p-6 backdrop-blur-2xl lg:hidden 
                        ${isTransparent 
                            ? "border border-white/10 bg-secondary/95" 
                            : "border border-black/5 bg-white"}   `
                    }>
                        <div className="flex flex-col gap-5">
                            {
                                navLinks.map((item) => (
                                    <Link
                                        key={item}
                                        href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                                        className={`text-sm font-medium transition hover:text-primary ${isTransparent ? "text-white/80" : "text-text/70"}`}
                                    >
                                    {item}   
                                    </Link>
                                ))
                            }
                            
                            <div className="flex flex-col gap-3 mt-4">
                                <Button variant="outline">
                                    Login
                                </Button>
                                <Button
                                    iconPosition="left"
                                    icon={<FaHome />}
                                    variant="outline"
                                    >
                                    Add Property
                                </Button>
                            </div>
                        </div>
                    </div>
                )
            }
      </div>
    </section>
  )
}

export default Navbar
