import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";

const getPostContent = (slug) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  // return {
  //   title: matterResult.data.title,
  //   date: matterResult.data.date,
  //   subtitle: matterResult.data.subtitle,
  //   slug: file.replace('.mdx', ''),
  // }
  return matterResult.content;
};

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
