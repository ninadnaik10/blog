import fs from "fs";
import getPostMetaData from "../components/getPostMetaData";
import PostPreview from "../components/PostPreview";
import PostMetadata from "../components/PostMetadata";
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
        <div className="blog-post">
          <h1 className="blog-title first">Thoughts</h1>
          <p className="blog-info thought-info">
            My goal with this blog is to share my thoughts and review some
            educational stuffs. It can be books, academics, technology, etc.
          </p>
          {postPreviews}
        </div>
      </div>
    </>
  );
}
