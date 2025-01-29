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
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import englishflag from '../images/skills/english.png';
import franceflag from '../images/skills/france.svg';
import javaimage from '../images/skills/java.png';
import sqlimage from '../images/skills/sql.png';
import vuejsimage from '../images/skills/vuejs.png';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
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
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
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
        Je m'appelle Julien bernard <strong className="text-stone-100">étudiant en 3ème année de BUT Informatique</strong>, actuellement en formation alternance  
        <strong className="text-stone-100">chez Prométhée Earth Intelligence.</strong>
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        A travers ce site, je vais vous présenter mon portfolio
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
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
    {label: 'Centres d\'intêrets', text: 'Basketball, Automobiles, Culture Japonaise, cinéma', Icon: SparklesIcon},
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
      }
    ],
  },
  {
    name: 'Hard Skills',
    skills: [
      {
        name: 'Java',
        image: javaimage,
        text: 'Java',
      },
      {
        name: 'SQL',
        image: sqlimage,
        text: 'Base de données',
      },
      {
        name: 'VueJS',
        image: vuejsimage,
        text: 'VueJS',
      },
      {
        name: 'Java',
        image: javaimage,
        text: 'Java',
      },
      {
        name: 'SQL',
        image: sqlimage,
        text: 'Base de données',
      },
      {
        name: 'VueJS',
        image: vuejsimage,
        text: 'VueJS',
      },
      {
        name: 'Java',
        image: javaimage,
        text: 'Java',
      },
      {
        name: 'SQL',
        image: sqlimage,
        text: 'Base de données',
      },
      {
        name: 'VueJS',
        image: vuejsimage,
        text: 'VueJS',
      },
    ],
  },
  // {
  //   name: 'Backend development',
  //   skills: [
  //     {
  //       name: 'Node.js',
  //       level: 8,
  //     },
  //     {
  //       name: 'S',
  //       level: 5,
  //     },
  //     {
  //       name: 'Golang',
  //       level: 4,
  //     },
  //   ],
  // },
  // {
  //   name: 'Mobile development',
  //   skills: [
  //     {
  //       name: 'React Native',
  //       level: 9,
  //     },
  //     {
  //       name: 'Flutter',
  //       level: 4,
  //     },
  //     {
  //       name: 'Swift',
  //       level: 3,
  //     },
  //   ],
  // },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
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
    content: <p>Bachelor Universitaire de Technologie Informatique, Parcours réalisation d'applications :
    conception, développement, validation</p>,
  },
  {
    date: '2021-2022',
    location: 'IUT de Blagnac (31)',
    title: 'BUT RT',
    content: <p>Bachelor Universitaire de Technologie réseaux & Télécommunications. <br></br>Réorientation après une année réalisée</p>,
  },
  {
    date: '2020-2021',
    location: 'Lycée Saint-Cricq (64)',
    title: 'Bac Pro STI2D',
    content: <p>Bac Pro.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Août 2024 - Juin 2025',
    location: 'Prométhée Earth Intelligence',
    title: 'Développeur Full-Stack',
    content: (
      <p>
        Rénovation d'une application Web de traitement de donnée sous un autre langage de programmation (VueJS).
      </p>
    ),
  },
  {
    date: 'Février 2024 - Avril 2024',
    location: 'Prométhée Earth Intelligence',
    title: 'Stage - Développement d\'une application de gestion de base de données et de version de système',
    content: (
      <p>
        J'ai réalisé une application web dans le but de gérer des bases de données existantes, faire des sauvegardes, restituer des données et être capable de modifier les versions du système d'applications.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Contactez-moi.',
  description: 'Voici tout mes réseaux et mes contact, vous pouvez m\'envoyer un mail afin de me poser des questions.',
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
      type: ContactType.Instagram,
      text: '@tbakerx',
      href: 'https://www.instagram.com/tbakerx/',
    },
    {
      type: ContactType.Github,
      text: 'tbakerx',
      href: 'https://github.com/tbakerx',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/julienbernard85'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/julien-bernard-955993241/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
