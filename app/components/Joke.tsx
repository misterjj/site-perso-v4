const jokes = [
    "Un geek azerty en vaut deux !",
    "L&apos;amour est dans le <pre>",
    "Quand je suis content je commit.",
    "Pour être à jour il faut se mettre à l&apos;apache.",
    "C&apos;est quoi le plat préféré d&apos;un développeur ? Le code-au-vin.",
    "Pourquoi les programmeurs préfèrent-ils le mode sombre ? Parce que la lumière attire les bugs.",
    "Un dev web ne crie pas, il URL",
    "Quels sont les premiers mots d&apos;un dev junior ? Hello world !",
    "Il y a 10 sortes de gens dans le monde – ceux qui comprennent le binaire et les autres",
    "Les deux choses les plus compliquées dans le code, ce sont le nommage des variables, la gestion du cache, et les problèmes de Stack Overflow.",
    "Un bug, c&apos;est comme un fantôme... il apparaît quand on ne l&apos;attend pas.",
    "Le code, c&apos;est comme un puzzle... sauf qu&apos;on a pas le modèle.",
    "Le secret d&apos;un bon développeur ? C&apos;est de savoir poser la bonne question... à Google.",
    "La vie d&apos;un développeur : coder, débugger, recommencer."
];

function Joke() {
    return (
        <>
            <div className="h-full w-full flex items-center justify-center p-4">
                <span className='text-3xl text-center'>{jokes[Math.floor(Math.random() * jokes.length)]}</span>
            </div>
        </>
    )
}

export default Joke