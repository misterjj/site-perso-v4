"use client";

import React, { useState } from "react";
import { Toaster } from 'react-hot-toast';

import './App.css'
import Stat from "./components/Stat";
import Skills from "./components/Skills";
import OtherSkills from "./components/OtherSkills";
import { TbCoffee, TbCode, TbMoodTongueWink2, TbCalendarStar  } from "react-icons/tb";
import Path from "./components/Path";
import Presentation from "./components/Presentation";
import Hobbies from "./components/Hobbies";
import KonamiCode from "./components/KonamiCode";
import Joke from "./components/Joke";
import {autoDestruction} from "@/app/components/GLaDOS";

export default function Home() {
    const boxStyle = "glass-effect transition-all duration-500 ease-in-out";

    const startJob =  new Date("2011-11-02")
    const now = new Date();
    const diff = now.getTime() - startJob.getTime();
    const diffDay = Math.floor(diff / (1000 * 60 * 60 * 24));
    const experience = Math.floor(diffDay / (365.25));
    const codeLine = diffDay * 0.1
    const [autoDestructionHit, setAutoDestructionHit] = useState(0);


    const handleKonamiCode = () => {
        const hit = () => {
            console.log(autoDestructionHit)
            setAutoDestructionHit(prevCount => prevCount + 1)
        }
        autoDestruction(hit, () => window.location.reload())
    };

    return (
        <>
            <Toaster reverseOrder={true} />
            <div className="container mx-auto mt-8 px-2 lg:px-0">
                <div className="grid gap-4 grid-cols-2 lg:grid-cols-8 my-20">
                    <div
                        className={`${boxStyle} ${autoDestructionHit >= 2 ? 'shatter-out' : ''} min-h-96 col-span-2 lg:col-span-3 xl:col-span-2`}>
                        <Presentation/></div>
                    <div
                        className={`${boxStyle} ${autoDestructionHit >= 6 ? 'shatter-out' : ''} min-h-96 col-span-2 lg:col-span-5 xl:col-span-6`}>
                        <Path/></div>
                    <div
                        className={`${boxStyle} ${autoDestructionHit >= 1 ? 'shatter-out' : ''} min-h-96 col-span-2 lg:col-span-5`}>
                        <Skills/></div>
                    <div
                        className={`${boxStyle} ${autoDestructionHit >= 5 ? 'shatter-out' : ''} min-h-96 col-span-2 lg:col-span-3`}>
                        <OtherSkills/></div>
                    <div className={`${boxStyle} ${autoDestructionHit >= 6 ? 'shatter-out' : ''} min-h-40 lg:col-span-2 `}>
                        <Stat startValue={0} endValue={experience} label={"Années d'experience"} unit={"+"}
                              icon={<TbCalendarStar size={20}/>}/>
                    </div>
                    <div className={`${boxStyle} ${autoDestructionHit >= 3 ? 'shatter-out' : ''} min-h-40 lg:col-span-2`}>
                        <Stat startValue={0} endValue={codeLine} label={"Lignes de codes"} unit={"k"}
                              icon={<TbCode size={20}/>}/>
                    </div>
                    <div className={`${boxStyle} ${autoDestructionHit >= 1 ? 'shatter-out' : ''} min-h-40  lg:col-span-2`}>
                        <Stat startValue={1000} endValue={0} label={"Tasse de café"} icon={<TbCoffee size={20}/>}/>
                    </div>
                    <div className={`${boxStyle} ${autoDestructionHit >= 3 ? 'shatter-out' : ''} min-h-40  lg:col-span-2`}>
                        <Stat startValue={0} endValue={diffDay} label={"Jokes de papa"}
                              icon={<TbMoodTongueWink2 size={20}/>}/>
                    </div>
                    <div
                        className={`${boxStyle} ${autoDestructionHit >= 2 ? 'shatter-out' : ''} col-span-2 lg:col-span-4 min-h-96 lg:row-span-2`}>
                        <Hobbies/></div>
                    <div
                        className={`${boxStyle} ${autoDestructionHit >= 4 ? 'shatter-out' : ''} col-span-2 lg:col-span-4 min-h-40`}>
                        <Joke/></div>
                    <div
                        className={`${boxStyle} ${autoDestructionHit >= 7 ? 'shatter-out' : ''} col-span-2 lg:col-span-4 min-h-40 lg:block hidden`}>
                        <KonamiCode onKonamiCode={handleKonamiCode}/></div>
                </div>
            </div>
        </>
    )
        ;
}
