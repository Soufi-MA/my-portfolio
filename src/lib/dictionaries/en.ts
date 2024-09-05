export const en = {
  headers: {
    home: "Home",
    projects: "Projects",
    about: "About",
    contacts: "Contacts",
    stacks: "Stacks",
    visit: "Visit",
    techs: "Technologies",
  },
  hero: {
    headline: "Hi, I'm Soufi",
    subheadline: "Fullstack Developer",
    buttons: [
      {
        id: 1,
        label: "Download CV",
        variant: "",
        href: "/pdf/Soufi%27s%20Resume.pdf",
        download: true,
      },
      {
        id: 2,
        label: "Github",
        variant: "outline",
        href: "https://github.com/Soufi-MA/",
      },
    ],
  },
  developer: {
    name: "Mahmoud Soufi",
    position1: "Full Stack Developer",
    position2: "UI/UX",
  },
  about:
    "I'm Mahmoud, a Computer Science graduate based in Addis Ababa, Ethiopia, with over 4 years of experience crafting dynamic web experiences. My journey began with the fundamentals of PHP, but my passion for innovation led me to explore the React and Next.js ecosystems, where I now build interactive and performant applications.",
  contacts: [
    {
      header: "Email:",
      href: "mailto:soufi.m.ahmed@gmail.com",
      value: "soufi.m.ahmed@gmail.com",
    },
    {
      header: "Github:",
      href: "https://github.com/Soufi-MA",
      value: "Soufi-MA",
    },
  ],
  projects: [
    {
      id: "Kabu",
      title: "Kabu",
      thumbnail: "/projects/kabu/kabu_thumbnail.png",
      summary:
        "Revolutionize the way you source furniture for your creative projects. An innovative platform built specifically for designers, architects, and engineers, offering a seamless experience to find, explore, and source the perfect furniture for your vision.",
      images: [
        {
          id: 1,
          url: "/projects/kabu/kabu-1.png",
          darkUrl: "/projects/kabu/kabu-1-dark.png",
        },
        {
          id: 2,
          url: "/projects/kabu/kabu-2.png",
          darkUrl: "/projects/kabu/kabu-2-dark.png",
        },
        {
          id: 3,
          url: "/projects/kabu/kabu-3.png",
          darkUrl: "/projects/kabu/kabu-3-dark.png",
        },
        {
          id: 4,
          url: "/projects/kabu/kabu-4.png",
          darkUrl: "/projects/kabu/kabu-4-dark.png",
        },
      ],
      stack: [
        "Next.js",
        "Tailwind CSS",
        "Three.js",
        "MongoDB",
        "WebGL",
        "PayloadCMS",
      ],
      url: "https://test.kabu.et/",
      createdAt: new Date(2024, 6),
    },
    {
      id: "Ethiopian Railways",
      title: "Ethiopian Railways",
      thumbnail: "/projects/railways/railways_thumbnail.png",
      summary:
        "Experience the convenience of modern rail travel with the Ethiopian Railways online ticket reservation system, built with cutting-edge technologies for a smooth and secure journey.",
      images: [
        {
          id: 1,
          url: "",
          darkUrl: "",
        },
      ],
      stack: [
        "Next.js",
        "Tailwind CSS",
        "Express",
        "PostgreSQL",
        "NextAuth",
        "Stripe",
      ],
      url: "https://ethiopian-railways.onrender.com",
      createdAt: new Date(2023, 7),
    },
    {
      id: "Harmony",
      title: "Harmony",
      thumbnail: "/projects/harmony/harmony_thumbnail.png",
      summary:
        "Experience the convenience of modern rail travel with the Ethiopian Railways online ticket reservation system, built with cutting-edge technologies for a smooth and secure journey.",
      images: [
        {
          id: 1,
          url: "",
          darkUrl: "",
        },
      ],
      stack: [
        "Next.js",
        "Tailwind CSS",
        "Express",
        "PostgreSQL",
        "NextAuth",
        "Stripe",
      ],
      url: "https://harmony-saudi.com",
      createdAt: new Date(2024, 7),
    },
    {
      id: "Tribond Trading",
      title: "Tribond Trading",
      thumbnail: "/projects/tribond/tribond_thumbnail.png",
      summary:
        "Experience the convenience of modern rail travel with the Ethiopian Railways online ticket reservation system, built with cutting-edge technologies for a smooth and secure journey.",
      images: [
        {
          id: 1,
          url: "",
          darkUrl: "",
        },
      ],
      stack: [
        "Next.js",
        "Tailwind CSS",
        "Express",
        "PostgreSQL",
        "NextAuth",
        "Stripe",
      ],
      url: "https://tribondtrading.com",
      createdAt: new Date(2024, 8),
    },
  ],
};
