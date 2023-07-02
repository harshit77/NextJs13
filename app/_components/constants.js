const SIDEBAR_CONTENT = [
  {
    path: "/",
    title: "Discussion fourm",
    hide: true,
    icontype: <i class="ri-message-2-line ri-xl" />,
    children: [
      {
        path: "service",
        title: "Service",
      },
      {
        path: "events",
        title: "Events",
      },
    ],
  },
  {
    path: "/marketstories",
    title: "Market Stories",
    hide: true,
    icontype: <i class="ri-money-dollar-circle-line ri-xl" />,
    children: [],
  },
  ,
  {
    path: "/sentiment",
    title: "Sentiment",
    hide: true,
    children: [],
  },
  {
    path: "/market",
    title: "Market",
    hide: true,
    children: [],
  },
  {
    path: "/sector",
    title: "Sector",
    hide: true,
    children: [],
  },
  {
    path: "/watchlist",
    title: "Watchlist",
    hide: true,
    children: [],
  },
  {
    path: "/events",
    title: "Events",
    hide: true,
    children: [],
  },
  {
    path: "/news",
    title: "News/interview",
    hide: true,
    children: [],
  },
];

export {SIDEBAR_CONTENT}
