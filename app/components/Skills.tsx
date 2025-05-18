"use client"
import { useState, useEffect, useRef } from 'react';

interface Percents {
    Scala: number,
    PHP: number,
    Mysql: number,
    Css: number,
    Javascript: number,
}

function Skills() {
    const [barPercents, setBarPercents] = useState<Percents>({
        Scala: 0,
        PHP: 0,
        Mysql: 0,
        Css: 0,
        Javascript: 0,
    });

    const componentRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.unobserve(entry.target)
                    }
                });
            }
        );

        const currentRef = componentRef.current;

        if(currentRef){
            observer.observe(currentRef)
        }

        return () => {
            if(currentRef){
                observer.unobserve(currentRef)
            }
        }
    }, [])

    useEffect(() => {
        const targetPercents: Percents = {
            Scala: 85,
            PHP: 90,
            Mysql: 75,
            Css: 45,
            Javascript: 65,
        };

        if (isVisible) {
            const animate = () => {
                const complete = JSON.stringify(targetPercents) == JSON.stringify(barPercents)

                if (!complete) {
                    setBarPercents((barPercents) => {
                        const newPercents = {...barPercents};

                        Object.keys(targetPercents).forEach(key => {
                            const typedKey = key as keyof Percents;
                            const newPercent = newPercents[typedKey] as number
                            const targetPercent = targetPercents[typedKey] as number
                            if (newPercent < targetPercent) {
                                newPercents[typedKey] = Math.min(newPercent + 1, targetPercent)
                            }
                        })
                        return newPercents
                    })
                }
            }

            const animationFrameId = requestAnimationFrame(animate);

            return () => cancelAnimationFrame(animationFrameId);
        }
    }, [isVisible, barPercents]);


    const chartLine = (name: string, position: string) => {
        return (
            <div className={`border-dashed border-b border-gray-500 absolute w-full t-0 ${position}`}>
                <span className="text-xs absolute right-full -translate-y-1/2 -translate-x-2">{name}</span>
            </div>
        );
    };

    const chartBar = (name: string, background: string) => {
        const key = name as keyof Percents;
        const percent = barPercents[key] || 0;
        return (
            <div
                className={`${background} w-full rounded-t-lg flex flex-col justify-end gap-2 pb-2 relative`}
                style={{ height: `${percent}%` }}
            >
                <div className="w-full justify-center items-center gap-1 font-bold hidden sm:flex">
                    <span className="md:text-4xl">{percent}</span>
                    <span>%</span>
                </div>
                <span className="text-xs md:text-sm 0 text-center absolute left-1/2 -bottom-5 -translate-x-1/2 sm:relative sm:translate-x-0 sm:left-0 sm:bottom-0">{name}</span>
            </div>
        );
    };

    return (
        <div ref={componentRef} className="h-full flex flex-col p-4 gap-4">
            <div className="grow ps-16">
                <div className="h-full w-full border border-t-transparent border-r-transparent border-gray-500 relative">
                    {chartLine("Newbie", "bottom-1/4")}
                    {chartLine("Geek", "bottom-1/2")}
                    {chartLine("Ninja", "bottom-3/4")}
                    {chartLine("Jedi", "bottom-full")}
                    <div className="absolute w-full h-full flex gap-4 px-4 items-end">
                        {chartBar("Scala", "bg-gradient-to-t from-[#D42F2E] to-[#DA3E40]")}
                        {chartBar("PHP", "bg-gradient-to-t from-[#878DB8] to-[#afb7ed]")}
                        {chartBar("Mysql", "bg-gradient-to-t from-[#F2851E] to-[#E98C1C]")}
                        {chartBar("Css", "bg-gradient-to-t from-[#0068B9] to-[#0391D5]")}
                        {chartBar("Javascript", "bg-gradient-to-t from-yellow-600 to-yellow-400")}
                    </div>
                </div>
            </div>
            <div>
                <span className="text-3xl font-bold">Compétences</span>
            </div>
        </div>
    );
}

export default Skills;