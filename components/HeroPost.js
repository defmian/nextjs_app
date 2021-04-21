import Header from "./Header";
import Container from "./Container";
import CoverImage from "./CoverImage";
import { Image } from "react-datocms";
import tw from "tailwind-styled-components";

export default function HeroPage({ title, coverImage, excerpt, slug }) {
  return (
    <section className="pt-16 xl:pt-24 bg-accent-1 text-white">
      <div className="container xl:px-24 mx-auto flex flex-col md:flex-row items-center">
        {/* Left Col */}
        <div className="pb-20 flex flex-col w-full pr-9 md:w-1/2 items-start text-center md:text-left">
          <h1 className="text-5xl tracking-wider md:tracking-normal lg:text-6xl xl:text-7xl font-bold leading-snug lg:leading-snug xl:leading-normal">
            {title}
          </h1>
          <p className="pt-8 w-full tracking-wide font-light text-gray-500 text-lg">
            {excerpt}
          </p>
        </div>

        {/* Right col  */}
        <div className="w-full md:w-1/2 text-center items-center">
          {/* <CoverImage
                title={title}
                responsiveImage={coverImage.responsiveImage}
                slug={slug}
              /> */}
          <Image
            data={{
              ...coverImage.responsiveImage,
              alt: `Cover Image for ${title}`,
            }}
            className="w-4/5 z-50 text-center item"
          />
          {/* <button class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
            Subscribe
          </button> */}
        </div>
      </div>
    </section>
  );
}
