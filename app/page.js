import fs from "fs";
import getPostMetaData from "../components/getPostMetaData";
import PostPreview from "../components/PostPreview";
import  PostMetadata  from "../components/PostMetadata";
import Background from "@/components/Background";

// const getPostMetaData = () => {
//   const folder = "posts/";
//   const files = fs.readdirSync(folder);
//   const markdownFiles = files.filter((fn) => fn.endsWith(".md"));
//   const slugs = markdownFiles.map((fn) => fn.replace(".md", ""));
// };

export default function Home() {
  const postMetaData = getPostMetaData();
  const postPreviews = postMetaData.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));
  // const quotes = quoteApi();
  return (
    <>
    {/* <Background {...quotes}/> */}
      <div className="posts-div">
        <div className="blog-post">{postPreviews}</div>
      </div>
    </>
  );
}
