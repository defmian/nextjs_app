import Link from 'next/link'
import { Image } from 'react-datocms';
import Date from "./Date";


export default function PostPreviewCategory({title, excerpt, slug, responsiveImage, date}) {

   return (
     <>
       <div className="py-8 flex flex-col lg:flex-row">
         <div className="">
           <Link as={`/posts/${slug}`} href="/posts/[slug]">
             <a aria-label={title}>
               <Image
                 data={{
                   ...responsiveImage,
                   alt: `Cover Image for ${title}`,
                 }}
                 className="z-2 w-full lg:w-96 xl:w-104 lg:h-full"
               />
             </a>
           </Link>
         </div>
         <div className="relative pl-2 lg:pl-20 pt-4 pb-20 w-full">
           <Date dateString={date} />
           <Link as={`/posts/${slug}`} href="/posts/[slug]">
             <a aria-label={title}>
               <h1 className="pt-2 lg:pt-4 title-font text-3xl lg:text-4xl font-normal hover:underline">
                 {title}
               </h1>
             </a>
           </Link>

           <div className="w-full lg:w-3/4">
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