import wonderla from "../assets/wonderla/wonderla.avif";
import wonderla2 from "../assets/wonderla/wonderla2.avif";
import wonderla3 from "../assets/wonderla/wonderla3.avif";
import wonderla4 from "../assets/wonderla/wonderla4.avif";
import wonderla5 from "../assets/wonderla/wonderla5.avif";

import palace1 from "../assets/mysore/palace1.avif";

import coorg from "../assets/coorg/coorg.jpg";

import nandi from "../assets/nandi/nandi.jpg";

import jollywood from "../assets/jollywood/jollywood.jpg";

import kanva from "../assets/kanvalake/kanvalake.avif";

import ramanagara from "../assets/ramanagara/ramanagara.avif";

import iskon from "../assets/iskon/iskon.jpg";

import banashankari from '../assets/banashankari/banashankari.webp'

import shivoham from '../assets/Shivoham/Shivoham.jpg'

import lalbagh from '../assets/lalbagh/lalbagh.jpg'

import Bannerughatta from '../assets/Bannerughatta/Bannerughatta.jpg'

import cubbon from '../assets/cubbon/cubbon.jpg'

import gatewayofindia from "../assets/gatewayofindia.jpg";
import tajmahal from "../assets/Tajmahal.jpg";
import eiffeltower from "../assets/eiffeltower.webp";

