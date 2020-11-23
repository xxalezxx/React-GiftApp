import { useState, useEffect } from "react"

import { getGif } from "../helpers/getGifts"

export const useFetchGifts = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  })

  useEffect(() => {
    getGif(category).then((imgs) => {
      setState({
        data: imgs,
        loading: false,
      })
    })
  }, [category])

  return state
}
