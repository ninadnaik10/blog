import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetaData from "components/getPostMetaData";

const getPostContent = (slug) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult.content;
};

export const generateStaticParams = async () => {
  const posts = getPostMetaData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPage(props) {
  const slug = props.params.slug;
  const content = getPostContent(slug);
  return (
    <div className="post-body">
      <div className="post-inner">
        <Markdown>{content}</Markdown>
      </div>
    </div>
  );
}
