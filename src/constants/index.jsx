import bottle from "./Images/green.png";
import bottle1 from "./Images/turq.png";
import bottle2 from "./Images/blue.png";
import bottle3 from "./Images/pink.png";

 export const products = [
  {
    id: 1,
    name: "P1",
    title: "Seychelles Floral",
    desc: "A blend of ylang ylang,bergamot and blackpepper",
    img: bottle,
    alt: "404",
    prefix: "£",
    price: 185.00,
    quantity: 0,
    subTotal: 0,
  },
  {
    id: 2,
    name: "P2",
    title: "Sri Lanka Woody",
    desc: "",
    img: bottle1,
    price: 145.00,
    quantity: 0,
    subTotal: 0,

  },
  {
    id: 3,
    name: "P3",
    title:"Nashville Fruity",
    img: bottle3,
    desc: "",
    price: 150.00,
  },
  {
    id: 4,
    name: "P4",
    img: bottle2,
    description: "",
    price: 165.00,
  },
  {
    id: 5,
    name: "P5",
    img: "",
    description: "",
    price: 125.00,
  },
  {
    id: 6,
    name: "P6",
    title: "Poets of Berlin:",
    desc: " A blend of Wild green orris,vanilla,blueberry,lemon,vetiver.",
    prefix: "£",
    price: 185.00,
    quantity: 0,
    subTotal: 0,
  },
  {
    id: 7,
    name: "P7",
    title: "Basso Continuo in Noto :  ",
    desc: "A blend of:Marsala Cask Whisky/Sandalwood/Vetiver/Leather.",
    prefix: "£",
    price: 145.00,
    quantity: 0,
    subTotal: 0,
  },
  {
    id: 8,
    name: "P8",
    title: "Toamasina Ensemble:",
    desc: "An Island Blend:Grapefruit/Cardomom/Vetiver/Vanilla.",
    prefix: "£",
    price: 160.00,
    quantity: 0,
    subTotal: 0,
  },
  {
    id: 9,
    name: "P9",
    title: "Jazz New York:",
    desc: "A classic blend of:Patchouli/Cedar/Lime.",
    prefix: "£",
    price: 150.00,
    quantity: 0,
    subTotal: 0,
  },
];
