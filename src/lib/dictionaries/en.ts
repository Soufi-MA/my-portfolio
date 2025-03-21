export const en = {
  headers: {
    home: "Home",
    projects: {
      headline: "Projects",
      subHeadline: "Here are some of the projects I've worked on.",
    },
    about: {
      headline: "About",
      subHeadline: "Get to know a little more about me.",
    },
    contacts: {
      headline: "Contact",
      subHeadline: "Interested or want to get to know me better?",
    },
    learnMore: "Learn more about what I do",
    stacks: "Stacks",
    visit: "Visit",
    techs: "Technologies",
    whoAmI: "Who am I?",
    whatCanIDo: "What can I do for you?",
    whyHireMe: "Why hire me?",
  },
  whatICanDo: [
    {
      title: "Custom Web Development",
      description:
        "Create tailored web solutions, from landing pages to full-scale web applications, using modern technologies.",
      icon: "IconTerminal2",
    },
    {
      title: "API Development & Integration",
      description:
        "Design and integrate RESTful or GraphQL APIs for seamless data flow across platforms.",
      icon: "IconDatabase",
    },
    {
      title: "E-commerce Solutions",
      description:
        "Build scalable and secure e-commerce platforms, integrating payment gateways and third-party services.",
      icon: "IconShoppingCart",
    },
    {
      title: "Deployment & Maintenance",
      description:
        "Offer services like website hosting, continuous integration, and long-term maintenance.",
      icon: "IconWorldWww",
    },
  ],
  whyHireMe: [
    {
      title: "Development Speed",
      description:
        "I prioritize delivering high-quality projects quickly, using efficient workflows and best practices to meet tight deadlines without compromising on quality.",
    },
    {
      title: "Clean Code",
      description:
        "My code is well-organized, scalable, and follows industry standards, making it easy to maintain, understand, and extend in the future.",
    },
    {
      title: "Responsive Design",
      description:
        "I ensure your website looks great on all devices, from desktops to smartphones, by creating fully responsive and mobile-friendly designs.",
    },
    {
      title: "SEO Optimization",
      description:
        "I implement SEO best practices during development, optimizing your site for search engines to improve its visibility and drive more traffic.",
    },
    {
      title: "Smooth Animations",
      description:
        "I enhance user experience with smooth, subtle animations that make interactions more engaging without affecting performance.",
    },
    {
      title: "Comprehensive Testing",
      description:
        "I rigorously test every aspect of the website, from functionality to usability, ensuring everything works flawlessly across different platforms and browsers.",
    },
  ],
  hero: {
    availablity: "Available for work",
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
  about:
    "I'm Soufi, a Computer Science graduate based in Addis Ababa, Ethiopia, with over 4 years of experience crafting dynamic web experiences. My journey began with the fundamentals of PHP, but my passion for innovation led me to explore the React and Next.js ecosystems, where I now build interactive and performant applications.",
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
        "An innovative platform built specifically for designers, architects, and engineers, offering a seamless experience to find, explore, and source the perfect furniture for your vision.",
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
        "Three.js",
        "WebGL",
        "Tailwind CSS",
        "PostgreSQL",
        "Next Auth",
      ],
      url: "https://kabu.et/",
      createdAt: new Date(2024, 6),
    },
    {
      id: "Tribond Trading",
      title: "Tribond Trading",
      thumbnail: "/projects/tribond/tribond_thumbnail.png",
      summary:
        "Tribond Trading is a registered Human Resources firm with Addis Ababa City Administration trade bureau in Ethiopia.",
      images: [
        {
          id: 1,
          url: "/projects/tribond/tribond-1.png",
          darkUrl: "/projects/tribond/tribond-1.png",
        },
        {
          id: 2,
          url: "/projects/tribond/tribond-2.png",
          darkUrl: "/projects/tribond/tribond-2.png",
        },
        {
          id: 3,
          url: "/projects/tribond/tribond-3.png",
          darkUrl: "/projects/tribond/tribond-3.png",
        },
        {
          id: 4,
          url: "/projects/tribond/tribond-4.png",
          darkUrl: "/projects/tribond/tribond-4.png",
        },
        {
          id: 5,
          url: "/projects/tribond/tribond-5.png",
          darkUrl: "/projects/tribond/tribond-5.png",
        },
      ],
      stack: [
        "Next.js",
        "Tailwind CSS",
        "Recharts",
        "Express",
        "PostgreSQL",
        "NextAuth",
      ],
      url: "https://tribondtrading.com",
      createdAt: new Date(2024, 8),
    },
    {
      id: "Harmony",
      title: "Harmony",
      thumbnail: "/projects/harmony/harmony_thumbnail.png",
      summary:
        "A specialized Saudi company working on creating a charming and attractive aesthetic icon from your event or special event Our expertise makes you a more beautiful and innovative event, at the hands of young Saudi men and women whose event industry has always been their first passion.",
      images: [
        {
          id: 1,
          url: "/projects/harmony/harmony-1.png",
          darkUrl: "/projects/harmony/harmony-1.png",
        },
        {
          id: 2,
          url: "/projects/harmony/harmony-2.png",
          darkUrl: "/projects/harmony/harmony-2.png",
        },
        {
          id: 3,
          url: "/projects/harmony/harmony-3.png",
          darkUrl: "/projects/harmony/harmony-3.png",
        },
        {
          id: 4,
          url: "/projects/harmony/harmony-4.png",
          darkUrl: "/projects/harmony/harmony-4.png",
        },
      ],
      stack: ["Next.js", "Tailwind CSS", "Express"],
      url: "https://harmony-saudi.com",
      createdAt: new Date(2024, 7),
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
          url: "/projects/railways/railways-1.png",
          darkUrl: "/projects/railways/railways-1-dark.png",
        },
        {
          id: 2,
          url: "/projects/railways/railways-2.png",
          darkUrl: "/projects/railways/railways-2-dark.png",
        },
        {
          id: 3,
          url: "/projects/railways/railways-3.png",
          darkUrl: "/projects/railways/railways-3-dark.png",
        },
        {
          id: 4,
          url: "/projects/railways/railways-4.png",
          darkUrl: "/projects/railways/railways-4-dark.png",
        },
        {
          id: 5,
          url: "/projects/railways/railways-5.png",
          darkUrl: "/projects/railways/railways-5-dark.png",
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
  ],
  contact: {
    copyButton: {
      beforeHover: "Contact via Email",
      beforeClick: "Copy Email",
      afterClick: "Email Copied",
    },
    messageButton: {
      beforeHover: "Chat on Telegram",
      beforeClick: "Open Telegram",
      afterClick: "Telegram Opened",
    },
  },
};
