import Post from "../components/Post"
import { useLoaderData } from "react-router-dom"

const Index = (props) => {
    const restaurants = useLoaderData()
    return restaurants.map((post) => <Post post={post} key={post.id}/>)
}

export default Index