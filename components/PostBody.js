import { StructuredText, Image } from "react-datocms";

export default function PostBody({ content }) {
  return (
    <div className="pb-12 w-4/5 lg:w-3/5 mx-auto">
      <div className="prose max-w-full sm:prose-sm sm:max-w-full md:prose md:max-w-full lg:prose lg:max-w-full">
        {/* <div className=""> */}
        <StructuredText
          data={content}
          renderBlock={({ record }) => {
            if (record.__typename === "ImageBlockRecord") {
              return <Image data={record.image.responsiveImage} />;
            }
            return (
              <>
                <pre>{JSON.stringify(record, null, 2)}</pre>
              </>
            );
          }}
        />
      </div>
    </div>
  );
}
