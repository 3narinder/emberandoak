import { homeCallout, homeExplore, homeSpecial } from "../images";
import { MenuItemData } from "../types";
import { businessInfo } from "./reusable";

// Home page: page headings, section copy, and calls to action.
export const homePageContent = {
  hero: {
    headingLines: ["A Great morning", "starts with"],
    hoursLabel: "Opening Hours",
    addressLabel: "Find us at",
    imageAlt: "A freshly prepared coffee at Ember & Oak",
    beanAlt: "Decorative coffee bean",
  },
  story: {
    title: "our story",
    imageAlt: "Black coffee cup and plate",
    description:
      "Ember & Oak opened in 2016 in a narrow storefront on West 44th, with a short menu, a second-hand grinder and a stubborn belief that Midtown deserved better than a paper cup of scorched drip. The first week we sold three hundred cups, mostly to people on their way to Grand Central. What kept us open was the ones who came back on a Saturday, when they had nowhere in particular to be. We added breakfast because guests were staying through the morning, and bowls because they were staying through lunch. The kitchen has been running open to close ever since.",
  },
  specials: {
    title: "our specials",
    description:
      "Some things we are making especially well right now — pulled, whisked and built to order, from open until close.",
    buttonLabel: "see full menu",
    buttonHref: "/menu",
    decorativeImageAlts: ["Decorative cookie", "Decorative coffee beans"],
  },
  callout: {
    headingLines: ["Coffee & breakfast,", "At your Local favorite"],
    buttonLabel: "View menu",
    buttonHref: "/menu",
    images: [
      {
        src: homeCallout.homeCallout1,
        alt: "Coffee and breakfast at Ember & Oak",
      },
      {
        src: homeCallout.homeCallout2,
        alt: "A table at Ember & Oak",
      },
    ],
  },
  exploreMenu: {
    title: "explore our menu",
    description:
      "We've got something for everyone across the bar and the kitchen. Tap any one to see everything on it.",
    buttonLabel: "see full menu",
    buttonHref: "/menu",
    decorativeImageAlt: "Decorative napkin",
  },
  gallery: {
    heading: "A taste you'll want to share",
    imageAlts: [
      "A coffee and pastry at Ember & Oak",
      "Coffee being prepared at the bar",
      "A table set for breakfast",
      "Freshly made food from the kitchen",
      "A guest enjoying a drink",
    ],
    decorativeImageAlt: "Decorative group of coffee beans",
  },
  testimonials: {
    title: "our happy visitors",
    description:
      "A few of the regulars who let us start their morning, told in their own words.",
    carouselLabel: "Customer testimonials",
    previousLabel: "Previous testimonials",
    nextLabel: "Next testimonials",
    regionLabel: "Guest reviews carousel",
  },
  address: {
    title: "Find Ember & Oak",
    description:
      "One room on West 44th, half a block from Bryant Park. Walk in, or find us from the address below.",
  },
  footerDescription: businessInfo.description,
};

// Home page menu cards: each entry owns its copy and replaceable image reference.
export const specialItems: MenuItemData[] = [
  {
    id: "nitro-cold-brew",
    type: "price",
    name: "Nitro cold brew",
    price: "$6.00",
    description:
      "Pulled from the tap under nitrogen. Cascading, creamy, and served without ice.",
    image: homeSpecial.nitroColdBrew,
    imageAlt: "Nitro cold brew",
  },
  {
    id: "honey-lavender-latte",
    type: "price",
    name: "Honey lavender latte",
    price: "$6.95",
    description:
      "Wildflower honey steeped with culinary lavender. Floral, not perfumed.",
    image: homeSpecial.homeyLavenderLatte,
    imageAlt: "Honey lavender latte",
  },
  {
    id: "coconut-cloud-matcha",
    type: "price",
    name: "Coconut cloud matcha",
    price: "$7.50",
    description:
      "Crisp coconut water layered under high-grade matcha and a coconut cream cap.",
    image: homeSpecial.cloudMatcha,
    imageAlt: "Coconut cloud matcha",
  },
  {
    id: "avocado-toast",
    type: "price",
    name: "Avocado toast",
    price: "$12.00",
    description:
      "Crushed avocado on grilled sourdough with olive oil, chilli flakes, sea salt and microgreens.",
    image: homeSpecial.avocadoToast,
    imageAlt: "Avocado toast",
  },
  {
    id: "lox-bagel",
    type: "price",
    name: "Lox bagel",
    price: "$16.50",
    description:
      "Everything bagel, cream cheese, cold-smoked salmon, tomato, onion and capers.",
    image: homeSpecial.loxBagel,
    imageAlt: "Lox bagel",
  },
  {
    id: "salmon-poke-bowl",
    type: "price",
    name: "Salmon poke bowl",
    price: "$19.00",
    description:
      "Marinated salmon over sushi rice with edamame, avocado, mango and sesame.",
    image: homeSpecial.salmonBowl,
    imageAlt: "Salmon poke bowl",
  },
];

// Home page explore cards: item counts and descriptions can be updated independently.
export const exploreMenuItems: MenuItemData[] = [
  {
    id: "espresso",
    type: "items",
    name: "Espresso",
    items: "9 items",
    description:
      "Our house blend, roasted in Red Hook and pulled to order. The whole bar is built around these nine drinks.",
    image: homeExplore.espresso,
    imageAlt: "Espresso drinks",
  },
  {
    id: "brewed-coffee",
    type: "items",
    name: "Brewed coffee",
    items: "5 items",
    description:
      "Batch brew for the rush, pour over when you have four minutes to spare.",
    image: homeExplore.brewedCoffee,
    imageAlt: "Brewed coffee",
  },
  {
    id: "cold-brew-iced",
    type: "items",
    name: "Cold brew & iced",
    items: "8 items",
    description:
      "Steeped eighteen hours, poured over a full glass of ice. Low acidity, deep chocolate finish.",
    image: homeExplore.coldIce,
    imageAlt: "Cold brew coffee",
  },
  {
    id: "signature-lattes",
    type: "items",
    name: "Signature lattes",
    items: "7 items",
    description:
      "Syrups made in our own kitchen — no pumps of anything we did not cook ourselves.",
    image: homeExplore.signatureLatte,
    imageAlt: "Signature latte",
  },
  {
    id: "matcha",
    type: "items",
    name: "Matcha",
    items: "6 items",
    description:
      "Ceremonial-grade green tea whisked to order and served hot, iced or clouded with coconut.",
    image: homeExplore.matcha,
    imageAlt: "Matcha",
  },
  {
    id: "tea",
    type: "items",
    name: "Tea",
    items: "6 items",
    description:
      "Loose-leaf, steeped by the pot, and a chai we spice and simmer in house.",
    image: homeExplore.tea,
    imageAlt: "A pot of tea",
  },
  {
    id: "smoothies",
    type: "items",
    name: "Smoothies",
    items: "5 items",
    description:
      "Blended thick with whole fruit and real nut butter. Nothing from a syrup bottle.",
    image: homeExplore.smoothies,
    imageAlt: "Fruit smoothie",
  },
  {
    id: "fresh-juice",
    type: "items",
    name: "Fresh juice",
    items: "5 items",
    description:
      "Cold-pressed each morning from produce bought at the Union Square greenmarket.",
    image: homeExplore.juices,
    imageAlt: "Fresh juice",
  },
];
