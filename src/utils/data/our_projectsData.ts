interface Projects {
  id: string,
  imgUrl: string,
  title: string,
  description: string,
  pageUrl: string,
  technologies?: string

}
const ourProjects: Projects[] = [
  {
    id: "project-1",
    imgUrl: "/city-kicks.png",
    title: "city kicks",
    description: "clothing shop offering a variety of clothing items.",
    pageUrl: "https://igugu-empire-projects.netlify.app",
  },
  {
    id: "project-4",
    imgUrl: "/igugu-projects.png",
    title: "igugu projects",
    description:
      "igugu empire is a company that offers varieties of construction and garderning services.",
    pageUrl: "https://igugu-empire-projects.netlify.app",
  },

  {
    id: "project-3",
    imgUrl: "/shoe-freaks1.png",
    title: "Shoe Freaks South-Africa",
    description:
      "shoe freaks is an online store that sells shoes to its customers",
    pageUrl: "https://jhb-shoefreaks.vercel.app/",
  },
  {
    id: "project-2",
    imgUrl: "/zoom.png",
    title: "zoom security",
    description: "portfolio website for a security services company.",
    pageUrl: "https://igugu-empire-projects.netlify.app",
  },
 
  {
    id: "project-5",
    imgUrl: "/moti.png",
    title: "moti",
    description:
      "an online mall type with multiple registered shops selling their stuff",
    pageUrl: "https://moti.netlify.app",
  },
  {
    id: "project-6",
    imgUrl: "/generation.png",
    title: "genexx community",
    description: "a dynamic community of versatile professionals, excelling in diverse fields and fostering collaboration for innovative solutions.",
    technologies: "next JS, mui5",
    pageUrl: ""
  },
  {
    id: "project-7",
    imgUrl: "/universal-kicks.png",
    title: "universal kicks",
    description:
      "Explore our online store for trendy shoes and clothing essentials. Elevate your style with just a click.",
    pageUrl: "https://universal-kicks.vercel.app",
  },
  {
    id: "project-8",
    imgUrl: "/the-blue-boutique.png",
    title: "The Blue Boutique",
    description:
      "The Blue Boutique: Your one-stop shop for a variety of stylish clothing.",
    technologies: "react JS, mui5, formik ",
    pageUrl: "https://the-blue-boutique.vercel.app",
  },
];
export default ourProjects;
