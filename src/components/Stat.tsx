import React, {useEffect, useRef, useState} from 'react';

interface StatProps {
    startValue: number;
    endValue: number;
    label: string;
    icon: React.ReactElement;
    unit?: string;
    duration?: number;
}

const Stat: React.FC<StatProps> = ({
   startValue,
   endValue,
   label,
   icon,
   unit = "",
   duration = 2000
}) => {
    const [currentValue, setCurrentValue] = useState(startValue);
    const startTime = useRef<number | null>(null);
    const animationFrameId = useRef<number | null>(null);
    const labelRef = useRef<HTMLSpanElement>(null);
    const observer = useRef<IntersectionObserver | null>(null);
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {

        const animateValue = (timestamp: number) => {
            if (!startTime.current) {
                startTime.current = timestamp;
            }

            const progress = Math.min(1, (timestamp - startTime.current) / duration);
            setCurrentValue(Math.floor(startValue + (endValue - startValue) * progress));

            if (progress < 1) {
                animationFrameId.current = window.requestAnimationFrame(animateValue);
            } else {
                animationFrameId.current = null;
            }
        };


        if (isVisible && currentValue !== endValue) {
            startTime.current = null;
            animationFrameId.current = window.requestAnimationFrame(animateValue);
        }

        return () => {
            if (animationFrameId.current) {
                if (typeof animationFrameId.current === "number") {
                    window.cancelAnimationFrame(animationFrameId.current);
                }
            }
        }
    }, [isVisible, startValue, endValue, duration]);


    useEffect(() => {
        observer.current = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setIsVisible(true)
                        observer.current?.disconnect()
                    }
                });
            },
            {
                threshold: 0.1,
            }
        );
        if (labelRef.current) {
            if ("observe" in observer.current) {
                observer.current.observe(labelRef.current);
            }
        }
        return () => {
            if (observer.current) {
                if ("disconnect" in observer.current) {
                    observer.current.disconnect()
                }
            }
        }
    }, []);


    return (
        <div  className="h-full flex flex-col items-center gap-2 justify-center">
            <div className="text-6xl font-bold flex items-center gap-1">
                <span className="">{currentValue}</span>
                <span className="text-4xl text-blue-400">{unit}</span>
            </div>
            <div
                className="glass-effect flex justify-center px-1 gap-1 items-center text-nowrap">
                <span className="text-blue-400">{icon}</span>
                <span ref={labelRef} className="text-xs sm:text-lg">{label}</span>
            </div>
        </div>
    );
};

export default Stat;