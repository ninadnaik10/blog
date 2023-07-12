import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props) => {
    const options = { day: "numeric", month: "long", year: "numeric" };
  return (
    <>
  <div className="blog-post-preview">
    <Link href={`/blog/${props.slug}`}>
      <h2 className="blog-title">{props.title}</h2>
    </Link>
    <p className="blog-info">
      {props.subtitle}
    </p>
    <p className="blog-info italic-p">Posted on {props.date/*.toLocaleDateString("en-US", options)*/}</p>
  </div>
  <hr className="divider" />
</>

  );
};

export default PostPreview;