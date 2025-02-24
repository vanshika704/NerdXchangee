import { FloatingDock } from "./ui/floating-doc";
import {
  IconHome,
  IconBook,
  IconUsers,
  IconMessageCircle,
  IconUser,
  IconSearch,
  IconAward,
} from "@tabler/icons-react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-6 w-6 text-white" />
      ),
      href: "/",
    },
    {
      title: "Discover",
      icon: (
        <IconSearch className="h-6 w-6 text-white" />
      ),
      href: "/discover",
    },
    {
      title: "Teach",
      icon: (
        <IconAward className="h-6 w-6 text-white" />
      ),
      href: "/editor",
    },
    {
      title: "Connect",
      icon: (
        <IconUsers className="h-6 w-6 text-white" />
      ),
      href: "/connect",
    },
    {
      title: "Messages",
      icon: (
        <IconMessageCircle className="h-6 w-6 text-white" />
      ),
      href: "/messages",
    },
    {
      title: "Resources",
      icon: (
        <IconBook className="h-6 w-6 text-white" />
      ),
      href: "/resources",
    },
    {
      title: "Profile",
      icon: (
        <IconUser className="h-6 w-6 text-white" />
      ),
      href: "/profile",
    },
  ];

  return (
    <div className="flex items-center justify-center h-[5rem] w-full">
      <FloatingDock
        mobileClassName="translate-y-20"
        items={links}
        className="bg-transparent border-b border-zinc-900 border-opacity-20 shadow-md p-2 backdrop-blur-sm"
      >
        {links.map((link, index) => (
          <div key={index} className="relative group">
            <Link to={link.href} className="flex items-center justify-center">
              {link.icon}
            </Link>
            {/* Title appears on hover and shows below the icon */}
            <span className="absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-4 text-white text-md opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              {link.title}
            </span>
          </div>
        ))}
      </FloatingDock>
    </div>
  );
}
