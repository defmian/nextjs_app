import Link from 'next/link'
import { Image } from 'react-datocms';


export default function PostPreviewCategory(title, excerpt, date, slug) {


    return (
        <>
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
            <a aria-label={title}>
                <div className="p-2">
                    
                </div>
            </a>
        </Link>
        </>

    )
}