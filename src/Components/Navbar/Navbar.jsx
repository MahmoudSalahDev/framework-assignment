import { NavLink } from "react-router-dom";
import { useEffect, useState } from 'react'



export default function Navbar() {
    const [scrollPosition, setScrollPosition] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
    }, []);
    useEffect(() => {
        if (scrollPosition > 26) {
            document.querySelector("nav.nav").classList.remove("py-[24px]");
            document.querySelector("nav.nav").classList.add("py-[8px]");

        } else {
            document.querySelector("nav.nav").classList.remove("py-[8px]");
            document.querySelector("nav.nav").classList.add("py-[24px]");
        }
    })

    return (
        <>
            <nav className="nav bg-[#2c3e50] text-white py-[24px] fixed w-full transition-[padding] duration-500 z-50 px-[20px]">
                <div className="container flex flex-col lg:flex-row lg:justify-between lg:items-center gap-[10px]">
                    <div className="flex justify-between items-center">
                        <NavLink to="/"><h1 className="uppercase font-bold text-[calc(1.325rem+.9vw)]">start framework</h1></NavLink>
                        <a className="text-[30px] lg:hidden cursor-pointer" onClick={() => {
                            if (document.getElementById("tabs").classList.contains("h-[160px]")) {
                                document.getElementById("tabs").classList.replace("h-[160px]", "h-0")
                            }
                            else if (document.getElementById("tabs").classList.contains("h-0")) {
                                document.getElementById("tabs").classList.replace("h-0", "h-[160px]")
                            }
                        }}><i className="fa-solid fa-bars"></i></a>
                    </div>
                    <div className="overflow-hidden transition-all h-[160px] lg:h-[40px] duration-500 " id="tabs">
                        <ul className="uppercase flex  flex-col lg:flex-row items-start lg:items-center gap-[20px]">
                            <li><NavLink to="/about" className={({ isActive }) => {
                                return `p-[8px] font-bold rounded-md block ${isActive ? "bg-[#1abc9c]" : ""}`
                            }}>about</NavLink></li>
                            <li><NavLink to="/portfolio" className={({ isActive }) => {
                                return `p-[8px] font-bold rounded-md block ${isActive ? "bg-[#1abc9c]" : ""}`
                            }}>portfolio</NavLink></li>
                            <li><NavLink to="/contact" className={({ isActive }) => {
                                return `p-[8px] font-bold rounded-md block ${isActive ? "bg-[#1abc9c]" : ""}`
                            }}>contact</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
