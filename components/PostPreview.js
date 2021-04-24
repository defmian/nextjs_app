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
    <div className="p-2 w-80">
      <div className="h-full border-2 border-gray-50 overflow-hidden">
        <CoverImage
          title={title}
          responsiveImage={coverImage.responsiveImage}
          slug={slug}
        />
        <div className="p-5">
          <Date dateString={date} />
          <h1 className="title-font text-2xl font-normal text-gray-900 mb-3">
            {title}
          </h1>
          <p className="leading-relaxed text-sm font-normal mb-3">{excerpt}</p>
          <div className="flex justify-between flex-wrap">
            <div className="p-2 bg-accent-2">
              <p className="text-xs font-light text-accent-3">#technews</p>
            </div>
            <div>
              <a className="text-accent-3 text-sm font-bold font-robotomono uppercase inline-flex items-center md:mb-2 lg:mb-0">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
