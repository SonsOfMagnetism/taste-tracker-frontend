import { Link } from "react-router-dom";

const Post = ({post}) => {
    return(
        <div>
            <Link to={`/restaurants/${post.id}`}>
                <h2>{post.name}</h2>
            </Link>
            <h4>{post.description}</h4>
            <Link to={post.url}>{post.url}</Link>
        </div>
    )
}

export default Post;