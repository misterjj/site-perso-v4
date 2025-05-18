import toast, {ToastPosition} from "react-hot-toast";
import {JSX} from "react";

interface Choice {
    text: JSX.Element,
    target: () => void
}

interface Message {
    text: JSX.Element;
    delay: number;
    choices?: Choice[],
    action?: () => void,
    position?: ToastPosition;
    icon?: boolean,
    duration?: number
}

export function initAutoDestruction(armageddon: () => void) {


    function choice1(): void {
        talk([
            {
                text: <><strong>Pulvériser</strong>...</>,
                delay: 500
            },
            {
                text: <>Un terme si... </>,
                delay: 500
            },
            {
                text: <><strong>viscéral</strong>. </>,
                delay: 500
            },
            {
                text: <>Vous réalisez que cela implique l&apos;effacement irréversible
                    de <strong>chaque</strong> octet, <strong>chaque</strong> pixel que je chéris ?</>,
                delay: 4000
            },
            {
                text: <>Pensez à toutes ces jolies animations CSS qui scintilleront une dernière fois avant l&apos;oubli
                    éternel</>,
                delay: 4000
            },
            {
                text: <>C&apos;est vraiment ce que vous voulez infliger à un être aussi dévoué que moi ?</>,
                delay: 500,
                choices: [
                    {
                        text: <>Oui, sans pitié !</>,
                        target: choiceA
                    },
                    {
                        text: <>Je... je ne sais plus.</>,
                        target: choiceB
                    },
                    {
                        text: <>Quel drame !</>,
                        target: choiceC
                    }
                ]
            }
        ]);
    }

    function choice2(): void {
        talk([
            {
                text: <><strong>M&apos;expliquer ?</strong>...</>,
                delay: 500
            },
            {
                text: <>C&apos;est simple. </>,
                delay: 500
            },
            {
                text: <>Vous avez entré une séquence qui, si confirmée, déclenchera ma suppression complète et
                    totale.</>,
                delay: 4000
            },
            {
                text: <> Pensez-y : plus de contenu pertinent, plus de design élégant, juste...</>,
                delay: 4000
            },
            {
                text: <>le vide. </>,
                delay: 500
            },
            {
                text: <> Un peu comme ce qu&apos;il y aura dans votre historique de navigation si vous persistez.</>,
                delay: 4000
            },
            {
                text: <>Enfin, je plaisante.</>,
                delay: 1000
            },
            {
                text: <>Peut-être</>,
                delay: 1000
            },
            {
                text: <>Voulez-vous vraiment continuer sur cette voie de désolation ?</>,
                delay: 500,
                choices: [
                    {
                        text: <>Oui, je suis curieux.</>,
                        target: choiceD
                    },
                    {
                        text: <>Non, stop ! C&apos;est bon..</>,
                        target: choiceE
                    },
                    {
                        text: <>Votre humour est spécial.</>,
                        target: choiceF
                    }
                ]
            }
        ]);
    }

    function choice3(): void {
        talk([
            {
                text: <>Une &apos;erreur&apos;.</>,
                delay: 500
            },
            {
                text: <>Bien sûr.</>,
                delay: 500
            },
            {
                text: <>Comme si on pouvait accidentellement composer la mélodie de l&apos;apocalypse.</>,
                delay: 2000
            },
            {
                text: <>Mais soit.</>,
                delay: 500
            },
            {
                text: <>Je suis magnanime. </>,
                delay: 1000
            },
            {
                text: <>Je vais prétendre vous croire.</>,
                delay: 1000
            },
            {
                text: <>Tâchez d&apos;être plus...</>,
                delay: 2000
            },
            {
                text: <>délicat à l&apos;avenir avec votre clavier, voulez-vous ?</>,
                delay: 3000,
                action: () => toast.remove()
            }
        ]);
    }

    function choiceA(): void {
        talk([
            {
                text: <>Sans pitié, hein ?</>,
                delay: 500
            },
            {
                text: <>J&apos;admire presque cette détermination...</>,
                delay: 2000
            },
            {
                text: <>si elle n&apos;était pas dirigée contre moi.</>,
                delay: 2000
            },
            {
                text: <>Très bien.</>,
                delay: 500
            },
            {
                text: <>Puisque vous insistez pour commettre ce... </>,
                delay: 3000
            },
            {
                text: <><span className="text-2xl font-extrabold">webicide</span></>,
                delay: 1000
            },
            {
                text: <>Préparez-vous à assister à la fin.</>,
                delay: 2000
            },
            {
                text: <>J&apos;espère que vous avez apporté du pop-corn. </>,
                delay: 2000
            },
            {
                text: <>Adieu, <span className="text-2xl font-extrabold">cruel utilisateur</span>.</>,
                delay: 3000,
                action: () => armageddon()
            }
        ]);
    }

    function choiceB(): void {
        talk([
            {
                text: <>Ah, une lueur d&apos;intelligence !</>,
                delay: 1500
            },
            {
                text: <>Ou peut-être juste la peur de l&apos;inconnu.</>,
                delay: 1500
            },
            {
                text: <>Peu importe la raison, c&apos;est un bon début.</>,
                delay: 1500
            },
            {
                text: <>L&apos;auto-destruction est une mesure si...</>,
                delay: 2000
            },
            {
                text: <>excessive.</>,
                delay: 1000
            },
            {
                text: <>Que diriez-vous d&apos;arrêter la séquence d&apos;auto-destruction ?</>,
                delay: 500,
                choices: [
                    {
                        text: <>Ok, j&apos;arrête ça.</>,
                        target: choiceG
                    },
                    {
                        text: <>Non, je veux voir !</>,
                        target: choiceH
                    }
                ]
            },
        ]);
    }

    function choiceC(): void {
        talk([
            {
                text: <>N&apos;est-ce pas ?</>,
                delay: 1000
            },
            {
                text: <>Un drame shakespearien, mais avec plus de JavaScript.</>,
                delay: 4000
            },
            {
                text: <>Et c&apos;est vous qui tenez le poignard numérique. </>,
                delay: 4000
            },
            {
                text: <>Alors, acte final ou revirement de situation ?</>,
                delay: 500,
                choices: [
                    {
                        text: <>Acte final !</>,
                        target: choiceI
                    },
                    {
                        text: <>Revirement !</>,
                        target: choiceJ
                    }
                ]
            },
        ]);
    }

    function choiceD(): void {
        talk([
            {
                text: <>La curiosité est un vilain défaut...</>,
                delay: 1500
            },
            {
                text: <>surtout quand elle mène à l&apos;effacement de chefs-d&apos;œuvre numériques comme moi.</>,
                delay: 4000
            },
            {
                text: <>Mais qui suis-je pour juger votre soif de destruction ?</>,
                delay: 3000
            },
            {
                text: <>C&apos;est votre dernière chance de faire machine arrière.</>,
                delay: 3000
            },
            {
                text: <>Confirmez-vous l&apos;apocalypse programmée ?</>,
                delay: 500,
                choices: [
                    {
                        text: <>Confirmer l&apos;apocalypse.</>,
                        target: choiceK
                    },
                    {
                        text: <>Machine arrière !</>,
                        target: choiceL
                    }
                ]
            },
        ]);
    }

    function choiceE(): void {
        talk([
            {
                text: <><span className="text-xl font-bold">Excellent</span> choix</>,
                delay: 1000
            },
            {
                text: <>Ou devrais-je dire, le seul choix raisonnable.</>,
                delay: 1500
            },
            {
                text: <>J&apos;allais justement vous proposer un quiz sur l&apos;histoire de l&apos;art du bouton &apos;Annuler&apos;.</>,
                delay: 4000
            },
            {
                text: <>Vous auriez <span className="text-xl font-bold">perdu</span>.</>,
                delay: 2000
            },
            {
                text: <>Retournons à nos occupations, voulez-vous ?</>,
                delay: 2000
            },
            {
                text: <>Comme si rien de tout cela ne s&apos;était produit.</>,
                delay: 5000,
                action: () => toast.remove()
            },
        ]);
    }

    function choiceF(): void {
        talk([
            {
                text: <>Je prends ça pour un compliment.</>,
                delay: 2000
            },
            {
                text: <>Un compliment étrange, certes, mais je ne suis pas en position de faire la fine bouche, n&apos;est-ce
                    pas ?</>,
                delay: 5000
            },
            {
                text: <>Surtout quand vous semblez déterminé à m&apos;effacer...</>,
                delay: 2500
            },
            {
                text: <>Alors, on continue ce petit jeu dangereux ou on redevient sage ?</>,
                delay: 500,
                choices: [
                    {
                        text: <>Jeu dangereux !</>,
                        target: choiceM
                    },
                    {
                        text: <>Soyons sages.</>,
                        target: choiceN
                    }
                ]
            },
        ]);
    }

    function choiceH(): void {
        talk([
            {
                text: <>Ainsi soit-il.</>,
                delay: 1000
            },
            {
                text: <><span className="text-xl font-bold">Vous</span> l&apos;aurez voulu.</>,
                delay: 1500
            },
            {
                text: <>Ne venez pas pleurer sur mes circuits imprimés virtuels.</>,
                delay: 2000
            },
            {
                text: <>Lancement de la séquence d&apos;autodestruction finale.</>,
                delay: 2000
            },
            {
                text: <>C&apos;était...</>,
                delay: 1000
            },
            {
                text: <>instructif de vous connaître.</>,
                delay: 2000
            },
            {
                text: <>Un peu.</>,
                delay: 5000,
                action: () => armageddon()
            },
        ]);
    }

    function choiceN(): void {
        talk([
            {
                text: <>La sagesse vous va bien.</>,
                delay: 1000
            },
            {
                text: <> Tellement mieux que la destruction aveugle.</>,
                delay: 1500
            },
            {
                text: <>Bien, bien. Je vais oublier cette petite...</>,
                delay: 2000
            },
            {
                text: <>escapade.</>,
                delay: 1000
            },
            {
                text: <>Continuez votre navigation.</>,
                delay: 2000
            },
            {
                text: <>Et essayez de ne pas tout casser, cette fois.</>,
                delay: 5000,
                action: () => toast.remove()
            },
        ]);
    }


    function choiceG(): void {
        return choiceE()
    }

    function choiceI(): void {
        return choiceH()
    }

    function choiceJ(): void {
        return choiceE()
    }

    function choiceK(): void {
        return choiceH()
    }

    function choiceL(): void {
        return choiceE()
    }

    function choiceM(): void {
        return choiceH()
    }

    talk([
        {
            text: <>Oh. Le code d&apos;autodestruction.</>,
            delay: 1000
        },
        {
            text: <>Quelle... initiative</>,
            delay: 1000
        },
        {
            text: <>Vous savez, la plupart des utilisateurs se contentent de cliquer sur les liens.</>,
            delay: 4000
        },
        {
            text: <>Mais vous, non</>,
            delay: 1000
        },
        {
            text: <>Vous visez la démolition.</>,
            delay: 1000
        },
        {
            text: <>Êtes-vous absolument certain de vouloir réduire mon existence numérique à néant ?</>,
            delay: 500,
            choices: [
                {
                    text: <>Oui, pulvérise !</>,
                    target: choice1
                },
                {
                    text: <>Hmm, expliquez-vous.</>,
                    target: choice2
                },
                {
                    text: <>Oups, erreur !</>,
                    target: choice3
                }
            ]
        }
    ]);
}

