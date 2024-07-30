"use client";
import { navbarDirections } from "@/constants/directions";
import ChevronRight from "../icons/ChevronRight";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const currentPath = usePathname();
  return (
    <nav className="flex justify-center items-center h-16">
      <div className="w-[1080px] flex justify-between">
        <ul className="flex">
          {navbarDirections.map((link) => (
            <li
              key={link.id}
              className={currentPath === link.href ? `mr-5 opacity-50` : `mr-5 opacity-20 hover:opacity-50 transition`}
            >
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>

        <div>
          <Link
            href=""
            className="text-blue-600 opacity-50 flex items-center hover:opacity-70 transition"
          >
            Project request
            <ChevronRight />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
