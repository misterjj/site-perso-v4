import {ReactElement} from "react";
import {
    FaBootstrap,
    FaDocker,
    FaNpm,
    FaReact,
    FaSymfony,
    FaYarn,
    FaAws,
    FaGithub,
    FaConfluence,
    FaTicket,
    FaGitlab
} from "react-icons/fa6";
import {TbBrandOauth, TbBrandVite, TbSdk, TbHttpGet} from "react-icons/tb";
import {
    SiElasticsearch,
    SiGnubash,
    SiTailwindcss,
    SiTypescript,
    SiOpenapiinitiative,
    SiRabbitmq,
    SiPostman,
    SiRundeck, SiKibana
} from "react-icons/si";
import {DiDoctrine, DiRedis} from "react-icons/di";
import {LuCat} from "react-icons/lu";
import {MdHttp} from "react-icons/md";
import {GiMaskedSpider, GiBrickWall} from "react-icons/gi";
import { BiLogoUnity } from "react-icons/bi";



enum Direction {
    left,
    right
}

interface Technology {
    name: string,
    color: string,
    logo: ReactElement
}

interface TechnologiesLine {
    direction: Direction,
    technologies: Technology[]
}


const technologies: TechnologiesLine[] = [
    {
        direction: Direction.right,
        technologies: [
            {name: "Docker", color: "text-[#2492E7]", logo: <FaDocker/>},
            {name: "Symfony", color: "text-white", logo: <FaSymfony/>},
            {name: "Bash", color: "text-[#4BA423]", logo: <SiGnubash/>},
            {name: "Redis", color: "text-[#D7281F]", logo: <DiRedis size={25}/>},
            {name: "oAuth 2", color: "text-white", logo: <TbBrandOauth/>},
            {name: "Doctrine", color: "text-[#F67F3A]", logo: <DiDoctrine/>},
            {name: "Elasticsearch", color: "text-[#E8B91A]", logo: <SiElasticsearch/>},
            {name: "Cats", color: "text-[#DC2D2C]", logo: <LuCat/>},
        ]
    },
    {
        direction: Direction.left,
        technologies: [
            {name: "Yarn", color: "text-[#2B8AB5]", logo: <FaYarn/>},
            {name: "Bootstrap", color: "text-[#58407E]", logo: <FaBootstrap/>},
            {name: "Npm", color: "text-[#C4303C]", logo: <FaNpm/>},
            {name: "Tailwindcss", color: "text-[#3FA4A1]", logo: <SiTailwindcss/>},
            {name: "Typescript", color: "text-[#2F74C0]", logo: <SiTypescript/>},
            {name: "ViteJs", color: "text-[#F7A603]", logo: <TbBrandVite/>},
            {name: "React", color: "text-[#0CD1F7]", logo: <FaReact/>},
        ]
    },
    {
        direction: Direction.right,
        technologies: [
            {name: "SDK", color: "text-red-500", logo: <TbSdk size={25}/>},
            {name: "openAPI", color: "text-[#6BA43A]", logo: <SiOpenapiinitiative/>},
            {name: "Akka http", color: "text-[#0CD1F7]", logo: <MdHttp size={30}/>},
            {name: "REST", color: "text-emerald-500", logo: <TbHttpGet size={30}/>},
            {name: "RabbitMQ", color: "text-[#F66300]", logo: <SiRabbitmq/>},
            {name: "API platform", color: "text-[#64C8C8]", logo: <GiMaskedSpider/>},
            {name: "SOLID", color: "text-[#C13300]", logo: <GiBrickWall/>},
        ]
    },
    {
        direction: Direction.left,
        technologies: [
            {name: "Postman", color: "text-[#E66A3D]", logo: <SiPostman />},
            {name: "Git", color: "text-white", logo: <FaGithub />},
            {name: "Amazon Web Service", color: "text-[#F79500]", logo: <FaAws />},
            {name: "Unity", color: "text-white", logo: <BiLogoUnity/>},
            {name: "Confluence", color: "text-[#2580F7]", logo: <FaConfluence />},
            {name: "Youtrack", color: "text-[#F33FAD]", logo: <FaTicket />},
            {name: "Rundeck", color: "text-[#F11628]", logo: <SiRundeck/>},
            {name: "Kibana", color: "text-[#3EB8AA]", logo: <SiKibana />},
            {name: "Gitlab", color: "text-[#F46A25]", logo: <FaGitlab />},
        ]
    }
]

function OtherSkills() {
    const item = (item: Technology, keyPrefix: string = "") => {
        return (
            <>
                <div key={keyPrefix + item.name} className="text-nowrap glass-effect flex justify-center
                gap-2 items-center px-3 text-xl min-h-10 z-10">
                    <span className={item.color}>{item.logo}</span>
                    <span>{item.name}</span>
                </div>
            </>
        )
    }

    const line = (line: TechnologiesLine) => {
        const animationClass = line.direction === Direction.right
            ? "animate-slide-right"
            : "animate-slide-left";

        return (
            <>
                <div className="relative grow overflow-hidden" key={line.technologies.map(t => t.name).join()}>
                    <div className="absolute w-full border-b border-dashed border-gray-500 z-0 top-1/2"/>
                    <div className="flex h-full">
                        <div className={`flex gap-24 px-12 items-center h-full ${animationClass}`}>
                            {line.technologies.map(t => item(t))}
                        </div>
                        <div className={`flex gap-24 px-12 items-center h-full ${animationClass}`}>
                            {line.technologies.map(t => item(t, "second-"))}
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <div className="h-full flex flex-col py-4 gap-4">
                <div>
                    <span className="text-3xl font-bold px-4">Mais aussi ...</span>
                </div>
                <div className="grow relative overflow-hidden2">
                    <div className="h-full flex flex-col">
                        {technologies.map(line)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default OtherSkills