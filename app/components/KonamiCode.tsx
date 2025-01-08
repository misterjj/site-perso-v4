import React, {useCallback, useEffect, useState} from 'react';

interface KonamiCodeProps {
    onKonamiCode: () => void;
}

const KonamiCode: React.FC<KonamiCodeProps> = ({onKonamiCode}) => {
    const [input, setInput] = useState<string[]>([]);


    const handleKeyDown = useCallback((event: KeyboardEvent) => {
        setInput((prevInput) => [...prevInput, event.key])
    }, [setInput]);


    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)
        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [handleKeyDown])

    useEffect(() => {
        const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
        if (input.length > konamiCode.length) {
            setInput(input.slice(input.length - konamiCode.length));
        }

        if (input.length === konamiCode.length && input.every((value, index) => value === konamiCode[index])) {
            onKonamiCode()
        }

    }, [input, onKonamiCode])

    const kdb = (key: string, index: number) => {
        return (
            <div key={index} className="w-10 h-10 text-nowrap bg-white/10 shadow-lg ring-1 ring-black/5
                rounded-xl border border-white/15 border-b-white/25 flex justify-center
                items-center px-3 text-xl backdrop-blur-sm">{key}</div>

        )
    }

    return (
        <>
            <div className="h-full flex items-center justify-center gap-2">
                {["▲", "▲", "▼", "▼", "◀︎", "▶︎", "◀︎", "▶︎", "B", "A"].map(kdb)}
            </div>
        </>
    )
}

export default KonamiCode