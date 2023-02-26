import { Link, useLoaderData } from "react-router-dom";

const Show = () => {
    const post = useLoaderData()
    const div = {
        textAlign: "center",
        border: "3px solid green",
        width: "80%",
        margin: "30px auto"
    }
    return (
        <div style={div}>
            <h1>{post.name}</h1>
            <h2>{post.description}</h2>
            <Link to="/">
                <button>Go Back</button>
            </Link>
        </div>
    )
}

export default Show