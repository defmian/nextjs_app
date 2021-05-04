
import PostPreviewCategory from "./PostPreviewCategory"

export default function PostByCategories({allPosts}) {

    return (
        <div className="grid grid-flow-row grid-col-1">
            {allPosts.map(post => (
                <PostPreviewCategory
                key={post.slug}
                slug={post.slug}
                title={post.title}
                responsiveImage={post.coverImage.responsiveImage}
                excerpt={post.excerpt}
                date={post.date}
                />
            ))}
        </div>
    );
}