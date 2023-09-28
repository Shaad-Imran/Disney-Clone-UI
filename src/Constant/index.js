// Import icons
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus } from "react-icons/hi";

// Import production house images and videos
import {
  disney,
  marvel,
  nationalG,
  pixar,
  starwar,
  starWarsVid,
  disneyVid,
  marvelVid,
  nationalGVid,
  pixarVid,
} from "../assets";

// Define the menu items
export const menuItems = [
  {
    name: "HOME",
    icon: HiHome,
  },
  {
    name: "SEARCH",
    icon: HiMagnifyingGlass,
  },
  {
    name: "WATCH LIST",
    icon: HiPlus,
  },
  {
    name: "ORIGINALS",
    icon: HiStar,
  },
  {
    name: "MOVIES",
    icon: HiPlayCircle,
  },
  {
    name: "SERIES",
    icon: HiTv,
  },
];

// Define the production house list
export const productionHouseList = [
  {
    id: 1,
    image: disney,
    video: disneyVid,
  },
  {
    id: 2,
    image: pixar,
    video: pixarVid,
  },
  {
    id: 3,
    image: marvel,
    video: marvelVid,
  },
  {
    id: 4,
    image: starwar,
    video: starWarsVid,
  },
  {
    id: 5,
    image: nationalG,
    video: nationalGVid,
  },
];

// Define the genre list
export const genreList = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV Movie",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
];
