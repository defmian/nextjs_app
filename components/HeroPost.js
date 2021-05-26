import HeaderHomePage from "./HeaderHomePage";
import { Image } from "react-datocms";
import ArrowRight from "../assets/arrow_forward_black_24dp.svg";
import Link from "next/link";

export default function HeroPage({ title, coverImage, excerpt, slug }) {
  return (
    <section className="pt-28 xl:pt-44 bg-accent-1">
      <div className="container mx-auto px-8 items-end">
        <div className="flex flex-col lg:flex-row items-center md:items-end text-left">
          <div className="lg:pb-8 xl:pb-16">
            <HeaderHomePage title={title} slug={slug} />
            <p className="pb-4 pr-12 tracking-wide font-light text-accent-5 text-sm md:text-base xl:text-lg leading-relaxed">
              {excerpt}
            </p>
          </div>
          <div className="relative pt-4 lg:pt-0 lg:w-11/12 xl:w-full">
            <div className="absolute z-10 bottom-0">
              <button className="relative py-4 lg:py-5 pl-6 pr-12 hover:border-gray-200 bg-accent-1 uppercase text-xs lg:text-sm text-accent-5 active:scale-105 hover:text-accent-2 font-light  focus:outline-none transform transition duration-200 ease-in-out">
                <Link as={`/posts/${slug}`} href="/posts/[slug]">
                  <a>
                    Continue reading
                    <div className="absolute right-2 top-3 lg:top-1/3">
                      <ArrowRight fill="#B3B3B3" />
                    </div>
                  </a>
                </Link>
              </button>
            </div>
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a>
                <Image
                  data={{
                    ...coverImage.responsiveImage,
                    alt: `Cover Image for ${title}`,
                  }}
                  className="w-full"
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
