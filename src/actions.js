import { redirect } from "react-router-dom";

const URL = "https://taste-tracker-backend.onrender.com"

export const createAction = async ({request}) => {
    const formData = await request.formData()
    const newRestaurant = {
        name: formData.get("name"),
        description: formData.get("description"),
        url: formData.get("url"),
    }
    await fetch(URL + "/restaurants/", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newRestaurant)
    })
    return redirect("/");
}

export const updateAction = async ({request, params}) => {
    const formData = await request.formData()
    const id = params.id
    const updatedRestaurants = {
        name: formData.get("name"),
        description: formData.get("description"),
        url: formData.get("url")
    }
    await fetch(URL + `/restaurants/${id}/`, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedRestaurants)
    })
    return redirect(`/restaurants/${id}/`)
}

export const deleteAction = async ({params}) => {
    const id = params.id
    await fetch(URL + `/restaurants/${id}/`, {
        method: "delete"
    })
    return redirect("/")
}