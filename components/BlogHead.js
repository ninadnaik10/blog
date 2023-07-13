export default function BlogHead(props) {
    return(<>
        <h1 className="blog-title">{props.title}</h1>
        <p className="blog-date">{props.dateText}</p></>
    )
}