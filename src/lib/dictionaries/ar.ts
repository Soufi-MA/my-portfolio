export const ar = {
  headers: {
    home: "الرئيسية",
    projects: "المشاريع",
    about: "نبذة مختصرة",
    contacts: "وسائل التواصل",
    stacks: "التقنيات",
    visit: "زيارة",
    techs: "التقنيات",
  },
  hero: {
    headline: "مرحبًا, أنا محمود",
    subheadline: "مطور ويب",
    buttons: [
      {
        id: 1,
        label: "السيرة الذاتية",
        variant: "",
        href: "/pdf/Soufi%27s%20Resume.pdf",
        download: true,
      },
      {
        id: 2,
        label: "جيتهب",
        variant: "outline",
        href: "https://github.com/Soufi-MA/",
      },
    ],
  },
  developer: {
    name: "محمود الصوفي",
    position1: "مطور مواقع ويب",
    position2: "مصمم واجهة مستخدم",
  },
  about:
    "أنا محمود، خريج علوم الكمبيوتر ومقيم في أديس أبابا، إثيوبيا، ولدي أكثر من 4 سنوات من الخبرة في صياغة تجارب الويب الديناميكية. بدأت رحلتي بأساسيات PHP، لكن شغفي بالابتكار قادني إلى استكشاف الأنظمة البيئية React وNext.js، حيث أقوم الآن ببناء تطبيقات تفاعلية وعالية الأداء.",
  contacts: [
    {
      header: "البريد الإلكتروني:",
      href: "mailto:soufi.m.ahmed@gmail.com",
      value: "soufi.m.ahmed@gmail.com",
    },
    {
      header: "صفحة جيت هب:",
      href: "https://github.com/Soufi-MA",
      value: "Soufi-MA",
    },
  ],
  projects: [
    {
      id: "Kabu",
      title: "كابو",
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
      title: "السكك الحديدية الاثيوبية",
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
      title: "هارموني",
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
      title: "شركة ترايبوند للتداول",
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
