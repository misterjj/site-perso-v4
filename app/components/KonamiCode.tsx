"use client"
import React, { useCallback, useEffect, useState, useMemo } from 'react';
import { initAutoDestruction } from "./GLaDOS";

interface KonamiCodeProps {
    onKonamiCode: () => void;
}

const KonamiCode: React.FC<KonamiCodeProps> = ({ onKonamiCode }) => {
    const [input, setInput] = useState<string[]>([]);
    const [isCorrectSequence, setIsCorrectSequence] = useState(true);

    const konamiCode = useMemo(() =>
            ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'],
        []
    );

    const konamiDisplayCode = useMemo(() =>
            ["▲", "▲", "▼", "▼", "◀︎", "▶︎", "◀︎", "▶︎", "B", "A"],
        []
    );

    const handleKeyDown = useCallback((event: KeyboardEvent) => {
        const newKey = event.key;
        setInput((prevInput) => {
            const newInput = [...prevInput, newKey];

            const currentIndex = prevInput.length;
            if (currentIndex < konamiCode.length && newKey !== konamiCode[currentIndex]) {
                setIsCorrectSequence(false);
                setTimeout(() => {
                    setInput([]);
                    setIsCorrectSequence(true);
                }, 800);
                return newInput;
            }

            setIsCorrectSequence(true);
            return newInput;
        });
    }, [konamiCode]);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown]);

    useEffect(() => {
        if (input.length > konamiCode.length) {
            setInput(input.slice(input.length - konamiCode.length));
        }

        if (input.length === konamiCode.length && input.every((value, index) => value === konamiCode[index])) {
            setTimeout(() => setInput([]), 2000);
            initAutoDestruction(onKonamiCode);
        }
    }, [input, konamiCode, onKonamiCode]);

    const renderKey = (key: string, index: number) => {
        const isActive = index < input.length && isCorrectSequence;
        const isError = !isCorrectSequence;

        return (
            <div
                key={index}
                className={`w-10 h-10 text-nowrap shadow-lg ring-1 ring-black/5
                    rounded-xl border border-white/15 border-b-white/25 flex justify-center
                    items-center px-3 text-xl backdrop-blur-sm transition-all duration-300
                    ${isActive
                    ? "bg-green-500/40 text-white scale-110"
                    : isError
                        ? "bg-red-500/40 text-white"
                        : "bg-white/10"
                }`}
            >
                {key}
            </div>
        );
    };

    return (
        <>
            <div className="h-full flex flex-col gap-2">
                <div className="grow w-full flex items-center justify-center gap-2">
                    {konamiDisplayCode.map(renderKey)}
                </div>
                <div className="px-4 pb-4 text-right">
                    <span className="text-3xl font-bold">Code d&apos;auto-destruction</span>
                </div>
            </div>
        </>
    );
};

export default KonamiCode;