import giphy_api from "../apis/Giphy_Api"

export const getGif = async (category) => {
  const api = giphy_api(category)
  const response = await fetch(api)
  const { data } = await response.json()
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    }
  })
  return gifs
}
