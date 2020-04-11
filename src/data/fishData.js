import bitterlingImg from "../assets/fishImages/NH-Icon-bitterling.png";
import paleChubImg from "../assets/fishImages/palechub.png";
import crucianCarp from "../assets/fishImages/cruciancarp.png";
import daceImg from "../assets/fishImages/dace.png";
import carpImg from "../assets/fishImages/carp.png";
import koiImg from "../assets/fishImages/Koi.png";
import goldFishImg from "../assets/fishImages/goldfish.png";
import popEyedGoldfishImg from "../assets/fishImages/popeyedgoldfish.png";
import ranchuGoldfishImg from "../assets/fishImages/ranchugoldfish.png";
import killiFishImg from "../assets/fishImages/killifish.png";
import crawfishImg from "../assets/fishImages/crawfish.png";
import softShelledTurtleImg from "../assets/fishImages/softshelledturtle.png";
import snappingTurtleImg from "../assets/fishImages/snappingturtle.png";
import tadpoleImg from "../assets/fishImages/tadpole.png";
import frogImg from "../assets/fishImages/frog.png";

const fishData = [
  {
    image: bitterlingImg,
    name: "Bitterling",
    price: 900,
    location: "River",
    size: 1,
    time: "All Day",
    month: [5, 6, 7, 8, 9],
  },
  {
    image: paleChubImg,
    name: "Pale Chub",
    price: 200,
    location: "River",
    size: 1,
    time: "9AM - 4PM",
    month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  },
  {
    image: crucianCarp,
    name: "Crucian Carp",
    price: 160,
    location: "River",
    size: 2,
    time: "All Day",
    month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  },
  {
    image: daceImg,
    name: "Dace",
    price: 240,
    location: "River",
    size: 3,
    time: "4PM to 9PM",
    month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  },
  {
    image: carpImg,
    name: "Carp",
    price: 300,
    location: "Pond",
    size: 4,
    time: "All Day",
    month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  },
  {
    image: koiImg,
    name: "Koi",
    price: 4000,
    location: "Pond",
    size: 4,
    time: "4PM to 9PM",
    month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  },
  {
    image: goldFishImg,
    name: "Goldfish",
    price: 1300,
    location: "Pond",
    size: 1,
    time: "All Day",
    month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  },
  {
    image: popEyedGoldfishImg,
    name: "Pop-eyed Goldfsh",
    price: 1300,
    location: "Pond",
    size: 1,
    time: "9AM to 4PM",
    month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  },
  {
    image: ranchuGoldfishImg,
    name: "Ranchu Goldfish",
    price: 4500,
    location: "Pond",
    size: 2,
    time: "9AM to 4PM",
    month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  },
  {
    image: killiFishImg,
    name: "Killifish",
    price: 300,
    location: "Pond",
    size: 1,
    time: "All Day",
    month: [1, 2, 10, 11, 12],
  },
  {
    image: crawfishImg,
    name: "Crawfish",
    price: 200,
    location: "Pond",
    size: 2,
    time: "All day",
    month: [1, 2, 3, 10, 11, 12],
  },
  {
    image: softShelledTurtleImg,
    name: "Soft-shelled turtle",
    price: 3750,
    location: "River",
    size: 4,
    time: "4PM to 9PM",
    month: [2, 3],
  },
  {
    image: snappingTurtleImg,
    name: "Snapping Turtle",
    price: 5000,
    location: "River",
    size: 5,
    time: "9PM to 4AM",
    month: [1, 2, 3, 4, 10, 11, 12],
  },
  {
    image: tadpoleImg,
    name: "Tadpole",
    price: 100,
    location: "Pond",
    size: 1,
    time: "All Day",
    month: [1, 9, 10, 11, 12],
  },
  {
    image: frogImg,
    name: "Frog",
    price: 120,
    location: "Pond",
    size: 2,
    time: "All Day",
    month: [1, 2, 11, 12],
  },
];

export default fishData;
