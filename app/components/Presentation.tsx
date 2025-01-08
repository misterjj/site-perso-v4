import picture from '../assets/picture.jpg'
import { TbMail } from "react-icons/tb";
import { FaGithub } from "react-icons/fa6";
import Image from "next/image";

function Presentation() {
    const circle = "p-5 border border-gray-500 inline-block border-dashed rounded-full"
    const link = "flex items-center justify-center w-16 h-16 glass-effect cursor-pointer hover:text-blue-400"
    return (
        <>
            <div className="h-full overflow-hidden flex flex-col ">
                <div className="text-center -translate-y-8 relative">
                    <div className={circle}>
                        <div className={circle}>
                            <div className={circle}>
                                <Image width={192} height={192} className="w-48 h-48 rounded-full" src={picture.src} alt="Jonathan jorand" unoptimized/>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-4 text-center w-full left-0 uppercase">
                        <div className="text-nowrap glass-effect px-3 text-xl leading-10 z-10 inline-block">
                            Jonathan jorand
                        </div>
                    </div>
                    <div className="absolute right-2 top-10 bg-blue-500 rounded-full py-0.5 px-2 flex gap-2 items-center">
                        <div className="w-2 h-2 bg-white rounded-full"/>
                        <div className="text-xs">Développeur web</div>
                    </div>
                </div>
                <div className="flex justify-center gap-4 -translate-y-4">
                    <a className={link} target="_blank" href="mailto:jonathan.jorand@gmail.com"><TbMail size={48} /></a>
                    <a className={link} target="_blank" href="https://github.com/misterjj"><FaGithub size={48} /></a>
                </div>
            </div>
        </>
    )
}

export default Presentation