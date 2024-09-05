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
        "منصة مبتكرة مصممة خصيصا للمصممين والمهندسين المعماريين والمهندسين ، وتقدم تجربة سلسة للعثور على الأثاث المثالي لرؤيتك.",
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
      url: "https://test.kabu.et/",
      createdAt: new Date(2024, 6),
    },
    {
      id: "Tribond Trading",
      title: "شركة ترايبوند للتداول",
      thumbnail: "/projects/tribond/tribond_thumbnail.png",
      summary:
        "شركة ترايبوند للتداول هي شركة موارد بشرية مسجلة لدى المكتب التجاري لإدارة مدينة أديس أبابا في إثيوبيا.",
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
      title: "هارموني",
      thumbnail: "/projects/harmony/harmony_thumbnail.png",
      summary:
        "شركة سعودية مختصة تعمل على صناعة أيقونة جمالية ساحرة وجذَابة من حدثك أو فعاليتك الخاصة خبراتنا تصنع لك حدثا أكثر جمالا وابتكارا ، على أيدي شباب و شابات سعوديين لطالما كانت صناعة الفعاليات شغفهم الأول.",
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
      title: "السكك الحديدية الاثيوبية",
      thumbnail: "/projects/railways/railways_thumbnail.png",
      summary:
        "جرب راحة السفر بالسكك الحديدية الحديثة مع نظام حجز التذاكر عبر الإنترنت للسكك الحديدية الإثيوبية ، المصمم بأحدث التقنيات لرحلة سلسة وآمنة.",
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
};
