import { Link, useLoaderData, Form } from "react-router-dom";

const Show = (props) => {
    const post = useLoaderData()
    return (
        <div className="show-card">
            <h1>{post.name}</h1>
            <h4>{post.description}</h4>
            <Link to={post.url}>{post.url}</Link>
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
                    placeholder="Type Description Here"
                    defaultValue={post.description}
                    style={{color: 'white'}}
                />
                <input
                    type="text"
                    name="url"
                    placeholder="Type URL Here"
                    defaultValue={post.url}
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