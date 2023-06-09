const navElement = [
  {
    id: 1,
    name: "Home",
    link: "#",
    subitems: [],
  },
  {
    id: 2,
    name: "About",
    link: "#",
    subitems: [
      {
        name: "La nostra storia",
        link: "#",
      },
      {
        name: "La nostra storia",
        link: "#",
      },
    ],
  },
  {
    id: 3,
    name: "Services",
    link: "#",
    subitems: [
      {
        name: "Ristrutturazione immobili",
        link: "#",
      },
      {
        name: "Cappotto esterno",
        link: "#",
      },
      {
        name: "Bonus 110%",
        link: "#",
      },
      {
        name: "Demolizione edifici",
        link: "#",
      },
    ],
  },
  {
    id: 4,
    name: "Work",
    link: "#",
    subitems: [
      {
        name: "I nostri lavori",
        link: "#",
      },
      {
        name: "Lavori sostenibili",
        link: "#",
      },
    ],
  },
  {
    id: 5,
    name: "Articles",
    link: "#",
    subitems: [
      {
        name: "Costruzione Esselunga",
        link: "#",
      },
      {
        name: "Costruzione Elnos",
        link: "#",
      },
      {
        name: "Costruzione Gardaland",
        link: "#",
      },
      {
        name: "Ristrutturazione antichità",
        link: "#",
      },
    ],
  },
];

const specialistElement = [
  {
    icon: "fa-solid fa-hotel",
    title: "Buildings",
    text: "Lorem ipsumtllum praesentium ipsam. Nesciunt ipsum a dolorum aliquam nulla odit minima cupiditate ratione molestiae.",
    icons: ["fa-solid fa-link", "fa-solid fa-magnifying-glass"],
  },
  {
    icon: "fa-solid fa-rotate",
    title: "Renovate",
    text: "Lorem ipsumtllum praesentium ipsam. Nesciunt ipsum a dolorum aliquam nulla odit minima cupiditate ratione molestiae.",
    icons: ["fa-solid fa-link", "fa-solid fa-magnifying-glass"],
  },
  {
    icon: "fa-solid fa-house-chimney",
    title: "Construct",
    text: "Lorem ipsumtllum praesentium ipsam. Nesciunt ipsum a dolorum aliquam nulla odit minima cupiditate ratione molestiae.",
    icons: ["fa-solid fa-link", "fa-solid fa-magnifying-glass"],
  },
  {
    icon: "fa-solid fa-truck",
    title: "Exclusive",
    text: "Lorem ipsumtllum praesentium ipsam. Nesciunt ipsum a dolorum aliquam nulla odit minima cupiditate ratione molestiae.",
    icons: ["fa-solid fa-link", "fa-solid fa-magnifying-glass"],
  },
];

const planningElement = [
  {
    icon: "fa-solid fa-suitcase",
    num: "3534",
    text: "Planning application",
  },
  {
    icon: "fa-solid fa-hotel",
    num: "896",
    text: "Completed projects",
  },
  {
    icon: "fa-solid fa-users-line",
    num: "172",
    text: "Trained professional",
  },
  {
    icon: "fa-solid fa-globe",
    num: "19",
    text: "International",
  },
];

const recentWorkElement = [
  {
    image: "../public/img/project1-featured-294276386-600x600.jpg",
    icon: ["fa-solid fa-link", "fa-solid fa-magnifying-glass"],
    title: "Florida health facility",
    text: "Commercial",
    status: true,
    important: 1,
  },
  {
    image: "../public/img/project2-featured-15013609-600x600.jpg",
    icon: ["fa-solid fa-link", "fa-solid fa-magnifying-glass"],
    title: "Florida health facility",
    text: "Commercial",
    status: true,
    important: 1,
  },
  {
    image: "../public/img/project3-featured-189023420-600x600.jpg",
    icon: ["fa-solid fa-link", "fa-solid fa-magnifying-glass"],
    title: "Florida health facility",
    text: "Commercial",
    status: true,
    important: 1,
  },
  {
    image: "../public/img/project1-featured-294276386-600x600.jpg",
    icon: ["fa-solid fa-link", "fa-solid fa-magnifying-glass"],
    title: "Florida health facility",
    text: "Commercial",
    status: false,
    important: 2,
  },
  {
    image: "../public/img/project1-featured-294276386-600x600.jpg",
    icon: ["fa-solid fa-link", "fa-solid fa-magnifying-glass"],
    title: "Florida health facility",
    text: "Commercial",
    status: false,
    important: 2,
  },
  {
    image: "../public/img/project1-featured-294276386-600x600.jpg",
    icon: ["fa-solid fa-link", "fa-solid fa-magnifying-glass"],
    title: "Florida health facility",
    text: "Commercial",
    status: false,
    important: 2,
  },
];

