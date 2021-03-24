import Logo from "./Logo";
import Link from "next/link";

export default function NavMenu() {
  return (
    <div className="">
      <ul className="flex flex-row space-between font-robotomono text-white text-base">
        <li className="inline-block mr-24">
          <Link className="" href="/">
            <a>HOME</a>
          </Link>
        </li>
        <li className="inline-block mr-24">
          <Link href="/category">
            <a>CATEGORY</a>
          </Link>
        </li>
        <li className="inline-block mr-24">
          <Link href="/about">
            <a>ABOUT</a>
          </Link>
        </li>
        <li className="inline-block">
          <Link href="/contact">
            <a className="block lg:inline-block mr-24">CONTACT</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
//     <div class="flex items-center justify-between flex-wrap bg-teal p-6">
//       <div class="flex items-center flex-no-shrink text-white mr-6">
//         <span class="font-semibold text-xl tracking-tight">Tailwind CSS</span>
//       </div>
//       <div class="block lg:hidden">
//         <button class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
//           <svg
//             class="h-3 w-3"
//             viewBox="0 0 20 20"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <title>Menu</title>
//             <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
//           </svg>
//         </button>
//       </div>
//       <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
//         <div class="text-sm lg:flex-grow">
//           <a
//             href="#responsive-header"
//             class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4"
//           >
//             Docs
//           </a>
//           <a
//             href="#responsive-header"
//             class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4"
//           >
//             Examples
//           </a>
//           <a
//             href="#responsive-header"
//             class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white"
//           >
//             Blog
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }
