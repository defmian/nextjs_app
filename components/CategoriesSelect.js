import CategoryPreview from "./CategoryPreview";

export default function CategoriesSelect({categories}) {

    return (
        <div className="flex flex-col lg:flex-row flex-nowrap py-12">
            {categories.map(category => (
                <CategoryPreview 
                key={category.id}
                id={category.id}
                name={category.name}
                responsiveImage={category.categoryImage.responsiveImage}
                excerpt={category.excerpt}
                />
            ))}
        </div>
    )
}