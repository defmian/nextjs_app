import React, { useEffect, useState } from "react";
import Link from "next/link";
import CoverImage from "./CoverImage";
import Date from "./Date";

export default function PostPreview({
  title,
  coverImage,
  slug,
  date,
  category,
  excerpt,
}) {
  return (
    <div className="h-auto p-4 lg:p-6">
      <div className="relative h-full border-2 border-gray-50 overflow-hidden hover:bg-accent-2">
        <div className="h-auto overflow-hidden">
          <CoverImage
            title={title}
            responsiveImage={coverImage.responsiveImage}
            slug={slug}
          />
        </div>
        <div className="pb-20 px-4 pt-2">
          <Date dateString={date} />
          <Link as={`/posts/${slug}`} href="/posts/[slug]">
            <a aria-label={title} className="hover:underline">
              <h1 className="title-font text-2xl font-normal text-gray-900 mb-3">
                {title}
              </h1>
            </a>
          </Link>
          <p className="leading-relaxed text-sm font-normal mb-3">{excerpt}</p>
        </div>
        <div className="w-full absolute bottom-0">
          <div className="flex justify-between flex-wrap">
            <p className="p-4 bg-accent-2 text-xs font-light text-accent-3">
              #technews
            </p>
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="inline-block p-4 text-accent-3 text-sm font-bold font-robotomono uppercase items-center md:mb-2 lg:mb-0">
                Read More
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