const coreValuesElement = [
  {
    icon: "fa-solid fa-house-chimney",
    title: "Buildings",
    text: "Lorem ipsumtllum praesentium ipsam. Nesciunt ipsum a dolorum aliquam nulla odit minima cupiditate ratione molestiae.",
    color: "bg-light-sky-blue",
  },
  {
    icon: "fa-solid fa-gear",
    title: "Renovate",
    text: "Lorem ipsumtllum praesentium ipsam. Nesciunt ipsum a dolorum aliquam nulla odit minima cupiditate ratione molestiae.",
    color: "bg-sky-blue",
  },
  {
    icon: "fa-solid fa-users-line",
    title: "Construct",
    text: "Lorem ipsumtllum praesentium ipsam. Nesciunt ipsum a dolorum aliquam nulla odit minima cupiditate ratione molestiae.",
    color: "bg-orange",
  },
  {
    icon: "fa-solid fa-lightbulb",
    title: "Exclusive",
    text: "Lorem ipsumtllum praesentium ipsam. Nesciunt ipsum a dolorum aliquam nulla odit minima cupiditate ratione molestiae.",
    color: "bg-green",
  },
];

const ownersElement = [
  {
    image: "../../public/img/home-testimonial-113165296.jpg",
    title:
      "'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus nobis ex ad! Nam velit, aliquid obcaecati vel nihil facilis eum?'",
    text: "Harry smith - new home owner",
  },
  {
    image: "../../public/img/home-testimonial-84268399.jpg",
    title:
      "'Lorem ipsum dolor obis ex! Nam velit, aliquid obcaecati vel nihil facilis eum?'",
    text: "Barack Obama - new home owner",
  },
];

const latestElement = [
  {
    image: "../public/img/blog-post-134132600-400x241.jpg",
    title: "'Lorem ipsum dol  ad! Nam velit, vel nihil facilis eum?'",
    date: "Dicember",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam incidunt fugit tempore? Quos sunt accusamus quidem minima magni aperiam hic, numquam dignissimos harum dolorum fugit, provident veniam cum enim! Quas.",
    textHover: 'Architecture. buoldings. contruction, news',
    button: 'Get quotes',
    icons: ["fa-solid fa-link", "fa-solid fa-magnifying-glass"],
    status: true,
    important: 1,
  },
  {
    image: "../public/img/blog-post-332773904-400x241.jpg",
    title: "'Lorem ipsum dol  ad! Nam velit, vel nihil facilis eum?'",
    date: "Dicember",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam incidunt fugit tempore? Quos sunt accusamus quidem minima magni aperiam hic, numquam dignissimos harum dolorum fugit, provident veniam cum enim! Quas.",
    textHover: 'Architecture. buoldings. contruction, news',
    button: 'Get quotes',
    icons: ["fa-solid fa-link", "fa-solid fa-magnifying-glass"],
    status: true,
    important: 1,
  },
  {
    image: "../public/img/blog-post-92486644-400x241.jpg",
    title: "'Lorem ipsum dol  ad! Nam velit, vel nihil facilis eum?'",
    date: "Dicember",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam incidunt fugit tempore? Quos sunt accusamus quidem minima magni aperiam hic, numquam dignissimos harum dolorum fugit, provident veniam cum enim! Quas.",
    textHover: 'Architecture. buoldings. contruction, news',
    button: 'Get quotes',
    icons: ["fa-solid fa-link", "fa-solid fa-magnifying-glass"],
    status: true,
    important: 1,
  },
  {
    image: "../public/img/blog-post-134132600-400x241.jpg",
    title: "'Lorem ipsum dol  ad! Nam velit, vel nihil facilis eum?'",
    date: "Dicember",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam incidunt fugit tempore? Quos sunt accusamus quidem minima magni aperiam hic, numquam dignissimos harum dolorum fugit, provident veniam cum enim! Quas.",
    textHover: 'Architecture. buoldings. contruction, news',
    button: 'Get quotes',
    icons: ["fa-solid fa-link", "fa-solid fa-magnifying-glass"],
    status: false,
    important: 2,
  },
  {
    image: "../public/img/blog-post-134132600-400x241.jpg",
    title: "'Lorem ipsum dol  ad! Nam velit, vel nihil facilis eum?'",
    date: "Dicember",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam incidunt fugit tempore? Quos sunt accusamus quidem minima magni aperiam hic, numquam dignissimos harum dolorum fugit, provident veniam cum enim! Quas.",
    textHover: 'Architecture. buoldings. contruction, news',
    button: 'Get quotes',
    icons: ["fa-solid fa-link", "fa-solid fa-magnifying-glass"],
    status: false,
    important: 2,
  },
];

