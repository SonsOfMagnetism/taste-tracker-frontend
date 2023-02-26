import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import App from "./App"
import { indexLoader, showLoader } from "./loaders"
import Index from "./components/Index"
import Show from "./components/Show"
import { createAction, updateAction, deleteAction } from "./actions"

const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" element={<App/>}>
            <Route path="" element={<Index/>} loader={indexLoader}/>
            <Route path="restaurants/:id" element={<Show/>} loader={showLoader}/>
            <Route path="create" loader={createAction}/>
            <Route path="update/:id" loader={updateAction}/>
            <Route path="delete/:id" loader={deleteAction}/>
        </Route>
    </>
))

export default router