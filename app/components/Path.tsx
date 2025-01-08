import {ReactElement, useState} from "react";

enum PathKey {
    IUT,
    MC2,
    PAGESIMMOWEB,
    ANKAMA
}

enum Position {
    top,
    bottom
}

interface Path {
    key: PathKey
    date: string,
    title: string,
    position: Position,
    subtitle: string,
    description: ReactElement
}

function Path() {
    const [active, setActive] = useState(PathKey.ANKAMA)

    const paths: Path[] = [
        {
            key: PathKey.MC2,
            date: "nov. 2010 - jan. 2011",
            title: "MC2",
            position: Position.bottom,
            subtitle: "Stage de fin d'étude",
            description: <>
                J&apos;ai réalisé un site internet en utilisant du PHP en POO, HTML, CSS, JavaScript.
            </>
        },
        {
            key: PathKey.IUT,
            date: "2011",
            title: "IUT A de Lille",
            position: Position.top,
            subtitle: "DUT en informatique",
            description: <>
                A côté d&apos;une formation générale, j&apos;ai appris les fondamentaux de la programmation que
                j&apos;ai approfondis en autodidacte.
            </>
        },
        {
            key: PathKey.PAGESIMMOWEB,
            date: "2011 - 2016",
            title: "Pagesimmoweb",
            position: Position.bottom,
            subtitle: "Développeur PHP",
            description: <>
                Je réalisais des sites dans le domaine de l&apos;immobilier (notaires, agences immobilières).
            </>
        },
        {
            key: PathKey.ANKAMA,
            date: "depuis 2016",
            title: "Ankama",
            position: Position.top,
            subtitle: "Ingénieur en développement WEB",
            description: <>
                Je suis en charge au sein du pôle de la DSI de concevoir, maintenir et faire évoluer les différents
                sites de l&apos;entreprise (<a className="border-b"
                                               href="https://www.dofus.com/" target="_blank">dofus</a>, <a
                className="border-b" href="https://www.wakfu.com/" target="_blank">wakfu</a>, <a
                className="border-b" href="https://www.waven-game.com/" target="_blank">waven</a>, ...). <br/>
                Nous devons garantir le bon fonctionnement et la sécurité des comptes, ainsi que des paiements.
                Lutter contre les bots, la fraude et tout comportement nuisible à l&apos;infrastructure web.<br/>
                Enfin je conseille et guide mes collègues en tant que team lead backend.
            </>
        }
    ]

    const line = () => <>
        <div className="grow border-b border-dashed border-gray-500"/>
    </>

    const item = (path: Path) => {
        const bgColor = path.key === active ? "bg-blue-400" : "bg-blue-100";

        let position = "bottom-full -translate-y-2"
        if (path.position === Position.bottom) {
            position = "top-full translate-y-2 flex-col-reverse"
        }

        return (
            <div className="flex grow items-center h-full" key={path.key}>
                {line()}
                <div>
                    <div className={`w-4 h-4 rounded-full ${bgColor} relative cursor-pointer`}
                         onClick={() => setActive(path.key)}>
                        <div className={`flex flex-col items-center absolute -translate-x-1/2 left-1/2 ${position}`}>
                            <div
                                className="glass-effect flex items-center px-3 gap-2 text-nowrap leading-5">
                                <div className={`w-2 h-2 rounded-full ${bgColor}`}/>
                                <div>{path.title}</div>
                            </div>
                            <div className="text-nowrap text-sm">{path.date}</div>
                            <div className="h-8 border-l border-gray-500"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


    const description = (path: Path) => {
        return (
            <div key={path.key}>
                {path.key === active && <div>
                    <div className="text-lg mb-4 font-bold relative">
                        {path.subtitle}
                        <div className="h-1 w-10 bg-blue-400"/>
                    </div>
                    <p className="text-sm">
                        {path.description}
                    </p>
                </div>
                }
            </div>
        )
    }

    return (
        <>
            <div className="flex flex-col h-full">
                <div className="min-h-52">
                    <div className="flex items-center h-full">
                        {paths.map(item)}
                        {line()}
                    </div>
                </div>
                <div className="grow relative px-4 pt-4">
                    {paths.map(description)}
                </div>
            </div>
        </>
    )
}

export default Path