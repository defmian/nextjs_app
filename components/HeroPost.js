import HeaderHomePage from "./HeaderHomePage";
import { Image } from "react-datocms";
import ArrowRight from "../assets/arrow_forward_black_24dp.svg";
import Link from "next/link";

export default function HeroPage({ title, coverImage, excerpt, slug }) {
  return (
    <section className="pt-16 xl:pt-24 bg-accent-1 text-white">
      <div className="container mx-auto px-24 xl:px-44 flex flex-col md:flex-row items-center">
        {/* Left Col */}
        <div className="md:pr-12 md:pb-8 flex flex-col w-full md:w-1/2 items-center md:items-end text-center md:text-left">
          <HeaderHomePage title={title} slug={slug} />
          <p className="py-4 md:py-8 w-full tracking-wide font-light text-accent-5 text-sm md:text-base xl:text-lg leading-relaxed">
            {excerpt}
          </p>
          <button className="relative invisible md:visible py-2 lg:py-3 pl-4 pr-10 border border-accent-5 hover:border-gray-200 bg-accent-1 uppercase text-xs lg:text-sm text-accent-5 active:scale-105 hover:text-accent-2 font-light  focus:outline-none transform transition duration-200 ease-in-out">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a>
                Continue reading
                <div className="absolute right-2 top-1 lg:top-1/4">
                  <ArrowRight fill="#B3B3B3" />
                </div>
              </a>
            </Link>
          </button>
        </div>

        {/* Right col  */}
        <div className="pt-4 w-1/2 lg:w-2/5">
          <Link as={`/posts/${slug}`} href="/posts/[slug]">
            <a>
              <Image
                data={{
                  ...coverImage.responsiveImage,
                  alt: `Cover Image for ${title}`,
                }}
                className="z-1"
              />
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
