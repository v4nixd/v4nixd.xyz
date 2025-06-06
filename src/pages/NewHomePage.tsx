import { Helmet } from 'react-helmet';
import { useEffect } from 'react';

import { UnderConstruction } from '../components/UnderConstruction'
import HeroCTAButton from '../components/new/landing_page/HeroCTAButton'

const BASE_LINK = "v4nixd.xyz"

const UNDER_CONSTRUCTION = true;

function NewHomePage() {
    useEffect(() => {
        document.body.classList.remove('bg-(color:--color-jb-gray-1)');
        document.body.classList.add('bg-[#0A0A0A]', 'bg-[url(./assets/noise.png)]', 'bg-size-[1440px]');
    }, []);

    return (
        <>
            <Helmet>
                <title>v4nixd.xyz</title>
            </Helmet>
            {UNDER_CONSTRUCTION && (<UnderConstruction/>)}
            <header className="sticky top-0 z-10 flex w-full justify-between p-1.5 backdrop-blur-xl max-sm:border-b max-sm:border-white/20 sm:top-6 sm:mt-6 sm:px-80">
                <a href={`https://${BASE_LINK}/beta/new`}>
                    <div className="flex items-center justify-center gap-2 text-center">
                        <div className="flex aspect-square size-8 items-center justify-center rounded-md bg-[url(./assets/icons/VA_ICON.svg)]"/>
                        <div className="ml-1 grid flex-1 text-left text-sm text-white font-montserrat">
                            <span className="mb-0.5 truncate font-semibold leading-none">V4NIXD.XYZ</span>
                            <span className="mb-0.5 truncate text-xs font-semibold leading-none">Digital mind. Real vision.</span>
                        </div>
                    </div>
                </a>
                <nav aria-label="Main" className="relative z-10 flex max-w-max flex-1 items-center justify-center text-white font-inter">
                    <ul className="group flex flex-1 list-none items-center justify-center gap-x-1">
                        <li className="max-sm:sr-only">
                            {HeaderButton("requiem", "Requiem")}
                            {HeaderButton("contact", "Contact")}
                        </li>
                    </ul>
                </nav>
            </header>
            <main className="sm:px-52 h-[200vh] text-white">
                <div>
                    <div className="mx-auto max-w-2xl py-12 sm:py-12">
                        <div className="mb-8 justify-center sm:flex">
                            <div className="flex items-center gap-1 rounded-xl border border-white/10 backdrop-blur-xl px-4 py-2 text-sm/6 text-white font-poppins text-xl whitespace-normal">
                                <div className="flex mr-3 aspect-square size-8 items-center justify-center rounded-md text-jb-default-text bg-[url(./assets/icons/RQ_ICON.svg)]"/>
                                <div className="flex flex-col leading-snug">
                                    <span>Requiem Net</span>
                                    <span className="text-sm text-jb-gray-3">Since 27.01.2022</span>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <h1 className="text-balance text-4xl font-montserrat font-semibold tracking-tight sm:text-5xl">Hi, i'm v4nixd</h1>
                            <div className="mt-8 grid grid-cols-2 gap-1.5 sm:grid-cols-4">
                                {/*HERO CARDS*/}
                                <div className="border border-white/20 bg-[#0A0A0A]/20 backdrop-blur-xs text-white shadow-sm rounded-xl">
                                    <div className="flex-col p-4 flex items-center pb-0 pt-4 text-center">
                                        <div className="flex aspect-square size-32 items-center justify-center bg-[url(./assets/icons/DEV_ICON.svg)]"></div>
                                    </div>
                                    <div className="p-4 text-center text-md font-poppins">
                                        Self-taught<br/>
                                        Full-Stack<br/>
                                        Developer
                                    </div>
                                </div>
                                <div className="border border-white/20 bg-[#0A0A0A]/20 backdrop-blur-xs text-white shadow-sm rounded-xl">
                                    <div className="flex-col p-4 flex items-center pb-0 pt-4 text-center">
                                        <div className="flex aspect-square size-32 items-center justify-center bg-[url(./assets/icons/RQ_ICON.svg)]"></div>
                                    </div>
                                    <div className="p-4 text-center text-md font-poppins">
                                        Owner<br/>
                                        Co-Founder<br/>
                                        of Requiem
                                    </div>
                                </div>
                                <div className="border border-white/20 bg-[#0A0A0A]/20 backdrop-blur-xs text-white shadow-sm rounded-xl">
                                    <div className="flex-col p-4 flex items-center pb-0 pt-4 text-center">
                                        <div className="flex aspect-square size-32 items-center justify-center bg-[url(./assets/icons/COMMUNITY_ICON.svg)]"></div>
                                    </div>
                                    <div className="p-4 text-center text-md font-poppins">
                                        Running Requiem since 2022
                                    </div>
                                </div>
                                <div className="border border-white/20 bg-[#0A0A0A]/20 backdrop-blur-xs text-white shadow-sm rounded-xl">
                                    <div className="flex-col p-4 flex items-center pb-0 pt-4 text-center">
                                        <div className="flex aspect-square size-32 items-center justify-center bg-[url(./assets/icons/SERVER_ICON.svg)]"></div>
                                    </div>
                                    <div className="p-4 text-center text-md font-poppins">
                                        Deploying<br/>
                                        & maintaining<br/>
                                        Game Servers
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 sm:mt-8 flex items-center justify-center gap-x-2">
                                <HeroCTAButton text={"Projects"} link={"projects"} style={"main"}/>
                                <HeroCTAButton text={"About me"} link={"about"} style={"secondary"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

// TODO: Make HeroCard component

function HeaderButton(link: string, text: string) {
    return (
        <a href={`https://${BASE_LINK}/beta/new/${link}`}
           className="relative inline-block !no-underline hover:!no-underline rounded-md">
            <div className="relative px-4 py-2 transition-all duration-100 ease-in-out hover:bg-white/10 rounded-md">
                <span className="inline-block">{text}</span>
            </div>
        </a>
    )
}

export default NewHomePage;