import { Link } from "react-router-dom";

const Post = ({post}) => {
    const div = {
        textAlign: "center",
        border: "3px solid",
        margin: "10px auto",
        width: "80%"
    }
    return(
        <div style={div}>
            <Link to={`/restaurants/${post.id}`}>
                <h1>{post.name}</h1>
            </Link>
            <h2>{post.description}</h2>
            <Link to={post.url}>{post.url}</Link>
        </div>
    )
}

export default Post;