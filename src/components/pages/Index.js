import Post from "../Post"
import {Form, useLoaderData} from "react-router-dom"

const Index = (props) => {
  const restaurants = useLoaderData()
  return <>
  <h2>Create a Restaurant</h2>
  <Form action="/create" method="post">
    <input type="text" name="name" placeholder="Restaurant Name"/>
    <input type="text" name="description" placeholder="Description of Restaurant"/>
    <input type="text" name="url" placeholder="URL of Restaurant"/>
    <button>Create New Restaurant</button>
  </Form>
  {restaurants.map((post) => <Post post={post} key={post.id}/>)}
  </>
}

export default Index