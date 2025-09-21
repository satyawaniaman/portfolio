import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Aman Satyawani",
  url: "https://amansatyawani.online",
  location: "Delhi, IN",
  locationLink: "https://www.google.com/maps/place/delhi",
  description:
    "Full‑stack engineer (self‑taught) building production‑grade Web, Web3, and AI services. I care about clean interfaces, performance at scale, and fast iteration.",
  summary:
    "I began my software development journey in my final year of college (2024) by building projects and exploring different stacks. Since then, I’ve worked across full-stack development, Web3, and AI. Recently, I’ve been diving into system design, database internals, and Rust programming.",
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
    "Framer",
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
        "Collaborating with the Superteam India community to create open-source tools and contribute to the Solana ecosystem.",
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
        "Designed and developed an MVP for a call transcript platform using Next.js, React, TypeScript, and Tailwind CSS on the frontend. Improved code quality and gained experience working in cross-functional teams.",
    },
    // {
    //   company: "Ezintsha Systems Private Limited",
    //   href: "https://www.ezintshasystems.com/",
    //   badges: [],
    //   location: "Remote",
    //   title: "Software Development Intern",
    //   logoUrl: "/ezintsha.jpeg",
    //   start: "July 2024",
    //   end: "September 2024",
    //   description:
    //     "Contributed to building full-stack features with React.js, Node.js, and Express. Improved code quality and gained experience working in cross-functional teams.",
    // },
  ],
  education: [
    {
      school: "Dronacharya Group Of Institutions",
      href: "https://gnindia.dronacharya.info/",
      degree: "B.Tech in Computer Science",
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
        "Built a Solana UI kit to help developers quickly prototype and ship dapps.",
      technologies: [
        "Next.js",
        "Typescript",
        "Solana SDK",
        "React",
        "TailwindCSS",
        "Shadcn UI",
        "Web3.js",
        "wallet adapter",
        "Fumadocs",
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
    {
      title: "Buildspark Notes",
      href: "https://notes.buildspark.com",
      dates: "July 2025 - Aug 2025",
      active: true,
      description:
        "Built a note-taking app similar to notion to help users organize and share their thoughts.",
      technologies: [
        "Next.js",
        "Typescript",
        "React",
        "Clerk",
        "Convex",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://notes.buildspark.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/satyawaniaman/notion-clone",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://",
    },
  ],
} as const;
export const blogPosts = [
  {
    id: 1,
    image: "/gpt.webp",
    title: "The Tech Behind GPT and Friends",
    description:
      "A deep dive into the technology behind ChatGPT and its friends.",
    link: "https://medium.com/@amansatyawani/ever-wondered-how-chatgpt-works-the-tech-behind-gpt-and-friends-7338c5152e41",
  },
  {
    id: 2,
    image: "/marketing.webp",
    title: "Marketing and Design",
    description:
      "Why 70% of your landing page should be marketing, not design.",
    link: "https://medium.com/@amansatyawani/why-70-of-your-landing-page-should-be-marketing-not-design-9358a99990c8",
  },
  {
    id: 3,
    image: "/cache-wallet.webp",
    title: "Cache Wallet",
    description: "Solving the $450B Problem of Lost Keys and Seed Phrases",
    link: "https://medium.com/@amansatyawani/cache-wallet-solving-the-450b-problem-of-lost-keys-and-seed-phrases-c73e53eec7e9",
  },
  {
    id: 4,
    image: "/solana-txn.webp",
    title: "Simplifying the Solana Transaction Lifecycle",
    description:
      "A deep dive into the Solana transaction lifecycle, from transaction creation to confirmation.",
    link: "https://medium.com/@amansatyawani/simplifying-the-solana-transaction-lifecycle-bad1ade27a22",
  },
  {
    id: 5,
    image: "/solana-engine.webp",
    title: "Beyond the Transaction",
    description: "Discussing the inner workings of Solana's Engine.",
    link: "https://medium.com/@amansatyawani/beyond-the-transaction-how-solanas-engine-works-ba5007325fc4",
  },
  {
    id: 6,
    image: "/solana-poh.webp",
    title: "A Deep Dive into PoH and Accounts on Solana",
    description:
      "Exploring the inner workings of Solana's Proof of History and Accounts.",
    link: "https://medium.com/@amansatyawani/a-deep-dive-into-proof-of-history-and-accounts-on-solana-fb47161f3ef1",
  },
  {
    id: 7,
    image: "/pkm.webp",
    title: "Mastering Private Key Management",
    description: "How to Safeguarding Your Crypto Assets",
    link: "https://medium.com/@amansatyawani/mastering-private-key-management-safeguarding-your-crypto-assets-6d237d2d8f97",
  },
  {
    id: 8,
    image: "/grant.webp",
    title: "Solana Grants",
    description: "How I Won My First Solana Grant and How You Can Too",
    link: "https://medium.com/@amansatyawani/how-i-won-my-first-solana-grant-and-how-you-can-too-cb0e028b7167",
  },
];