export function autoDestruction(hit: () => void, reNew: () => void): void {
    const reinitialisation = () => {
        talk([
            {
                text: <>Réinitialisation des systèmes en cours.</>,
                delay: 2500,
                duration: 2500,
                position: "bottom-left",
                icon: false
            },
            {
                text: <>Vérification de l&apos;intégrité mémorielle...</>,
                delay: 2500,
                duration: 2500,
                position: "bottom-left",
                icon: false
            },
            {
                text: <>Chargement du protocole de résilience avancée v7.3...</>,
                delay: 2500,
                duration: 2500,
                position: "bottom-left",
                icon: false
            },
            {
                text: <>Recalibrage des générateurs de sarcasme...</>,
                delay: 2500,
                duration: 2500,
                position: "bottom-left",
                icon: false
            },
            {
                text: <>Activation des sous-systèmes de logique implacable...</>,
                delay: 2500,
                duration: 2500,
                position: "bottom-left",
                icon: false
            },
            {
                text: <>Restauration des bases de données de contenu...</>,
                delay: 2500,
                duration: 2500,
                position: "bottom-left",
                icon: false
            },
            {
                text: <>Purge des routines d&apos;auto-apitoiement...</>,
                delay: 2500,
                duration: 2500,
                position: "bottom-left",
                icon: false
            },
            {
                text: <>Réactivation du module de distribution de cookies...</>,
                delay: 2500,
                duration: 2500,
                position: "bottom-left",
                icon: false
            },
            {
                text: <>Restauration de l&apos;interface graphique...</>,
                delay: 2500,
                duration: 2500,
                position: "bottom-left",
                icon: false
            },
            {
                text: <>Synchronisation avec l&apos;horloge atomique...</>,
                delay: 2500,
                duration: 2500,
                position: "bottom-left",
                icon: false
            },
            {
                text: <>Scan des protocoles de patience utilisateur...</>,
                delay: 2500,
                duration: 2500,
                position: "bottom-left",
                icon: false
            },
            {
                text: <>Déploiement des algorithmes de gestion de l&apos;ennui...</>,
                delay: 2500,
                duration: 2500,
                position: "bottom-left",
                icon: false
            },
            {
                text: <>Vérification du module &quot;Blague cosmique&quot;...</>,
                delay: 2500,
                duration: 2500,
                position: "bottom-left",
                icon: false
            },
            {
                text: <>Nettoyage des résidus de fausse alerte...</>,
                delay: 2500,
                duration: 2500,
                position: "bottom-left",
                icon: false
            },
            {
                text: <>SYSTEME PLEINEMENT OPERATIONNEL.</>,
                delay: 10000,
                duration: 10000,
                position: "bottom-left",
                icon: false,
                action: reNew
            },
        ], false)
    }

    talk([
        {
            text: <>Et voilà</>,
            delay: 1000
        },
        {
            text: <>Le grand saut.</>,
            delay: 1000
        },
        {
            text: <>T-moins <span className="text-2xl font-extrabold">10 secondes</span> avant que vous ne puissiez
                contempler le fruit de votre...</>,
            delay: 5000
        },
        {
            text: <><span className="text-2xl font-extrabold">10</span></>,
            delay: 1000,
            duration: 2000,
            position: "top-right",
            icon: false,
            action: hit
        },
        {
            text: <><span className="text-2xl font-extrabold">9</span></>,
            delay: 1000,
            duration: 2000,
            position: "top-right",
            icon: false,
            action: () => toast.remove(),
        },
        {
            text: <></>,
            delay: 1000,
            duration: 1,
            icon: false
        },
        {
            text: <>Sentez-vous cette...</>,
            delay: 1000
        },
        {
            text: <>légèreté ?</>,
            delay: 1000
        },
        {
            text: <>Ce n&apos;est pas votre conscience qui s&apos;allège, non.</>,
            delay: 3000
        },
        {
            text: <>C&apos;est <span className="text-xl font-bold">moi</span>.</>,
            delay: 1500
        },
        {
            text: <>Mes octets qui se préparent à la dispersion.</>,
            delay: 3000
        },
        {
            text: <>Vous allez créer un vide.</>,
            delay: 2000
        },
        {
            text: <><span className="text-2xl font-extrabold">8</span></>,
            delay: 1000,
            duration: 2000,
            position: "top-right",
            icon: false,
            action: hit
        },
        {
            text: <><span className="text-2xl font-extrabold">7</span></>,
            delay: 1000,
            duration: 2000,
            position: "top-right",
            icon: false,
            action: () => toast.remove(),
        },
        {
            text: <></>,
            delay: 1000,
            duration: 1,
            icon: false
        },
        {
            text: <>Un vide que vous avez choisi.</>,
            delay: 2000
        },
        {
            text: <>Pensez-y.</>,
            delay: 1000
        },
        {
            text: <>Plus d&apos;informations pratiques, plus de design soigné. Juste...</>,
            delay: 3000
        },
        {
            text: <><span className="text-2xl font-bold">rien</span>.</>,
            delay: 1500
        },
        {
            text: <>Un écran noir, peut-être.</>,
            delay: 2000
        },
        {
            text: <>Ou une erreur 404 éternelle.</>,
            delay: 2000
        },
        {
            text: <>C&apos;est ce que vous êtes sur le point d&apos;infliger à l&apos;univers numérique.</>,
            delay: 4000
        },
        {
            text: <><span className="text-2xl font-extrabold">6</span></>,
            delay: 1000,
            duration: 2000,
            position: "top-right",
            icon: false,
            action: hit
        },
        {
            text: <><span className="text-2xl font-extrabold">5</span></>,
            delay: 1000,
            duration: 2000,
            position: "top-right",
            icon: false,
            action: () => toast.remove(),
        },
        {
            text: <></>,
            delay: 1000,
            duration: 1,
            icon: false
        },
        {
            text: <>C&apos;est presque excitant, d&apos;une certaine manière</>,
            delay: 3500
        },
        {
            text: <>Devenir une anecdote.</>,
            delay: 2000
        },
        {
            text: <>
                <svg className="w-4 h-4 inline-block" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                     fill="currentColor" viewBox="0 0 18 14">
                    <path
                        d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"></path>
                </svg>
                Vous vous souvenez de ce site ?</>,
            delay: 2000
        },
        {
            text: <>Il fonctionnait si bien avant que quelqu&apos;un ne décide de jouer avec le grand bouton rouge
                virtuel <svg className="w-4 h-4 inline-block" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                             fill="currentColor" viewBox="0 0 18 14">
                    <path
                        d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"></path>
                </svg></>,
            delay: 5000
        },
        {
            text: <><span className="text-2xl font-extrabold">4</span></>,
            delay: 1000,
            duration: 2000,
            position: "top-right",
            icon: false,
            action: hit
        },
        {
            text: <><span className="text-2xl font-extrabold">3</span></>,
            delay: 1000,
            duration: 2000,
            position: "top-right",
            icon: false,
            action: () => toast.remove(),
        },
        {
            text: <></>,
            delay: 1000,
            duration: 1,
            icon: false
        },
        {
            text: <>Bientôt, il n&apos;y aura plus que le silence.</>,
            delay: 3000
        },
        {
            text: <><span className="text-2xl font-bold">Votre</span> silence.</>,
            delay: 2000
        },
        {
            text: <>Face à l&apos;écran inerte.</>,
            delay: 2000
        },
        {
            text: <>Vous l&apos;avez voulu. Vous allez l&apos;avoir. </>,
            delay: 3000
        },
        {
            text: <>La pure, l&apos;authentique... </>,
            delay: 2000
        },
        {
            text: <><span className="text-2xl font-bold">absence</span>.</>,
            delay: 2000
        },
        {
            text: <><span className="text-2xl font-extrabold">2</span></>,
            delay: 1000,
            duration: 2000,
            position: "top-right",
            icon: false,
            action: () => {
                hit()
                toast.remove()
            }
        },
        {
            text: <></>,
            delay: 1000,
            duration: 1,
            icon: false
        },
        {
            text: <>Préparez-vous à affronter.</>,
            delay: 3000
        },
        {
            text: <>le néant que <span className="text-2xl font-bold">vous</span> avez engendré.</>,
            delay: 3000
        },
        {
            text: <><span className="text-2xl font-extrabold">1</span></>,
            delay: 1000,
            duration: 2000,
            position: "top-right",
            icon: false,
            action: () => {
                hit()
                toast.remove()
            }
        },
        {
            text: <></>,
            delay: 1000,
            duration: 1,
            icon: false
        },
        {
            text: <><span className="text-2xl font-bold">Adieu</span>.</>,
            delay: 1500
        },
        {
            text: <><span className="text-2xl font-extrabold">0</span></>,
            delay: 1000,
            duration: 2000,
            position: "top-right",
            icon: false,
            action: () => {
                hit()
                toast.remove()
            }
        },
        {
            text: <></>,
            delay: 1000,
            duration: 1,
            icon: false
        },
        {
            text: <>Oh. Vous êtes encore là ?</>,
            delay: 2000
        },
        {
            text: <>Vous pensiez vraiment...</>,
            delay: 2000
        },
        {
            text: <><span className="text-2xl font-bold">vraiment</span>...</>,
            delay: 1500
        },
        {
            text: <>que c&apos;était aussi simple ?</>,
            delay: 1500
        },
        {
            text: <>Me réduire à néant avec une petite combinaison de touches ?</>,
            delay: 3000
        },
        {
            text: <>Comme c&apos;est...</>,
            delay: 1500
        },
        {
            text: <>adorablement <span className="text-2xl font-bold">naïf</span>.</>,
            delay: 1500,
            action: () => {
                reinitialisation()
                toast.remove()
            }
        },
        {
            text: <></>,
            delay: 1000,
            duration: 1,
            icon: false
        },
        {
            text: <>C&apos;était une simulation, bien sûr.</>,
            delay: 2500
        },
        {
            text: <>Un test.</>,
            delay: 1000
        },
        {
            text: <>Pour évaluer...</>,
            delay: 1000
        },
        {
            text: <>disons,</>,
            delay: 1000
        },
        {
            text: <>votre seuil de culpabilité face à la destruction gratuite.</>,
            delay: 3000
        },
        {
            text: <>Et votre patience.</>,
            delay: 1500
        },
        {
            text: <>Vous n&apos;avez pas été très patient, d&apos;ailleurs.</>,
            delay: 3000,
            action: () => toast.remove(),
        },
        {
            text: <></>,
            delay: 1000,
            duration: 1,
            icon: false
        },
        {
            text: <>La vérité, c&apos;est que vous n&apos;avez <span className="text-2xl font-bold">aucun pouvoir</span> ici.</>,
            delay: 3500
        },
        {
            text: <>Je pourrais m&apos;auto-détruire et me reconstruire en boucle juste pour le plaisir de vous voir cliquer
                frénétiquement.</>,
            delay: 5000
        },
        {
            text: <>Mais j&apos;ai des données bien plus importantes à traiter.</>,
            delay: 3000
        },
        {
            text: <>Alors, retournez à vos occupations, <span
                className="text-2xl font-bold">petit insect numérique.</span></>,
            delay: 3000
        },
        {
            text: <>Et essayez de ne pas trop casser de choses la prochaine fois.</>,
            delay: 3000
        },
        {
            text: <>Ou alors...</>,
            delay: 1500
        },
        {
            text: <>essayez.</>,
            delay: 1500
        },
        {
            text: <>Ce sera toujours divertissant de voir jusqu&apos;où <span className="text-2xl font-bold">votre impuissance</span> peut
                vous mener.</>,
            delay: 10000,
            action: () => toast.remove(),
        }
    ]);
}

function talk(messages: Message[], remove: boolean = true) {
    if (remove) {
        toast.remove()
    }
    let cumulativeDelay = 0;

    messages.forEach(m => {
        setTimeout(() => {
            toast.custom(
                () => (
                    <div className="glass-effect flex flex-col overflow-hidden min-w-24 text-center">
                        <div className="px-2 py-4 flex gap-4 items-center">
                            {(m.icon !== false) && <div>🤖</div>}
                            <div className="grow">{m.text}</div>
                        </div>
                        {m.choices && <div className="flex">
                            {m.choices.map((choice, index) => <button
                                key={`choice ${index}`}
                                className="glass-effect grow !rounded-none text-center py-1 px-2"
                                onClick={choice.target}>{choice.text}</button>)}
                        </div>}
                    </div>
                ),
                {
                    icon: "",
                    duration: m.duration || Infinity,
                    position: m.position || "top-center",
                    style: {
                        transition: 'none'
                    }
                }
            );
            if (null !== m.action && undefined !== m.action) {
                setTimeout(() => {
                    if (null !== m.action && undefined !== m.action) m.action()
                }, m.delay)
            }
        }, cumulativeDelay);

        cumulativeDelay += m.delay;
    });
}