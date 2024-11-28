export default function BlogHead(props) {
    return(<>
        <h1 className="blog-title1">{props.title}</h1>
        <p className="blog-date blog-info italic-p">{props.dateText}</p></>
    )
}