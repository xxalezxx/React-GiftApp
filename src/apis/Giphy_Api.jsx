const data = {
  searchEndPoint: "api.giphy.com/v1/gifs/search",
  key: "LaNul6JELC9WhfurOQDBaCRNLMU4Hy2M",
  limit: "10",
}

const Giphy_Api = (search) =>
  `https://${data.searchEndPoint}?q=${encodeURI(search)}&limit=${
    data.limit
  }&api_key=${data.key}`

export default Giphy_Api
