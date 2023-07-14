import Link from "next/link";
import { PostMetadata } from "./PostMetadata";
import { format } from "date-fns";

const PostPreview = (props) => {
  return (
    <>
  <div className="blog-post-preview">
    <Link href={`/blog/${props.slug}`}>
      <h2 className="blog-title">{props.title}</h2>
    </Link>
    <p className="blog-info">
      {props.subtitle}
    </p>
    <p className="blog-info italic-p">Posted on {format(Date.parse(props.date), "LLLL d, yyyy")/*.toLocaleDateString("en-US", options)*/}</p>
  </div>
  <hr className="divider" />
</>

  );
};

export default PostPreview;