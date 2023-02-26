import { Link, useLoaderData, Form } from "react-router-dom";

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
            <h2>Create a Restaurant</h2>
            <Form action={`/update/${post.id}`} method="post">
                <input
                    type="text"
                    name="name"
                    placeholder="Type Name Here"
                    defaultValue={post.name}
                />
                <input
                    tyoe="text"
                    name="description"
                    placeholder="Type Descripttion Here"
                    defaultValue={post.description}
                />
                <button>Update Restaurant</button>
            </Form>
            <Form action={`/delete/${post.id}`} method="post">
                <button>Delete Restaurant</button>
            </Form>
            <Link to="/">
                <button>Go Back</button>
            </Link>
        </div>
    )
}

export default Show