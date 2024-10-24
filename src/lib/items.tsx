import React from "react";
import {
  BriefcaseBusiness,
  Building,
  Cloud,
  Cloudy,
  CreditCard,
  Factory,
  Globe,
  HandCoins,
  HandHeart,
  HardDrive,
  Palette,
  Server,
  ShoppingBag,
  ShoppingCart,
  Zap,
} from "lucide-react";
import { FaWordpress } from "react-icons/fa";
import { PlanetCareItem, PlanItem } from "./interfaces";

export const planetCare: PlanetCareItem[] = [
  {
    icon: <Zap />,
    title: "Green energy",
    desc: "We use Ecotricity for our power, the first company in the UK to offer true 100% renewable energy.",
  },
  {
    icon: <Server />,
    title: "Green data centres",
    desc: "All power consumed at our data centres comes from 100% renewable sources. All centres have achieved a PUE (Power Usage Effectiveness) rating of at least 1.2.",
  },
];

export const generalPlans: PlanItem[] = [
  {
    icon: <Cloud />,
    title: "Web Hosting",
    desc: "Lightning-fast and reliable cPanel hosting for your website.",
    buttonText: "Join us today",
    href: "/shared-hosting",
  },
  {
    icon: <CreditCard />,
    title: "Business Hosting",
    desc: "PCI-compliant hosting built for commercial success.",
    buttonText: "Start now",
    href: "/shared-hosting",
  },
  {
    icon: <FaWordpress className="w-6 h-6" />,
    title: "Managed WordPress",
    desc: "Fully optimized WordPress platform with expert management.",
    buttonText: "Get Wordpress",
    href: "/shared-hosting",
  },
  {
    icon: <Server />,
    title: "Virtual Private Servers",
    desc: "Complete scalability with unbeatable performance and power.",
    buttonText: "Start your server",
    href: "/shared-hosting",
  },
];

export const navSections = {
  hosting: [
    {
      title: "Web hosting",
      href: "/hosting",
      description: "Powerful web hosting with free SSL and backups included.",
      icon: <Cloud />,
    },
    {
      title: "Business hosting",
      href: "/hosting/business-hosting",
      description:
        "100% PCI-DSS compliant hosting with 24/7 emergency support.",
      icon: <BriefcaseBusiness />,
    },
    {
      title: "Managed WordPress",
      href: "/hosting/wordpress",
      description:
        "WordPress hosting built for performance and managed by experts.",
      icon: <FaWordpress className="w-6 h-6" />,
    },
    {
      title: "Reseller hosting",
      href: "/hosting/reseller",
      description:
        "Fully white-label hosting with cPanel to run your hosting business.",
      icon: <HandCoins />,
    },
  ],
  servers: [
    {
      title: "Virtual private servers",
      href: "/servers/vps",
      description:
        "Customisable and scalable VPS built to your specifications.",
      icon: <Server />,
    },
    {
      title: "Dedicated servers",
      href: "/servers/dedicated",
      description:
        "Fully managed dedicated servers deployed on our fast network.",
      icon: <HardDrive />,
    },
    {
      title: "Public cloud",
      href: "/servers/cloud",
      description:
        "Our powerful & convenient cloud platform built to deploy instantly.",
      icon: <Cloudy />,
    },
    {
      title: "CDN",
      href: "/servers/cdn",
      description: "Load your website faster from anywhere in the world.",
      icon: <Globe />,
    },
  ],
  websites: [
    {
      title: "Website builder",
      href: "/websites/builder",
      description: "Make your own website with just a few easy clicks.",
      icon: <Palette />,
    },
    {
      title: "Online store",
      href: "/websites/store",
      description:
        "Run a simple online store with our convenient website builder.",
      icon: <ShoppingBag />,
    },
  ],
};

export const slideFeatures = [
  "Instant Domain Registration",
  "One-Click WordPress Install",
  "99.9% Uptime Guarantee",
  "Free SSL Certificates",
  "Unlimited Bandwidth",
  "24/7 Expert Support",
  "Automated Daily Backups",
  "Custom DNS Management",
  "PHP Version Control",
  "SSD Storage Solutions",
  "Free Domain Transfer",
  "Email Hosting Included",
  "Website Builder Tools",
  "DDoS Protection",
  "Git Integration",
  "Multi-site Management",
];

export const benefitCards = [
  {
    icon: <Building />,
    title: "Managed",
    description: "Expert consultancy, tailored management and transformative solutions.",
  },
  {
    icon: <Factory />,
    title: "Agencies",
    description: "Give your clients the best hosting possible with no hidden charges.",
  },
  {
    icon: <ShoppingCart />,
    title: "E-commerce",
    description: "Run your online store quickly, easily and sustainably.",
  },
  {
    icon: <HandHeart />,
    title: "Nonprofits & Charities",
    description: "Powerful free hosting on 100% green servers to support your goals.",
  },
];
