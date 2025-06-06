import React from "react";

import ASSETS from '../assets/Assets';

import { FaReact } from "react-icons/fa";
import { TbBrandVite } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNamecheap, SiCpanel } from "react-icons/si";

import { UnderConstruction } from "../components/UnderConstruction";

const UNDER_CONSTRUCTION = true;

const { RequiemBanner, Pfp } = ASSETS;

function HomePage() {
    return (
        <div className="flex flex-col min-h-screen text-white overflow-x-hidden">
            {
                UNDER_CONSTRUCTION && (<UnderConstruction />)}
            <div className="@container fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
                <div className="absolute w-[60vw] h-[60vw] bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-400 rounded-full blur-[280px] l:opacity-30 md:opacity-50 sm:opacity-80 top-[20%] left-[20%]"></div>
                <div className="fixed w-full h-full bg-[url(./assets/grid.svg)] opacity-30"></div>
            </div>
            <nav className="text-white p-6">
                <div className="container mx-auto flex items-center space-x-8 font-normal shadow-lg font-poppins text-xl uppercase border border-white/20 px-4 py-3 sm:p-6 rounded-[16px] justify-center max-w-screen backdrop-blur-md">
                    {NavButton("", "Home")}
                    {NavButton("about", "About")}
                    {NavButton("requiem", "Requiem", RequiemBanner, 0)}
                    {NavButton("projects", "Projects")}
                    {NavButton("contact", "Contact")}
                    {NavButton("status", "Status")}
                    {NavButton("tools", "Tools")}
                </div>
            </nav>
            <main className="flex flex-col px-6 justify-center space-x-8">
                {/* Hero section */}
                <div className="flex columns-2 items-center margin-x-6">
                    <div className="flex items-center font-normal font-poppins text-xl border border-white/20 backdrop-blur-md py-4 px-4 rounded-2xl min-w-max">
                        {/* Pfp */}
                        <div className="w-40 h-40 bg-cover bg-center rounded-lg outline-2 outline-offset-2 outline-white/20" style={{backgroundImage: `url(${Pfp})`}}></div>
                        <div className="flex-grow ml-8 h-60">
                            <h1 className="text-5xl font-semibold">Welcome to v4nixd.xyz</h1>
                            <div className="text-zinc-500 font-medium ml-1 mt-1 text-lg w-full">
                                <p>I'm v4nixd</p>
                                <p>Self-taught full-stack programmer/sysadmin</p>
                                <p>Co-Founder/Owner of Requiem</p>
                                <p>Running Requiem as a small community since 2022</p>
                                <p>Experienced in deploying and maintaining dedicated game servers, including Counter-Strike 2</p>
                                <p>Proficient in Linux server administration (Ubuntu, systemd, networking, firewalls)</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center font-normal font-poppins text-xl border border-white/20 backdrop-blur-md p-4 rounded-2xl min-w-max max-w-lg mx-auto">
                        <div className="flex columns-3 space-x-5 mx-12">
                            <div>
                                <h1 className="text-3xl font-normal">This website was made with</h1>
                                <div className="flex space-x-4 mt-4">
                                    <Badge icon={FaReact} name="React" className="text-blue-500" />
                                    <Badge icon={TbBrandVite} name="Vite" className="text-purple-500" />
                                    <Badge icon={RiTailwindCssFill} name="TailwindCSS" className="text-blue-400" />
                                </div>
                            </div>
                            <div className="w-[1px] border border-white/20 h-23" />
                            <div>
                                <h2 className="text-3xl font-normal">And is being hosted on</h2>
                                <div className="flex space-x-4 mt-4">
                                    <Badge icon={SiNamecheap} name="Namecheap" className="text-orange-500" />
                                    <Badge icon={SiCpanel} name="cPanel" className="text-orange-400 transform scale-250 ml-4 mr-6" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

type BadgeProps = {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    name: string;
    className?: string;
};

function Badge({icon: Icon, name, className = ""}: BadgeProps) {
    return (
        <div className="relative max-w-min max-h-min py-1 px-3 border border-white/20 rounded-2xl bg-white/10 shadow-2xl cursor-default select-none">
            <div className="inline-flex items-center space-x-2">
                <Icon className={className} />
                <p>{name}</p>
            </div>
        </div>
    )
}

function NavButton(link: string, text: string, image: string = "", textOpacity: number = 1) {
    const buttonStyle = image
        ? { backgroundImage: `url(${image})`, backgroundSize: 'cover', scale: '90%' }
        : {};
    const textStyle = { opacity: textOpacity };

    return (
        <a href={"https://v4nixd.xyz/beta/" + link} className="border shadow-lg/10 border-white/20 relative inline-block !no-underline hover:!no-underline hover:shadow-lg/20 group rounded-md">
            <div className="relative px-4 py-2 transition-all duration-200 ease-in-out group-hover:scale-90 transform" style={buttonStyle}>
                <span className="inline-block" style={textStyle}> {text} </span>
            </div>
        </a>
    )
}

export default HomePage;