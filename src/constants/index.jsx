import bottle from "./Images/green.png";
import bottle1 from "./Images/turq.png";
import bottle2 from "./Images/blue.png";
import bottle3 from "./Images/pink2.png";
import bottle4 from "./Images/pink.png";
import bottle5 from "./Images/green2.png";
import bottle6 from "./Images/orange.png";
import bottle7 from "./Images/greengold.png";
import bottle8 from "./Images/blue2.png";

export const products = [
  {
    id: 1,
    name: "P1",
    title: "Seychelles Floral",
    desc: "A blend of ylang ylang,bergamot and blackpepper",
    img: bottle,
    alt: "404",
    prefix: "£",
    price: 185.0,
    quantity: `Qty:${0}`,
    subTotal: () => {
      return this.quantity * this.price;
    },
  },
  {
    id: 2,
    name: "P2",
    title: "Colombo Fresh",
    desc: "Blending Lemongrass,lavender,mandarin and peppermint",
    img: bottle1,
    price: 145.0,
    quantity: `Qty:${0}`,
    subTotal: 0,
  },
  {
    id: 3,
    name: "P3",
    title: "Rio City Garden",
    img: bottle3,
    desc: "",
    price: 150.0,
    quantity: `Qty:${0}`,
    subTotal: 0,
  },
  {
    id: 4,
    name: "P4",
    title: "Cuenca Rose",
    img: bottle2,
    description: "",
    price: 165.0,
  },
  {
    id: 5,
    name: "P5",
    title: "Paris Mimosa",
    img: bottle4,
    description: "",
    price: 125.0,
  },
  {
    id: 6,
    name: "P6",
    title: "Poets of Berlin",
    desc: "Blending  lemon,vanilla,vetiver,wild green orris and blueberry.",
    img: bottle6,
    prefix: "£",
    price: 185.0,
    quantity: 0,
    subTotal: 0,
  },
  {
    id: 7,
    name: "P7",
    title: "Noto Basso   ",
    desc: " Marsala cask whisky,sandalwood,vetiver and leather.",
    img: bottle5,
    prefix: "£",
    price: 145.0,
    quantity: 0,
    subTotal: 0,
  },
  {
    id: 8,
    name: "P8",
    title: "Toamasina Cocktail",
    desc: "Blending Grapefruit,cardomom,vetiver and vanilla.",
    img: bottle7,
    prefix: "£",
    price: 160.0,
    quantity: 0,
    subTotal: 0,
  },
  {
    id: 9,
    name: "P9",
    title: "Jazz New York:",
    desc: "A classic blend of Patchouli,Cedar and Lime.",
    img: bottle8,
    prefix: "£",
    price: 150.0,
    quantity: 0,
    subTotal: 0,
  },
];
