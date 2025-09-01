import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Aman Satyawani",
  url: "https://amansatyawani.online",
  location: "Delhi, IN",
  locationLink: "https://www.google.com/maps/place/delhi",
  description:
    "Self-taught software engineer. I love building software and trying out different tech.",
  summary:
    "During my final year of college (2024), I started learning about software development and started building things. Since then I've delved into full stack development, web3 and ai. Recently I'm getting more curios about system design, database internals, and rust programming.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Node.js",
    "Javascript",
    "Typescript",
    "Rust",
    "Postgres",
    "Express",
    "Prisma ORM",
    "Drizzle ORM",
    "AI SDK",
    "Docker",
    "Tailwind css",
    "Solana SDK",
    "Redis",
    "Kafka",
    "AWS",
    "Cloudflare",
    "Anchor",
    "Framer"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "amansatyawani10@gmail.com",
    tel: "+",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/satyawaniaman",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/aman-satyawani-2566a5222/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://twitter.com/satyawani_aman",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Superteam India",
      href: "https://in.superteam.fun/",
      badges: [],
      location: "Remote",
      title: "Web3 Developer",
      logoUrl: "/superteam.jpeg",
      start: "June 2025",
      end: "Present",
      description:
        "Learning Solana blockchain development and building web3 projects using Rust, Anchor and solana specific libraries.",
    },
    {
      company: "Dream Launch Studios",
      href: "https://www.dreamlaunch.studio/",
      badges: [],
      location: "Remote",
      title: "Full-stack Developer",
      logoUrl: "/dreamLaunch.jpeg",
      start: "March 2025",
      end: "May 2025",
      description:
        "Developed a MVP for a call transcript platform using Next.js, React, TypeScript,Tailwind CSS and Node.js, Express.js and Prisma.",
    },
    {
      company: "Ezintsha Systems Private Limited",
      href: "https://www.ezintshasystems.com/",
      badges: [],
      location: "Remote",
      title: "Software Development Intern",
      logoUrl: "/ezintsha.jpeg",
      start: "July 2024",
      end: "September 2024",
      description:
        "Learned full stack development with a focus on React.js, JavaScript, Node.js and Express. Picked up clean coding habits and got comfortable working across multiple technologies.",
    },
  ],
  education: [
    {
      school: "Dronacharya Group Of Institutions",
      href: "https://gnindia.dronacharya.info/",
      degree: "Bachelors of Technology in Computer Science",
      logoUrl: "/dgi-logo.png",
      start: "2021",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "Soldevkit",
      href: "https://soldevkit.com",
      dates: "July 2025 - Aug 2025",
      active: true,
      description:
        "A Solana UI kit to help developers build Solana dapps faster.",
      technologies: [
        "Next.js",
        "Typescript",
        "Solana SDK",
        "React",
        "TailwindCSS",
        "Shadcn UI",
        "Web3.js",
        "wallet adapter",
        "Fumadocs"
      ],
      links: [
        {
          type: "Website",
          href: "https://soldevkit.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/satyawaniaman/soldevkit",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://4uvs5r93ca.ufs.sh/f/qbbUI2x7F5PHDlIJj9P1vYNzmqMJ95GX7koEpKsa28CODegu",
    },
  ],
} as const;
export const blogPosts = [
  {
    id: 1,
    image: "/gpt.webp",
    title: "The Tech Behind GPT and Friends",
    description: "A deep dive into the technology behind ChatGPT and its friends.",
    link: "https://medium.com/@amansatyawani/ever-wondered-how-chatgpt-works-the-tech-behind-gpt-and-friends-7338c5152e41"
  },
  {
    id: 2,
    image: "/marketing.webp",
    title: "Marketing and Design",
    description: "Why 70% of your landing page should be marketing, not design.",
    link: "https://medium.com/@amansatyawani/why-70-of-your-landing-page-should-be-marketing-not-design-9358a99990c8"
  },
  {
    id: 3,
    image: "/cache-wallet.webp",
    title: "Cache Wallet",
    description: "Solving the $450B Problem of Lost Keys and Seed Phrases",
    link: "https://medium.com/@amansatyawani/cache-wallet-solving-the-450b-problem-of-lost-keys-and-seed-phrases-c73e53eec7e9"
  },
  {
    id: 4,
    image: "/solana-txn.webp",
    title: "Simplifying the Solana Transaction Lifecycle",
    description: "A deep dive into the Solana transaction lifecycle, from transaction creation to confirmation.",
    link: "https://medium.com/@amansatyawani/simplifying-the-solana-transaction-lifecycle-bad1ade27a22"
  },
  {
    id: 5,
    image: "/solana-engine.webp",
    title: "Beyond the Transaction",
    description: "Discussing the inner workings of Solana's Engine.",
    link: "https://medium.com/@amansatyawani/beyond-the-transaction-how-solanas-engine-works-ba5007325fc4"
  },
  {
    id: 6,
    image: "/solana-poh.webp",
    title: "A Deep Dive into PoH and Accounts on Solana",
    description: "Exploring the inner workings of Solana's Proof of History and Accounts.",
    link: "https://medium.com/@amansatyawani/a-deep-dive-into-proof-of-history-and-accounts-on-solana-fb47161f3ef1"
  },
  {
    id: 7,
    image: "/pkm.webp",
    title: "Mastering Private Key Management",
    description: "How to Safeguarding Your Crypto Assets",
    link: "https://medium.com/@amansatyawani/mastering-private-key-management-safeguarding-your-crypto-assets-6d237d2d8f97"
  },
  {
    id: 8,
    image: "/grant.webp",
    title: "Solana Grants",
    description: "How I Won My First Solana Grant and How You Can Too",
    link: "https://medium.com/@amansatyawani/how-i-won-my-first-solana-grant-and-how-you-can-too-cb0e028b7167"
  },
];