const trustedElement = [
  {
    image: "../../public/img/home-logo1-219096700-320x202.png",
    title: "logo-1",
  },
  {
    image: "../../public/img/home-logo10-219096700-320x202.png",
    title: "logo-2",
  },
  {
    image: "../../public/img/home-logo11-219096700-320x202.png",
    title: "logo-3",
  },
  {
    image: "../../public/img/home-logo2-219096700-320x202.png",
    title: "logo-4",
  },
  {
    image: "../../public/img/home-logo9-219096700-320x202.png",
    title: "logo-5",
  },
];

const footerElement = [
  {
    icon: "fa-solid fa-globe",
    text: "Corporate location 1600 am london",
  },
  {
    icon: "fa-solid fa-house-chimney",
    text: "Corporate location 1600 am london",
  },
  {
    icon: "fa-solid fa-phone-flip",
    text: "Corporate location 1600 am london",
  },
  {
    icon: "fa-solid fa-envelope",
    text: "Corporate location 1600 am london",
  },
  {
    icon: "fa-solid fa-clock",
    text: "Corporate location 1600 am london",
  },
  {
    icon: "fa-solid fa-clock",
    text: "Corporate location 1600 am london",
  },
];

const sectionTitleArray = [
  {
    title: "Specialists in modern construction",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate labore corrupti dignissimos, aliquid vel sequi quibusdam minus iure nobis repudiandae laborum et!",
    text_capitalize: "text-capitalize",
    fs_3: "fs-4",
  },
  {
    title: "Explore recent work",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate labore corrupti dignissimos, aliquid vel sequi quibusdam minus iure nobis repudiandae laborum et!",
    text_capitalize: "text-capitalize",
    fs_3: "fs-4",
  },
  {
    title: "Our core values",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate labore corrupti dignissimos, aliquid vel sequi quibusdam minus iure nobis repudiandae laborum et!",
    text_capitalize: "text-capitalize",
    fs_3: "fs-4",
  },
  {
    title: "Our home owners say",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate labore corrupti dignissimos, aliquid vel sequi quibusdam minus iure nobis repudiandae laborum et!",
    text_capitalize: "text-capitalize",
    fs_3: "fs-4",
  },
  {
    title: "Latest news",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate labore corrupti dignissimos, aliquid vel sequi quibusdam minus iure nobis repudiandae laborum et!",
    text_capitalize: "text-capitalize",
    fs_3: "fs-4",
  },
  {
    title: "Trusted Partners",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate labore corrupti dignissimos, aliquid vel sequi quibusdam minus iure nobis repudiandae laborum et!",
    text_capitalize: "text-capitalize",
    fs_3: "fs-4",
  },
  {
    title: "Building inspiring spaces",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate labore corrupti dignissimos, aliquid vel sequi quibusdam minus iure nobis repudiandae laborum et!",
    text_start: "text-start",
    text_capitalize: "text-capitalize",
    fs_3: "fs-4",
    margin: "m-0",
    w_400: "w-400",
  },
];
console.log(sectionTitleArray[6].margin);
export {
  navElement,
  specialistElement,
  planningElement,
  recentWorkElement,
  coreValuesElement,
  ownersElement,
  latestElement,
  trustedElement,
  footerElement,
  sectionTitleArray,
};
