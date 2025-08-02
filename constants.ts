import type { Project, SkillCategory, AboutTrait, LeadershipItem, ExperienceItem } from './types';
import { CodeIcon, BrainIcon, UsersIcon, MailIcon } from './components/Icons';
import * as SkillIcons from './components/SkillIcons';
import { TbBrandCss3, TbBrandHtml5, TbBrandJavascript, TbBrandKotlin, TbBrandMongodb, TbBrandNodejs, TbBrandPython, TbBrandReact, TbBrandReactNative, TbBrandTailwind } from "react-icons/tb";
import { SiAndroidstudio, SiExpress, SiJetpackcompose, SiLangchain, SiNasa, SiNumpy, SiPandas, SiTensorflow } from 'react-icons/si';
import { RiGeminiLine } from 'react-icons/ri';
import { RxGithubLogo } from 'react-icons/rx';
import { BsGit } from 'react-icons/bs';

// --- SITE METADATA ---
export const SITE_TITLE = "Erick Mwangi | Android Developer";
export const SITE_DESCRIPTION = "A responsive, minimalistic portfolio website for Erick Mwangi, an Android developer with a growing interest in AI and entrepreneurship.";
export const LOGO_TEXT = "Erick.dev";

// --- IMAGE DATA ---
// TODO: CUSTOM FILE - Replace this with your own profile picture.
// 1. Go to a website like https://www.base64-image.de/
// 2. Upload your own square profile picture (JPG or PNG).
// 3. Copy the generated Base64 string and paste it here, replacing the entire string below.
export const ME_JPG_BASE64 = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAHgAewDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1fBICMyYnGBkaGxQiMkFPTC0eEHYnKFxYKEoNJCUKK2RVLh8PEzYqJissLS4vFxg5OEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU11RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+fr/2gAMAwEAAhEDEQA/AP0YooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigA...';

// --- NAVIGATION & SOCIAL LINKS ---
export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
  { name: 'Blog', href: 'https://blog.rickmwasofficial.me' },
];

// TODO: CUSTOM DATA - Update these with your own social media links.
export const SOCIAL_LINKS = {
    github: 'https://github.com/Rickmwasofficial',
    linkedin: 'https://www.linkedin.com/in/erick-mwangi-9379092b0/',
    twitter: 'https://x.com/rickoo5776',
    whatsapp: 'https://wa.me/254115676847',
    email: 'rickmwasofficial@gmail.com',
};


// --- SECTION CONTENT ---
// You can customize the text content of each section here.

export const HERO_CONTENT = {
    greeting: "Hi! I'm Erick Mwangi.",
    title: "Android Developer",
    description: "I build intuitive mobile experiences and explore the future of intelligent applications. Passionate about clean code, community building, and turning caffeine into code.",
    button: {
        text: "Know More",
        href: "#about",
    }
};

export const ABOUT_CONTENT = {
    title: "About Me",
    subtitle: "The story behind the code",
    paragraphs: [
        "I’m a 3rd-year BSc IT student at the University of Embu, but my journey with tech started much earlier, somewhere around teaching myself how to build websites using nothing but curiosity and Google.",
        "From Python scripts to mobile apps and AI-powered chatbots, I’ve been building things that sometimes work, and learning why they don’t when they don’t.",
        "These days, I’m mostly working in Android (Kotlin + Jetpack Compose), exploring Gen AI, and dreaming up ways to make tech solve real-world problems."
    ],
    funFact: {
        title: "Fun Fact",
        text: "I once ran a Gen AI Study Jam in school, because why not teach machines and people?",
        emoji: "🧠"
    }
};

export const PROJECTS_CONTENT = {
    title: "Projects",
    subtitle: "Things I've built, broken, and built again. Each one a story."
};

export const SKILLS_CONTENT = {
    title: "Tools of the Trade",
    subtitle: "My ever-growing toolkit for building things."
};

