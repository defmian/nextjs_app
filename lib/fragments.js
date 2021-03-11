//Fragments let you construct sets of fields, and then include them in queries where you need to.
export const responsiveImageFragment = `
fragment responsiveImageFragment on ResponsiveImage {
    alt
    title
    src
    srcSet
    webpSrcSet
    width
    height
    aspectRatio
    base64
    webpSrcSet
}
`;
