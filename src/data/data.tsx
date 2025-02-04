import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import banqueImage from '../images/banque.png';
import blagnacImage from '../images/blagnac.jpg';
import cricqImage from '../images/cricq.jpg';
import heroImage from '../images/header-background.webp';
import esclaveImage1 from '../images/portfolio/esclave.png';
import flopImage from '../images/portfolio/flop.png';
import profilepic from '../images/profilepic.jpg';
import prometheeImage from '../images/promethee.jpg';
import agileimage from '../images/skills/agile.jpg';
import cimage from '../images/skills/c.png';
import communicationimage from '../images/skills/communication.jpg';
import csharpimage from '../images/skills/csharp.webp';
import cssimage from '../images/skills/css.png';
import englishflag from '../images/skills/english.png';
import franceflag from '../images/skills/france.svg';
import gitimage from '../images/skills/git.png';
import htmlimage from '../images/skills/html.png';
import javaimage from '../images/skills/java.png';
import javascriptimage from '../images/skills/javascript.png';
import phpimage from '../images/skills/php.png';
import presentationimage from '../images/skills/presentation.png';
import pythonimage from '../images/skills/python.webp';
import reactimage from '../images/skills/react.png';
import sqlimage from '../images/skills/sql.png';
import teamimage from '../images/skills/team.jpg';
import vuejsimage from '../images/skills/vuejs.png';
import webImage from '../images/web.png'
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'Profil',
  Contact: 'contact',
  Portfolio: 'Projets',
  Resume: 'Compétences et Expériences',
  Stats: 'stats',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Julien Bernard.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Je m'appelle Julien bernard{' '}
        <strong className="text-stone-100">étudiant en 3ème année de BUT Informatique</strong>, actuellement en
        formation alternance
        <strong className="text-stone-100"> chez Prométhée Earth Intelligence.</strong>
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        A travers ce site, je vais vous présenter mon portfolio.
        A travers ce site, je vais vous présenter mon portfolio.
      </p>
    </>
  ),
  actions: [
    {
      href: '/Julien_BERNARD.pdf',
      text: 'CV',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Je suis étudiant en 3ème année d'informatique, en alternance pour terminer mon Bachelor, 
  je souhaite continuer mes études jusqu'au Bac +5 dans un master ou une école privé.`,
  aboutItems: [
    {label: 'Ville', text: 'Toulouse', Icon: MapIcon},
    {label: 'Age', text: '21', Icon: CalendarIcon},
    {label: 'Nationalité', text: 'Français', Icon: FlagIcon},
    {label: "Centres d'intêrets", text: 'Basketball, Automobiles, Culture Japonaise, cinéma', Icon: SparklesIcon},
    {label: 'Etudes', text: 'IUT de Blagnac', Icon: AcademicCapIcon},
    {label: 'Alternance', text: 'Prométhée Earth Intelligence', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Langues',
    skills: [
      {
        name: 'English B2',
        image: englishflag,
      },
      {
        name: 'Français',
        image: franceflag,
      },
    ],
  },
  {
    name: 'Soft skills',
    skills: [
      {
        name: 'Méthodes agiles',
        image: agileimage,
      },
      {
        name: 'Travail en Equipe',
        image: teamimage  ,
      },
      {
        name: 'Communication',
        image: communicationimage,
      },
      {
        name: 'Présentation de projet',
        image: presentationimage,
      },
    ],
  },
  {
    name: 'Hard Skills',
    skills: [
      {
        name: 'Java',
        image: javaimage,
      },
      {
        name: 'SQL',
        image: sqlimage,
      },
      {
        name: 'VueJS',
        image: vuejsimage,
      },
      {
        name: 'Javascript',
        image: javascriptimage,
      },
      {
        name: 'C',
        image: cimage,
      },
      {
        name: 'C#',
        image: csharpimage,
      },
      {
        name: 'PHP',
        image: phpimage,
      },
      {
        name: 'HTML',
        image: htmlimage,
      },
      {
        name: 'CSS',
        image: cssimage,
      },
      {
        name: 'Python',
        image: pythonimage,
      },
      {
        name: 'React',
        image: reactimage,
      },
      {
        name: 'Git',
        image: gitimage,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Développement d\'un site web.',
    description: 'Site de récits d\'esclaves de l\'université Jean Jaurès.\n Le langage de programmation était PHP.',
    url: 'https://slave-narratives.univ-tlse2.fr/map',
    image: esclaveImage1,
    technologies: [phpimage, htmlimage, cssimage, javascriptimage]
  },
  {
    title: 'Développement d\'une application bancaire',
    description: 'Ce projet en équipe de 4 consistait à créer une application pour une entreprise fictive.\n Le langage était en JavaFX.',
    url: 'https://reactresume.com',
    image: banqueImage,
    technologies: [javaimage]
  },
  {
    title: 'Ajout de fonctionnalité à l\'emploie du temps de l\'université',
    description: 'Ce projet à 3 avait pour but d\'améliorer l\'EDT en accomplissant une tâche complexe dans un temps restreint.\n Le langage était VueJS.',
    url: '',
    image: flopImage,
    technologies: [vuejsimage, javascriptimage]
  },
  {
    title: 'Développement d\'un site de commerce',
    description: 'Ce projet à 4 servait de premier grand projet en équipe avec plusieurs étapes de processus de créations d\'un site web.\n Les langages étaient SQL, PHP et Javascript.',
    image: webImage,
    technologies: [phpimage, htmlimage, cssimage, javascriptimage, sqlimage],
    url: ''
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2022-2025',
    location: 'IUT de Blagnac (31)',
    title: 'BUT Informatique',
    image: blagnacImage,
    link: 'https://www.iut-blagnac.fr/fr/',
    content: (
      <p>
        Bachelor Universitaire de Technologie Informatique, Parcours réalisation d'applications : conception,
        développement, validation
      </p>
    ),
  },
  {
    date: '2021-2022',
    location: 'IUT de Blagnac (31)',
    title: 'BUT Réseaux & Télécommunications',
    image: blagnacImage,
    link: 'https://www.iut-blagnac.fr/fr/',
    content: (
      <p>
        Bachelor Universitaire de Technologie réseaux & Télécommunications. <br></br>Réorientation après une année
        réalisée.
      </p>
    ),
  },
  {
    date: '2020-2021',
    location: 'Lycée Saint-Cricq (64)',
    title: 'Bac Technologique STI2D',
    image: cricqImage,
    link: 'https://www.lycee-saint-cricq.org',
    content: <p>Bac Technologique obtenu.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Août 2024 - Juin 2025',
    location: 'Prométhée Earth Intelligence',
    title: 'Alternance - Développeur Full-Stack',
    image: prometheeImage,
    link: 'https://www.promethee.earth/',
    content: (
      <p>Rénovation d'une application Web de traitement de donnée sous un autre langage de programmation (VueJS).</p>
    ),
  },
  {
    date: 'Février 2024 - Avril 2024',
    location: 'Prométhée Earth Intelligence',
    title: "Stage - Développement d'une application de gestion de base de données et de version de système",
    image: prometheeImage,
    link: 'https://www.promethee.earth/',
    content: (
      <p>
        J'ai réalisé une application web dans le but de gérer des bases de données existantes, faire des sauvegardes,
        restituer des données et être capable de modifier les versions du système d'applications.
      </p>
    ),
  },
];

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Contactez-moi.',
  description: "Voici tout mes réseaux et mes contact, vous pouvez m'envoyer un mail afin de me poser des questions.",
  items: [
    {
      type: ContactType.Email,
      text: 'julien85bernard85@gmail.com',
      href: 'mailto:julien85bernard85@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Toulouse',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.LinkedIn,
      text: 'Linkedin',
      href: 'https://www.linkedin.com/in/julien-bernard-955993241/',
    },
    {
      type: ContactType.Github,
      text: 'julienbernard85',
      href: 'https://github.com/julienbernard85',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/julienbernard85'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/julien-bernard-955993241/'},
];