export const CONTACT_CONTENT = {
    title: "Send a Message",
    subtitle: "Have a question, project idea, or just want to say hi? Drop me a line!",
    form: {
        name: { label: "Name", placeholder: "Your name" },
        email: { label: "Email", placeholder: "your.email@example.com" },
        subject: { label: "Subject", placeholder: "What's this about?" },
        message: { label: "Message", placeholder: "Tell me about your project, idea, or just say hi!" },
        button: "Send Message",
        // TODO: CUSTOM DATA - Replace this with your own Formspree endpoint.
        // 1. Go to https://formspree.io/ and create a new form.
        // 2. Copy the endpoint URL and paste it here.
        formspreeEndpoint: "https://formspree.io/f/xqaldeob"
    },
    direct: {
        title: "Direct Contact",
        icon: MailIcon,
        email: SOCIAL_LINKS.email,
        afterthought: "\"Alternatively, train a carrier pigeon. I respect tradition.\""
    },
    online: {
        title: "Find Me Online",
    }
};

export const BLOG_CONTENT = {
    title: "From the Blog",
    subtitle: "A space for thoughts, articles, and tutorials.",
    viewAll: {
        text: "View All Posts",
        // TODO: CUSTOM DATA - Replace this with the link to your full blog.
        href: "https://blog.rickmwasofficial.me"
    }
};

export const FOOTER_CONTENT = {
    copyright: `Erick Mwangi. All Rights Reserved.`
};


// --- DATA COLLECTIONS ---

// TODO: CUSTOM DATA - Update this array with your own projects.
// - Replace the placeholder data with your project details.
// - For project images, you can use a service like Unsplash or upload your own and get a direct link.
export const PROJECTS: Project[] = [

  {
    name: 'Kieru Foods Website',
    description: 'Helping a local food brand go digital with a clean, functional web presence. Traditional millet snacks meet modern design.',
    tech: [
        { name: 'React', icon: TbBrandReact },
        { name: 'Tailwind CSS', icon: TbBrandTailwind },
        { name: 'Node.js', icon: TbBrandNodejs }
    ],
    image: 'https://res.cloudinary.com/dhywsjewn/image/upload/v1754128032/kieru_vekdq6.png',
    status: 'In Progress',
    demo: 'https://kierufoods.co.ke'
  },
  {
    name: 'Air Pollution - EDA',
    description: 'Perfoming Exploratory data analysis on the Air pollution dataset',
    tech: [
        { name: 'Python', icon: TbBrandPython },
        { name: 'Numpy', icon: SiNumpy },
        { name: 'Pandas', icon: SiPandas }
    ],
    github: 'https://github.com/Rickmwasofficial/air_pollution',
    image: 'https://res.cloudinary.com/dhywsjewn/image/upload/v1754128121/airpollution_zrdmvk.png',
    status: 'Completed',
  },
  {
    name: 'Food Vision Mini',
    description: 'The model is capable of identifying 101 different types of food in an Image. The Model Was trained on only 10% of the whole Food101 dataset.',
    tech: [
        { name: 'Tensorflow', icon: SiTensorflow },
        { name: 'Numpy', icon: SiNumpy },
        { name: 'Pandas', icon: SiPandas }
    ],
    github: 'https://github.com/Rickmwasofficial/Food-Vision-Mini',
    image: 'https://res.cloudinary.com/dhywsjewn/image/upload/v1754128067/foodvision_oowyx0.png',
    status: 'Completed',
  },
  {
    name: 'Animal Image Recognition',
    description: 'This model is capable of identifying about 90 types of animals, with 88% accuracy',
    tech: [
        { name: 'Tensorflow', icon: SiTensorflow },
        { name: 'Numpy', icon: SiNumpy },
        { name: 'Pandas', icon: SiPandas }
    ],
    github: 'https://github.com/Rickmwasofficial/Animal_Image_Recognition',
    image: 'https://res.cloudinary.com/dhywsjewn/image/upload/v1754128122/air_bmkfcy.png',
    status: 'Completed',
  },
  {
    name: 'StarVault App',
    description: 'An Android app using Jetpack Compose, Retrofit, Hilt, and Coil to explore space content via NASA API.',
    tech: [
        { name: 'Kotlin', icon: TbBrandKotlin }, 
        { name: 'Jetpack Compose', icon: SiJetpackcompose },
        { name: 'NASA API', icon: SiNasa}
    ],
    github: 'https://github.com/Rickmwasofficial/StarVault',
    image: 'https://res.cloudinary.com/dhywsjewn/image/upload/v1754128098/STARVAULT2_j1hz9s.png',
    status: 'Completed'
  },
  {
    name: 'Blue - Studdy Buddy',
    description: 'LangChain + Gemini RAG app for a for study help. It\'s like having a brainstorming partner who never needs coffee.',
    tech: [
        { name: 'Python', icon: TbBrandPython },
        { name: 'LangChain', icon: SiLangchain },
        { name: 'Gemini', icon: RiGeminiLine },
        { name: 'React Native', icon: TbBrandReactNative },
    ],
    github: 'https://github.com/Rickmwasofficial/blue-app',
    image: 'https://res.cloudinary.com/dhywsjewn/image/upload/v1754128063/blue_lfqc3n.png',
    status: 'Completed',
  },
];

