import Post from "../Post"
import {Form, useLoaderData} from "react-router-dom"

const Index = (props) => {
  const restaurants = useLoaderData()
  return <>
  <h1>Taste Tracker</h1>
  <h4>“Taste Tracker” is a web application that allows users to view, create, delete, and update their favorite restaurants. The app will later on feature user authentication, ensuring that only authorized users can access and manipulate restaurant information. Until then go ahead and add your favorite restaurants to the public list!</h4>
  <h3 className="form-title">Add New Restaurant</h3>
  <Form action="/create" method="post">
    <input type="text" name="name" placeholder="Restaurant Name"/>
    <input type="text" name="description" placeholder="Description of Restaurant"/>
    <input type="text" name="url" placeholder="URL of Restaurant"/>
    <button>Submit</button>
  </Form>
  <h2>List of Restaurants</h2>
  <div className="card">
  {restaurants.map((post) => <Post post={post} key={post.id}/>)}
  </div>
  </>
}

export default Index