export const places = [
  {
    name: "Wonderla",
    mainImg: wonderla,
    sliderImgs: [wonderla, wonderla2, wonderla3, wonderla4, wonderla5],
    category: "Theme Park",
    type: ["Adventurous", "Educational", "vecation"],
    location: {
      city: "Bengaluru",
      state: "Karnataka",
      country: "India",
    },
    entryType: "cost",
    cost: 800,
    link: "https://www.wonderla.com/bengaluru-amusement-park/",
  },
  {
    name: "Gateway Of India",
    mainImg: gatewayofindia,
    sliderImgs: [],
    category: "Heritage Site",
    type: ["Educational", "vecation"],
    location: {
      city: "Mumbai",
      state: "Maharastra",
      country: "India",
    },
    entryType: "free",
    link: "https://www.wonderla.com/bengaluru-amusement-park/",
  },
  {
    name: "Taj Mahal",
    mainImg: tajmahal,
    sliderImgs: [],
    category: "Historical Monument",
    type: ["Educational", "vecation"],
    location: {
      city: "Agra",
      state: "Uttar Pradesh",
      country: "India",
    },
    entryType: "cost",
    cost: 50,
    link: "https://www.tajmahal.gov.in/",
  },
  {
    name: "Iskon Temple",
    mainImg: iskon,
    sliderImgs: [wonderla, wonderla2, wonderla3, wonderla4, wonderla5],
    category: "Devotional",
    type: ['Devotional'],
    location: {
      city: "Bengaluru",
      state: "Karnataka",
      country: "India",
    },
    entryType: "Free",
    link: "https://www.iskconbangalore.org/",
  },
  {
    name: "Eiffel Tower",
    mainImg: eiffeltower,
    sliderImgs: [],
    category: "Cultural Heritage",
    type: ["vecation"],
    location: {
      city: "Paris",
      country: "France",
    },
    entryType: "cost",
    cost: 1800,
    link: "https://www.toureiffel.paris/en",
  },
  {
    name: "Ramanagara Adventure",
    mainImg: ramanagara,
    sliderImgs: [wonderla, wonderla2, wonderla3, wonderla4, wonderla5],
    category: "Camping",
    type: ["Adventurous", "vecation"],
    location: {
      city: "Bengaluru",
      state: "Karnataka",
      country: "India",
    },
    entryType: "cost",
    cost: 1059,
    link: "https://www.thrillophilia.com/tours/adventure-camp-in-ramanagara",
  },
  {
    name: "Cubbon Park",
    mainImg: cubbon,
    sliderImgs: [wonderla, wonderla2, wonderla3, wonderla4, wonderla5],
    category: "Park",
    type: ['Educational'],
    location: {
      city: "Bengaluru",
      state: "Karnataka",
      country: "India",
    },
    entryType: "Free",
    link: "https://karnatakatourism.org/tour-item/cubbon-park/",
  },
  {
    name: "Coorg Adventure Resort",
    mainImg: coorg,
    sliderImgs: ["coorg1", "coorg2", "coorg3"],
    category: "Resort",
    type: ["Adventurous", "Vacation"],
    location: {
      city: "Coorg",
      state: "Karnataka",
      country: "India",
    },
    entryType: "cost",
    cost: 5000,
    link: "https://coorgadventureresort.com",
  },
  {
    name: "Mysore Palace",
    mainImg: palace1,
    sliderImgs: ["mysore1", "mysore2", "mysore3"],
    category: "Historical",
    type: ["Educational", "Vacation"],
    location: {
      city: "Mysore",
      state: "Karnataka",
      country: "India",
    },
    entryType: "cost",
    cost: 300,
    link: "https://mysorepalace.gov.in",
  },
  {
    name: "Nandi Hills Camping",
    mainImg: nandi,
    sliderImgs: ["nandi1", "nandi2", "nandi3"],
    category: "Camping",
    type: ["Adventurous", "Vacation"],
    location: {
      city: "Chikkaballapur",
      state: "Karnataka",
      country: "India",
    },
    entryType: "cost",
    cost: 1500,
    link: "https://nandihillscamping.com",
  },
  {
    name: "Bannerughatta Biological",
    mainImg: Bannerughatta,
    sliderImgs: [wonderla, wonderla2, wonderla3, wonderla4, wonderla5],
    category: "Park",
    type: ['Educational'],
    location: {
      city: "Bengaluru",
      state: "Karnataka",
      country: "India",
    },
    entryType: "cost",
    cost: 260,
    link: "https://bannerughattabiopark.org/",
  },
  {
    name: "Jollywood Studios",
    mainImg: jollywood,
    sliderImgs: [wonderla, wonderla2, wonderla3, wonderla4, wonderla5],
    category: "Theme Park",
    type: ["Adventurous", "Educational", "vecation"],
    location: {
      city: "Bengaluru",
      state: "Karnataka",
      country: "India",
    },
    entryType: "cost",
    cost: 1179,
    link: "https://www.jollywood.co.in/",
  },
  {
    name: "Kanva Lake Camping",
    mainImg: kanva,
    sliderImgs: [wonderla, wonderla2, wonderla3, wonderla4, wonderla5],
    category: "Camping",
    type: ["Adventurous", "vecation"],
    location: {
      city: "Bengaluru",
      state: "Karnataka",
      country: "India",
    },
    entryType: "cost",
    cost: 1349,
    link: "https://www.thrillophilia.com/tours/lakeside-camping-in-kanva",
  },
  {
    name: "Shree Banashankari Devi",
    mainImg: banashankari,
    sliderImgs: [wonderla, wonderla2, wonderla3, wonderla4, wonderla5],
    category: "Devotional",
    type: ['Devotional'],
    location: {
      city: "Bengaluru",
      state: "Karnataka",
      country: "India",
    },
    entryType: "Free",
    link: "https://www.avathi.com/place/banashankari-temple/2625",
  },
  {
    name: "Shivoham Shiva",
    mainImg: shivoham,
    sliderImgs: [wonderla, wonderla2, wonderla3, wonderla4, wonderla5],
    category: "Devotional",
    type: ['Devotional'],
    location: {
      city: "Bengaluru",
      state: "Karnataka",
      country: "India",
    },
    entryType: "Free",
    link: "https://www.avathi.com/place/banashankari-temple/2625",
  },
  {
    name: "Lalbagh Botanical Garden",
    mainImg: lalbagh,
    sliderImgs: [wonderla, wonderla2, wonderla3, wonderla4, wonderla5],
    category: "Park",
    type: ['Educational'],
    location: {
      city: "Bengaluru",
      state: "Karnataka",
      country: "India",
    },
    entryType: "cost",
    cost: 25,
    link: "https://lalbaghbotanicalgarden.in/",
  },
];
