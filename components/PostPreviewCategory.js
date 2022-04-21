import Link from "next/link";
import { Image } from "react-datocms";
import Date from "./Date";

export default function PostPreviewCategory({
  title,
  excerpt,
  slug,
  responsiveImage,
  date,
}) {
  return (
    <>
      <div className="py-8 flex flex-col lg:flex-row w-full h-84">
        <div className="h-64 w-1/2 lg:w-3/4 xl:w-1/2 overflow-hidden bg-green-200">
          {/* Image */}
          <div className="w-full h-full bg-green-400">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a aria-label={title}>
                <Image
                  data={{
                    ...responsiveImage,
                    alt: `Cover Image for ${title}`,
                  }}
                  className="w-full"
                />
              </a>
            </Link>
          </div>
        </div>
        {/* Desc */}
        <div className="relative pl-4 w-full h-64">
          <Date dateString={date} />
          <Link as={`/posts/${slug}`} href="/posts/[slug]">
            <a aria-label={title}>
              <h1 className="pt-2 lg:pt-4 title-font text-3xl font-normal hover:underline">
                {title}
              </h1>
            </a>
          </Link>

          <div className="w-full">
            <p className="pt-4 leading-relaxed text-base font-normal text-gray-800">
              {excerpt}
            </p>
          </div>
          <div className="text-right absolute xl:right-6 xl:bottom-10 right-2 bottom-2">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a aria-label={title}>
                <button className="px-6 py-4 invisible md:visible font-bold font-robotomono bg-accent-2 uppercase text-accent-3 hover:bg-accent-4 transition duration-300 focus:outline-white outline-none ease-in-out">
                  READ MORE
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
