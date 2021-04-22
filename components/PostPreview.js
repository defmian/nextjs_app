import Link from "next/link";
import CoverImage from "./CoverImage";
// import Date from "./Date";

export default function PostPreview({
  title,
  excerpt,
  slug,
  date,
  responsiveImage,
}) {
  return (
    <div class="p-4 ">
      <div class="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
        <div class="lg:h-48 bg-gray-400 md:h-36 w-full object-cover object-center">
          {/* <img src="" alt=""/> */}
        </div>
        <div class="p-6">
          <h2 class="bg-gray-400 animate-pulse h-4 w-1/4 mb-2"></h2>
          <h1 class="w-1/2 mb-4 h-6 animate-pulse bg-gray-500"></h1>
          <p class="leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-400"></p>
          <p class="leading-relaxed mb-3 w-2/3 h-3 animate-pulse bg-gray-400"></p>
          <p class="leading-relaxed mb-3 w-1/2 h-3 animate-pulse bg-gray-400"></p>
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-4 h-4 animate-ping  ml-2"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
          <div class="flex items-center flex-wrap ">
            <a class="bg-indigo-300 h-4 animate-pulse mt-2 w-32 inline-flex items-center md:mb-2 lg:mb-0"></a>
            <span class="bg-indigo-300 w-16 mt-2 h-4 animate-pulse mr-3 px-2 inline-flex items-center ml-auto leading-none text-sm pr-5 py-1"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
