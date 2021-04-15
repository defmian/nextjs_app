import ActiveLink from "./ActiveLink";

export default function NavMenu() {
  return (
    <>
      <ul className="flex flex-col lg:flex-row items-center lg:items-end list-none lg:ml-auto font-robotomono text-white text-base">
        <li className="py-6 inline-block hover:text-gray-300 transition delay-250 duration-300 ease-in-out">
          <ActiveLink activeClassName="active" href="/">
            <a className="p-6">HOME</a>
          </ActiveLink>
        </li>
        <li className="py-6 inline-block hover:text-gray-300 transition delay-250 duration-300 ease-in-out">
          <ActiveLink activeClassName="active" href="/category">
            <a className="p-6">CATEGORY</a>
          </ActiveLink>
        </li>
        <li className="py-6 inline-block hover:text-gray-300 transition delay-150 duration-300 ease-in-out">
          <ActiveLink activeClassName="active" href="/about">
            <a className="p-6">ABOUT</a>
          </ActiveLink>
        </li>
        <li className="py-6 inline-block  hover:text-gray-300 transition delay-150 duration-300 ease-in-out">
          <ActiveLink activeClassName="active" href="/contact">
            <a className="p-6">CONTACT</a>
          </ActiveLink>
        </li>
      </ul>
    </>
  );
}
