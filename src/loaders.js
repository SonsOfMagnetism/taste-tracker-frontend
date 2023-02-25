const URL = "https://taste-tracker-backend.onrender.com"

export const indexLoader = async () => {
    const response = await fetch(URL + "/restaurants/")
    const restaurants = await response.json()
    return restaurants
}

export const showLoader = async({params}) => {
    const response = await fetch(URL + `/restaurants/${params.id}/`)
    const restaurant = await response.json()
    return restaurant
}