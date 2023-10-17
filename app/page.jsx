import Background from "./components/Background";
import CarHeader from "./components/CarHeader";
import Nav from "./components/Nav";

const headerConfigs = [
  {
    header: "Model Y",
    content: "Lease starting at $399/mo*",
    subContent: "",
    link: "",
    linkContent: "",
    color: "#fff",
    btnOne: true,
    btnOneLink: "/",
    btnOneContent: "Order Now",
    btnOneClass:
      "font-medium flex items-center justify-center bg-buttonprimary px-6 py-1 sm:w-64 w-full h-10 rounded-md",
    btnTwo: true,
    btnTwoLink: "/",
    btnTwoContent: "Demo Drive",
    btnTwoClass:
      "font-medium flex items-center justify-center bg-buttonsecondary text-black px-6 py-1 sm:w-64 w-full h-10 rounded-md",
    footer: "*Excludes taxes and fees with price subject to change. Available in select states. ",
    footerLinkContent: "See Details",
    footerLink: "/",
  },
  {
    header: "Model 3",
    content: "Lease starting at $329/mo*",
    subContent: "",
    link: "",
    linkContent: "",
    color: "#fff",
    btnOne: true,
    btnOneLink: "/",
    btnOneContent: "Order Now",
    btnOneClass:
      "font-medium flex items-center justify-center bg-buttonsecondary text-black px-6 py-1 sm:w-64 w-full h-10 rounded-md",
    btnTwo: true,
    btnTwoLink: "/",
    btnTwoContent: "Demo Drive",
    btnTwoClass:
      "font-medium flex items-center justify-center bg-buttonprimary  px-6 py-1 sm:w-64 w-full h-10 rounded-md",
    footer: "*Excludes taxes and fees with price subject to change. Available in select states. ",
    footerLinkContent: "See Details",
    footerLink: "/",
  },
  {
    header: "Model X",
    content: "From $68,590*",
    subContent: "After Federal Tax Credit & Est. Gas Savings",
    link: "",
    linkContent: "",
    color: "#222",
    btnOne: true,
    btnOneLink: "/",
    btnOneContent: "Order Now",
    btnOneClass:
      "font-medium flex items-center justify-center bg-buttonsecondary text-black px-6 py-1 sm:w-64 w-full h-10 rounded-md",
    btnTwo: true,
    btnTwoLink: "/",
    btnTwoContent: "Demo Drive",
    btnTwoClass:
      "font-medium flex items-center justify-center bg-buttonprimary px-6 py-1 sm:w-64 w-full h-10 rounded-md",
    footer: "*Price before incentives and savings is $79,990, excluding taxes and fees. Subject to change. ",
    footerLinkContent: "Learn about est. gas savings.",
    footerLink: "/",
  },
  {
    header: "Model S",
    content: "From $71,090*",
    subContent: "After Est. Gas Savings",
    link: "",
    linkContent: "",
    color: "#222",
    btnOne: true,
    btnOneLink: "/",
    btnOneContent: "Order Now",
    btnOneClass:
      "font-medium flex items-center justify-center bg-buttonsecondary text-black px-6 py-1 sm:w-64 w-full h-10 rounded-md",
    btnTwo: true,
    btnTwoLink: "/",
    btnTwoContent: "Demo Drive",
    btnTwoClass:
      "font-medium flex items-center justify-center bg-buttonprimary px-6 py-1 sm:w-64 w-full h-10 rounded-md",
    footer: "*Price before savings is $74,990, excluding taxes and fees. Subject to change. ",
    footerLinkContent: "Learn about est. gas savings.",
    footerLink: "/",
  },
  {
    header: "Experience Tesla",
    content: "",
    subContent: "Schedule a Demo Drive Today",
    link: "",
    linkContent: "",
    color: "#fff",
    btnOne: true,
    btnOneLink: "/",
    btnOneContent: "Demo Drive",
    btnOneClass:
      "font-medium flex items-center justify-center border-4 border-white font-semibold px-6 py-1 sm:w-64 w-full h-10 rounded-md",
    btnTwo: false,
    btnTwoLink: "/",
    btnTwoContent: "",
    btnTwoClass: "",
    footer: "",
    footerLinkContent: "",
    footerLink: "",
  },
  {
    header: "Solar Panels",
    content: "",
    subContent: "",
    link: "/",
    linkContent: "Schedule a Virtual Consultation",
    color: "#222",
    btnOne: true,
    btnOneLink: "/",
    btnOneContent: "Order Now",
    btnOneClass:
      "font-medium flex items-center justify-center bg-buttonsecondary text-black px-6 py-1 sm:w-64 w-full h-10 rounded-md",
    btnTwo: true,
    btnTwoLink: "/",
    btnTwoContent: "Learn More",
    btnTwoClass:
      "font-medium flex items-center justify-center bg-buttonprimary px-6 py-1 sm:w-64 w-full h-10 rounded-md",
    footer: "",
    footerLinkContent: "",
    footerLink: "",
  },
  {
    header: "Solar Roof",
    content: "",
    subContent: "Produce Clean Energy From Your Roof",
    link: "",
    linkContent: "",
    color: "#222",
    btnOne: true,
    btnOneLink: "/",
    btnOneContent: "Order Now",
    btnOneClass:
      "font-medium flex items-center justify-center bg-buttonsecondary text-black px-6 py-1 sm:w-64 w-full h-10 rounded-md",
    btnTwo: true,
    btnTwoLink: "/",
    btnTwoContent: "Learn More",
    btnTwoClass:
      "font-medium flex items-center justify-center bg-buttonprimary px-6 py-1 sm:w-64 w-full h-10 rounded-md",
    footer: "",
    footerLinkContent: "",
    footerLink: "",
  },
  {
    header: "Powerwall",
    content: "",
    subContent: "",
    link: "",
    linkContent: "",
    color: "#222",
    btnOne: true,
    btnOneLink: "/",
    btnOneContent: "Order Now",
    btnOneClass:
      "font-medium flex items-center justify-center bg-buttonsecondary text-black px-6 py-1 sm:w-64 w-full h-10 rounded-md",
    btnTwo: true,
    btnTwoLink: "/",
    btnTwoContent: "Learn More",
    btnTwoClass:
      "font-medium flex items-center justify-center bg-buttonprimary px-6 py-1 sm:w-64 w-full h-10 rounded-md",
    footer: "",
    footerLinkContent: "",
    footerLink: "",
  },
  {
    header: "Accessories",
    content: "",
    subContent: "",
    link: "",
    linkContent: "",
    color: "#222",
    btnOne: true,
    btnOneLink: "/",
    btnOneContent: "Shop Now",
    btnOneClass:
      "font-medium flex items-center justify-center bg-buttonsecondary text-black px-6 py-1 sm:w-64 w-full h-10 rounded-md",
    btnTwo: false,
    btnTwoLink: "/",
    btnTwoContent: "Demo Drive",
    btnTwoClass:
      "font-medium flex items-center justify-center bg-buttonprimary px-6 py-1 sm:w-64 w-full h-10 rounded-md",
    footer: "",
    footerLinkContent: "",
    footerLink: "",
  },
];

export default function Home() {
  return (
    <>
      <main>
        <Nav headerConfigs={headerConfigs} />
        <CarHeader headerConfigs={headerConfigs} />
        <Background />
      </main>
    </>
  );
}

