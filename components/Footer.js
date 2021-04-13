import Container from "./Container";
import Logo from "./Logo";
import ArrowRight from "../assets/arrow_forward_black_24dp.svg";

export default function Footer() {
  return (
    <footer className="bg-accent-2">
      <Container>
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between py-12">
          <div className="flex flex-col mt-2">
            <Logo />
            <p className="mt-4 font-lighter text-accent-3 text-sm ">
              My blog about technologies
            </p>
          </div>
          <div className="flex flex-row justify-center ">
            <div>
              <div className="flex flex-col text-lg font-medium">Blog</div>
              <a
                href="#"
                className="my-3 block text-accent-3 font-lighter text-sm"
              >
                Articles
              </a>
              <a
                href="#"
                className="my-3 block  text-accent-3 font-lighter text-sm"
              >
                Events
              </a>
              <a
                href="#"
                className="my-3 block  text-accent-3 font-lighter text-sm"
              >
                Category
              </a>
            </div>
            <div>
              <div className="flex flex-col text-lg">Contact me</div>
              <a
                href="#"
                className="my-3 block  text-accent-3 font-lighter text-sm"
              >
                info@cannontech.com
              </a>
              <p className="my-3 block  text-accent-3 font-lighter text-sm">
                1-800-900-301
              </p>
              <p className="my-3 block  text-accent-3 font-lighter text-sm w-7/12">
                1010 Sunset Blv. Palo Alto, California
              </p>
            </div>
            <div>
              <div className="flex flex-col text-lg ">Stay up to date</div>
              <p className="my-3 block  text-accent-3 font-lighter text-sm">
                Subscribe to newsletter
              </p>
              <div className="relative">
                <div>
                  <form className="">
                    <input
                      className="outline-none rounded-md py-2 pl-4 pr-8 border mr-0  text-accent-3 font-lighter text-sm bg-gray-200 focus:border-gray-300 focus:boxShadow active:bg-gray-100 "
                      placeholder="Email..."
                    />
                  </form>
                </div>
                <div className="absolute right-4 top-2 h-4 w-4 ">
                  <ArrowRight fill="gray" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" text-accent-3 font-lighter text-xs text-center py-8">
          © Copyright CANNON TECH Damian Dzialo
        </div>
      </Container>
    </footer>
  );
}
