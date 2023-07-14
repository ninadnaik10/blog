import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetaData from "components/getPostMetaData";
import Background from "@/components/Background";
import BlogHead from "@/components/BlogHead";
import { format } from "date-fns";

const getPostContent = (slug) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetaData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

export async function generateMetadata({params}){
  return {
    title: getPostContent(params.slug).data.title,
    description: getPostContent(params.slug).data.subtitle,
  }
}

export default function BlogPage(props) {
  const slug = props.params.slug;
  const postContent = getPostContent(slug);
  const headProps = {
    title: postContent.data.title,
    dateText: "Posted on " + format(Date.parse(postContent.data.date), "LLLL d, yyyy"),
  }
  return (
    <>
      {/* <Background {...bgProps}/> */}
      <div className="post-body">
        <div className="post-inner">
      <BlogHead {...headProps}/>

          <Markdown>{postContent.content}</Markdown>
        </div>
      </div>
    </>
  );
}
