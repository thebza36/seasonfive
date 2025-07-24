import {
  FaTools,
  FaLightbulb,
  FaHandsHelping,
  FaCheckCircle,
  FaClock,
  FaDraftingCompass,
  FaUserFriends,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaHome,
  FaBuilding,
} from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import {
  blog1,
  blog2,
  blog3,
  member1,
  member2,
  member3,
  member4,
  member5,
  member6,
  portfolio1,
  portfolio2,
  portfolio3,
  portfolio4,
  portfolio5,
  portfolio6,
  user1,
  user2,
  user3,
  user4,
} from "./assets";


export const navigation = [
  {
    label: "About Us",
    to: "about",
  },
  {
    label: "Services",
    to: "services",
  },
  {
    label: "Blog",
    to: "portfolio",
  },
  {
    label: "Team",
    to: "team",
  },
  {
    label: "Testimonials",
    to: "testimonials",
  },
  {
    label: "Contact Us",
    to: "contact",
  },
];

export const keypoints = [
  {
    icon: <FaTools />,
    title: "Expert Craftsmanship",
  },
  {
    icon: <FaRegClock />,
    title: "On-Time, Within Budget",
  },
  {
    icon: <FaLightbulb />,
    title: "Innovative Solutions",
  },
  {
    icon: <FaHandsHelping />,
    title: "Client-Centered Approach",
  },
];

export const whyChooseUs =[
  {
    title: "Unmatched Quality",
    icon: <FaCheckCircle />,
    description: "Craftsmanship guaranteed",
  },
 {
    title: "Timely Delivery",
    icon: <FaClock />,
    description: "Water delivery on schedule",
  },
  {
    title: "Innovative Solutions",
    icon: <FaDraftingCompass />,
    description: "Technical and modern solutions",
  },
  {
    title: "Focused Service",
    icon: <FaUserFriends />,
    description: "Prioritizing client satisfaction always",
  },
];

export const services = [
  {
    title: "Water Refilling",
    icon: <FaHome />,
    description: `We offer water refilling @ R1.50 per liter, high-quality purified water for everyone.`,
  },
  {
    title: "Bottled Supplies",
    icon: <FaBuilding />,
    description: `Get any quantity at any volume, for any function you intend to offer bottled water
    Our water undergoes a multi-step purification process, ensuring only the purest hydration.".`,
  },
  {
    title: "Cooperate Plans",
    icon: <FaTools />,
    description: `Subscribe for Regular Deliveries, we have different plans to suit your budget.`,
  },
];

export const portfolio = [
  {
    title: "Clean Water, Clear Future: Why Purification Matters",
    image: portfolio1,
    date: "May 15, 2026",
    category: "Residential",
    description: `Water is life, but in many parts of the world, clean water is not always a given. 
    Whether you’re living in an urban area or a rural community, 
    ensuring access to safe drinking water is essential for health, hygiene, and overall well-being. 
    This is where water purification comes in.`,
  },
  {
    title: "Why Purify Water?",
    image: portfolio2,
    date: "November 30, 2026",
    category: "Commercial",
    description: `While water may look clear, it can still contain harmful bacteria, viruses, chemicals, and other impurities that can affect your health. 
    Unfiltered water can lead to a range of health issues, from minor stomach discomfort to serious diseases. Whether it's tap water, 
    well water, or water from natural sources, purification is the key to ensuring it's safe.`,
  },
  {
    title: "The Benefits of Clean Water",
    image: portfolio3,
    date: "July 12, 2026",
    category: "health and Care",
    description: `When you purify your water, you’re not just protecting your health—you’re 
    enhancing the quality of your life. Clean water improves digestion, boosts energy, 
    and helps maintain healthy skin. Plus, it’s better for the environment, 
    reducing plastic waste from bottled water`,
  },
  {
    title: " Water and Environment",
    image: portfolio4,
    date: "February 1, 2025",
    category: "Water Purification",
    description: `Water impurities refers to how free water is from contaminants and impurities
    such as microorganisms,chemicals,solids and dissolved substances.Pure water is ideally clear,colorless
    odorless and tasteless. However, in practice water is considered "pure" based on its intended
    use-drinking water must meet health standards, while lab-grade water must be nearly free of all
    impurities`,
  },
  {
    title: "Quantum Computing?",
    image: portfolio5,
    date: "June 3, 2025",
    category: "Technology",
    description: `While quantum computing is still in its infancy, its potential is immense. 
    Unlike classical computers, which use bits to process information, quantum computers use 
    quits—allowing them to perform calculations that would take regular computers millennia to solve.`,
  },
  {
    title: "Graphene-based Filtration",
    image: portfolio6,
    date: "March 5, 2026",
    category: "Water Purification",
    description: `Graphene, a material made of a single layer of carbon atoms arranged in a 
    two-dimensional lattice, has been making headlines for its incredible properties. 
    One of the most promising applications of graphene is in water filtration. Due to its 
    thinness and unique structure, graphene can be used to  create ultra-efficient membranes
     that filter out nanoparticles, salts, and even bacteria from water`,
  },
];

