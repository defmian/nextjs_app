import Container from "./Container";
import Logo from "./Logo";
import ArrowRight from "../assets/arrow_forward_black_24dp.svg";

export default function Footer({ darkMode }) {
  return (
    <footer className="relative px-8 bg-accent-2 ">
      <Container>
        <div className="py-12 flex flex-col items-center lg:items-start lg:flex-row md:justify-between">
          <div className="pb-12 sm:pb-8 lg:pr-24 lg:w-1/3">
            <Logo />
            <p className="mt-4 select-none font-lighter text-accent-3 text-sm">
              My blog about new technologies
            </p>
          </div>
          <div className="w-full xl:w-3/4 flex flex-wrap md:flex-nowrap flex-row md:items-start">
            <div className="w-1/2 pb-4 justify-self-center">
              <span className="pb-1 text-lg font-semibold select-none">
                Blog
              </span>
              <a
                href="#"
                className="my-3 block text-accent-3 font-lighter text-sm"
              >
                Articles
              </a>
              <a
                href="#"
                className="my-3 block text-accent-3 font-lighter text-sm"
              >
                Category
              </a>
              <a
                href="#"
                className="my-3 block text-accent-3 font-lighter text-sm"
              >
                About me
              </a>
            </div>
            <div className="w-1/2 pb-4">
              <span className="pb-1 text-lg font-semibold select-none">
                Contact me
              </span>
              <a
                href="#"
                className="my-3 block text-accent-3 font-lighter text-sm"
              >
                info@cannontech.com
              </a>
              <p className="my-3 block text-accent-3 font-lighter text-sm">
                1-800-900-301
              </p>
              <p className="my-3 w-32 block text-accent-3 font-lighter text-sm">
                1010 Sunset Blv. Palo Alto, California
              </p>
            </div>
            <div className="w-1/2 md:w-1/2">
              <span className="pb-1 text-lg font-semibold select-none">
                Stay up to date
              </span>
              <p className="my-3 block text-accent-3 font-lighter text-sm">
                Subscribe to newsletter
              </p>
              <div>
            
                <div className="relative bg-green-100">
                  <form>
                    <input
                      className="w-full outline-none rounded-md py-2 pl-4 pr-8 border mr-0 text-accent-3 font-lighter text-xs bg-gray-200 focus:border-gray-300"
                      placeholder="Email..."
                    />
                  </form>
                  <div className="absolute right-2 top-2">
                    <svg
                      fill="#B3B3B3"
                      stroke="#b3b3b3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-8 text-accent-3 font-lighter text-xs text-center">
          © Copyright CANNON TECH Damian Dzialo
        </div>
      </Container>
    </footer>
  );
}
