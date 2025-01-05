import { useState, useEffect } from 'react';
import circuicui from '../assets/card/circuicui.png';
import raquetteur from '../assets/card/raquetteur.png';
import pixelStorm from '../assets/card/pixelStorm.png';
import rtfm from '../assets/card/rtfm.png';
import rollit from '../assets/card/rollit.png';

const images = [circuicui, raquetteur, pixelStorm, rtfm, rollit];

function Hobbies() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // 5 secondes

        return () => clearInterval(intervalId); // Nettoyage de l'intervalle
    }, []);

    const next = images[(currentIndex + 1) % images.length];
    const next2 = images[(currentIndex + 2) % images.length];
    const prev = images[(currentIndex - 1 + images.length) % images.length];
    const prev2 = images[(currentIndex - 2 + images.length) % images.length];

    const img = (image: string, key: number) => {
        let style = "left-1/2 scale-100 -translate-x-1/2 z-20 blur-0"

        console.log(image, prev2, image === prev2)

        if (image === next) {
            style = "left-3/4 scale-75 -translate-x-1/2 z-10 blur-[2px]"
        } else if (image === prev) {
            console.log("ici2")
            style = "left-1/4 scale-75 -translate-x-1/2 z-10 blur-[2px]"
        } else if (image === prev2) {
            style = "left-0 scale-50 translate-x-0 z-0 blur-sm"
        } else if (image === next2) {
            style = "left-full scale-50 -translate-x-full z-0  blur-sm"
        }

        return (
            <>
                <img key={key} src={image} alt="" className={`absolute top-1/2 -translate-y-1/2 h-[90%] transition-all ${style}`}/>
            </>
        )
    }

    return (
        <div className="w-full h-full overflow-hidden">
            {images.map((image, i) => img(image, i))}
        </div>
    );
}

export default Hobbies;