import Logo from "./Logo";
import Link from "next/link";

export default function NavMenu() {
  return (
    <>
      <ul className="flex flex-col lg:flex-row items-center list-none lg:ml-auto font-robotomono text-white text-base">
        <li className="p-5 inline-block ">
          <Link className="" href="/">
            <a>HOME</a>
          </Link>
        </li>
        <li className="p-5 inline-block hover:text-gray-100 hover:border-b-8">
          <Link href="/category">
            <a>CATEGORY</a>
          </Link>
        </li>
        <li className="p-5 inline-block">
          <Link href="/about">
            <a>ABOUT</a>
          </Link>
        </li>
        <li className="p-5 inline-block">
          <Link href="/contact">
            <a>CONTACT</a>
          </Link>
        </li>
      </ul>
    </>
  );
}
