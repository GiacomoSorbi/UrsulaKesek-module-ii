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
    id: "1",
    name: "Scent 1",
    title: "Seychelles Floral",
    desc: "A blend of ylang ylang,bergamot and blackpepper",
    img: bottle,
    prefix: "£",
    price: 185.0,
    quantity: `Qty:${0}`,
    subTotal: () => {
      return this.quantity * this.price;
    },
  },
  {
    id: "2",
    name: "Scent 2",
    title: "Colombo Cool",
    desc: "Lemongrass,lavender,mandarin and peppermint",
    img: bottle1,
    prefix: "£",
    price: 145.0,
    quantity: `Qty:${0}`,
    subTotal: 0,
  },
  {
    id: "3",
    name: "Scent 3",
    title: "Rio City Garden",
    img: bottle3,
    desc:"Exciting cocktail of gardenia,ylang-ylang,passion-fruit and lime",
    prefix: "£",
    price: 150.0,
    quantity: `Qty:${0}`,
    subTotal: 0,
  },
  {
    id: "4",
    name: "Scent 4",
    title: "Cuenca Rose",
    img: bottle6,
    desc:"Sensational tuberose,cedar,vetiver and violets",
    prefix: "£",
    price: 165.0,
  },
  {
    id: "5",
    name: "Scent 5",
    title: "Paris Mimosa",
    img: bottle4,
    desc: "Mesmerising mimosa,cardamom, sandalwood,damask rose and tonka",
    prefix: "£",
    price: 125.0,
  },
  {
    id: "6",
    name: "Scent 6",
    title: "Poets of Berlin",
    desc: "Blending  lemon,vanilla,vetiver,wild green orris and blueberry.",
    img: bottle2,
    prefix: "£",
    price: 185.0,
    quantity: 0,
    subTotal: 0,
  },
  {
    id: "7",
    name: "Scent 7",
    title: " In Noto Basso   ",
    desc: " Marsala cask whisky,sandalwood,vetiver and leather.",
    img: bottle5,
    prefix: "£",
    price: 145.0,
    quantity: 0,
    subTotal: 0,
  },
  {
    id: "8",
    name: "Scent 8",
    title: "Toamasina Cocktail",
    desc: "Blending Grapefruit,cardomom,vetiver and vanilla.",
    img: bottle7,
    prefix: "£",
    price: 160.0,
    quantity: 0,
    subTotal: 0,
  },
  {
    id: "9",
    name: "Scent 9",
    title: "Jazz New York",
    desc: "A classic blend of Patchouli,Cedar and Lime.",
    img: bottle8,
    prefix: "£",
    price: 150.0,
    quantity: 0,
    subTotal: 0,
  },
];
export const items = [
  {
    id: "1",
    img:bottle,
    title:"Seychelles",
    prefix: "£",
    price: 185.0,
  },
  {
    id: "2",
    img:bottle1,
    title:"Colombo",
    prefix: "£",
    price: 145.0,
  },
  {
    id: "3",
    img:bottle3,
    title:"Rio",
    prefix: "£",
    price: 150.0,
  },
  {
    id: "4",
    img:bottle6,
    title:"Cuenca",
    prefix: "£",
    price: 165.0,
  },
  {
    id: "5",
    img:bottle4,
    title:"Paris",
    prefix: "£",
    price: 125.0,
  },
  {
    id: "6",
    img:bottle2,
    title:"Berlin",
    prefix: "£",
    price: 185.0,
  },
  {
    id: "7",
    img:bottle5,
    title:"Noto",
    prefix: "£",
    price: 145.0,
  },
  {
    id: "8",
    img:bottle7,
    title:"Toamasina",
    prefix: "£",
    price: 160.0,
  },
  {
    id: "9",
    img:bottle8,
    title:"New York",
    prefix: "£",
    price: 150.0,
  },
];
