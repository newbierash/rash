"use client";
import { navbarDirections } from "@/constants/directions";
import ChevronRight from "../icons/ChevronRight";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const currentPath = usePathname();
  return (
    <nav className="w-full h-12 flex justify-center items-center">
      <div className="w-[800px] flex justify-between">
        <ul className="flex items-center">
          {navbarDirections.map((link) => (
            <li
              key={link.id}
              className={
                currentPath === link.href
                  ? `mr-5 text-black`
                  : `mr-5 text-black opacity-50 hover:opacity-100 transition`
              }
            >
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>

        <div>
          <Link
            href="/"
            className="flex items-center font-medium p-1 pl-3 rounded-md text-blue-600 bg-transparent hover:bg-gray-50 transition"
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