export const ABOUT_TRAITS: AboutTrait[] = [
    {
        icon: CodeIcon,
        title: 'Clean Code Enthusiast',
        description: 'Believes debugging is like being a detective in a crime movie where you\'re also the murderer.'
    },
    {
        icon: BrainIcon,
        title: 'AI Explorer',
        description: 'Teaching machines to think while trying not to overthink myself.'
    },
    {
        icon: UsersIcon,
        title: 'Community Builder',
        description: 'Organizing tech events because caffeine and collaboration make everything better.'
    }
];

export const SKILLS: SkillCategory[] = [
    {
        title: 'Languages',
        skills: [
            { name: 'Python', icon: TbBrandPython }, 
            { name: 'Kotlin', icon: TbBrandKotlin }, 
            { name: 'JavaScript', icon: TbBrandJavascript },
            { name: 'HTML', icon: TbBrandHtml5 },
            { name: 'CSS', icon: TbBrandCss3 },
        ]
    },
    {
        title: 'Frameworks',
        skills: [
            { name: 'Jetpack Compose', icon: SiJetpackcompose },
            { name: 'React', icon: TbBrandReact },
            { name: 'TensorFlow', icon: SiTensorflow },
            { name: 'Node.js', icon: TbBrandNodejs },
            { name: 'Express', icon: SiExpress },
        ]
    },
    {
        title: 'Tools',
        skills: [
            { name: 'Git', icon: BsGit },
            { name: 'GitHub', icon: RxGithubLogo },
            { name: 'MongoDB', icon: TbBrandMongodb },
            { name: 'Android Studio', icon: SiAndroidstudio },
        ]
    },
    {
        title: 'Soft Skills',
        skills: [
            { name: 'Leadership', icon: SkillIcons.CodeFileIcon },
            { name: 'Public Speaking', icon: SkillIcons.CodeFileIcon },
            { name: 'Community Building', icon: SkillIcons.CodeFileIcon },
            { name: 'Social Media', icon: SkillIcons.CodeFileIcon },
        ]
    }
];

export const EXPERIENCE: ExperienceItem[] = [
    {
        role: "Android Developer Intern",
        company: "ThreeModern Systems.",
        description: "Contributed to the development of a new feature for their flagship Android application, focusing on UI/UX with Jetpack Compose. Gained experience in a professional agile environment."
    },
    {
        role: "Freelance Web Developer",
        company: "Self-Employed",
        description: "Designed and developed websites for local businesses, including 'Kieru Foods', utilizing React and Tailwind CSS to create responsive and modern user interfaces."
    }
];

export const LEADERSHIP: LeadershipItem[] = [
    {
        title: "Google Developer Student Clubs – University of Embu",
        role: "Incoming Lead Organizer (2025)",
        description: "Spearheading developer community efforts by organizing hands-on events in Android, web, ML, and cloud. Focused on building a committed core team, boosting engagement, and structuring skill tracks across tech domains. Navigating limited resources with creativity and partnerships."
    },
    {
        title: "Responsible Computing Young Innovators Club",
        role: "Project Coordinator",
        description: "Led initiatives focusing on ethical tech, including Gen AI awareness and responsible innovation. Coordinated interdisciplinary collaboration among members for impact-driven projects."
    },
    {
        title: "Hult Prize – University of Embu",
        role: "Incoming Vice Chair (Former Social Media Marketer)",
        description: "Supported the campus team in organizing social entrepreneurship challenges. Now transitioning into a leadership role to drive visibility and participation for 2025."
    },
    {
        title: "AI Study Jams",
        role: "Facilitator",
        description: "Facilitated Gen AI Study Jams on campus. Taught peers how to build with LLMs using tools like LangChain and Hugging Face — and yes, I genuinely enjoy this stuff!"
    }
];