export const teamMembers = [
  {
    fullName: "Thebeko Maboee",
    image: member1,
    title: "Managing Director",
    socialMedias:[
      {name:"Facebook",icon:<FaFacebook/>,href:"http://facebook.com"},
      {name:"LinkedIn",icon:<FaLinkedin/>,href:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,href:"https://www.youtube.com"},
      {name:"Instagram",icon:<FaInstagram/>,href:"http://instagram.com"},
    ]
  },
  {
    fullName: "Mabongani Buthelezi",
    image: member2,
    title: "General Manager",
    socialMedias:[
      {name:"Facebook",icon:<FaFacebook/>,href:"http://facebook.com"},
      {name:"LinkedIn",icon:<FaLinkedin/>,href:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,href:"https://www.youtube.com"},
      {name:"Instagram",icon:<FaInstagram/>,href:"http://instagram.com"},
    ]
  },
  {
    fullName: "James Buthelezi",
    image: member3,
    title: "Water Plumber",
    socialMedias:[
      {name:"Facebook",icon:<FaFacebook/>,href:"http://facebook.com"},
      {name:"LinkedIn",icon:<FaLinkedin/>,href:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,href:"https://www.youtube.com"},
      {name:"Instagram",icon:<FaInstagram/>,href:"http://instagram.com"},
    ]
  },
  {
    fullName: "Lindiwe Buthelezi",
    image: member4,
    title: "Life Scientist",
    socialMedias:[
      {name:"Facebook",icon:<FaFacebook/>,href:"http://facebook.com"},
      {name:"LinkedIn",icon:<FaLinkedin/>,href:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,href:"https://www.youtube.com"},
      {name:"Instagram",icon:<FaInstagram/>,href:"http://instagram.com"},
    ]
  },
  {
    fullName: "Mateboho kabi",
    image: member5,
    title: "Public Relations",
    socialMedias:[
      {name:"Facebook",icon:<FaFacebook/>,href:"http://facebook.com"},
      {name:"LinkedIn",icon:<FaLinkedin/>,href:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,href:"https://www.youtube.com"},
      {name:"Instagram",icon:<FaInstagram/>,href:"http://instagram.com"},
    ]
  },
  {
    fullName: "Caswell Mckenzie",
    image: member6,
    title: "Electrician",
    socialMedias:[
      {name:"Facebook",icon:<FaFacebook/>,href:"http://facebook.com"},
      {name:"LinkedIn",icon:<FaLinkedin/>,href:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,href:"https://www.youtube.com"},
      {name:"Instagram",icon:<FaInstagram/>,href:"http://instagram.com"},
    ]
  },
];

export const testimonials = [
  {
    name: "Top Tile Northam",
    image: user1,
    review: `The team at Sediba Still water exceeded our expectations. Their attention to detail and professionalism made our water deal a smooth and enjoyable process.`,
  },
  {
    name: "CA Brand",
    image: user2,
    review: `From start to finish, the water supply was handled with incredible skill and efficiency. I highly recommend Sediba Still Water for any water supply.`,
  },
  {
    name: "Power Finance Northam",
    image: user3,
    review: `Working with Sediba Still Water was a fantastic experience. Their team was professional, creative, and committed to delivering exactly what we envisioned.`,
  },
  {
    name: "El-shaddai Ministies",
    image: user4,
    review: `Exceptional service and quality workmanship! Sediba Still Water transformed our community drinkable water availability efficient and effective. They are true professionals.`,
  },
];

export const blogs = [
  {
    title: "Water refill @ R1.50 per/Liter",
    content: `Bring any size to refill at One Rand fifty Per Liter.We offer water at
    its best quality.`,
    image: blog1,
  },
  {
    title: "500ml 24 Pack",
    content: `We sell 24 pack at a very affordable price of R144.00, One Hundred and forty four
    Rands.`,
    image: blog2,
  },
  {
    title: "5 Litres",
    content: `Five Litres is available at R25.00. We also do deliveries for locals at a price contact
    for full details`,
    image: blog3,
  },
];

export const footer = [
  {
    title: "Company",
    routes: [
      {
        name: "About Us",
        href: "#",
      },
      {
        name: "Our Team",
        href: "#",
      },
      {
        name: "Careers",
        href: "#",
      },
      {
        name: "Contact Us",
        href: "#",
      },
    ],
  },
  {
    title: "Services",
    routes: [
      {
        name: "Water refilling",
        href: "#",
      },
      {
        name: "Bottled water Supply",
        href: "#",
      },
      {
        name: "Ice Packages",
        href: "#",
      },
      {
        name: "Monthly Water Deals",
        href: "#",
      },
    ],
  },
  {
    title: "Resources",
    routes: [
      {
        name: "Blog",
        href: "#",
      },
      {
        name: "Case Studies",
        href: "#",
      },
      {
        name: "FAQs",
        href: "#",
      },
      {
        name: "Privacy Policy",
        href: "#",
      },
    ],
  },
];

export const socialHandles = [
  {
    name: "Facebook",
    icon: <FaFacebook />,
    link: "https://www.facebook.com",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    link: "https://www.instagram.com",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com",
  },
  {
    name: "Youtube",
    icon: <FaYoutube />,
    link: "https://www.youtube.com",
  },
];
