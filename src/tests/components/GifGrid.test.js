import { shallow } from "enzyme"
import React from "react"
import "@testing-library/jest-dom"
import { GifGrid } from "../../components/GifGrid"
import { useFetchGifts } from "../../hooks/useFetchGifts"

jest.mock("../../hooks/useFetchGifts")

describe("Testing of GifGrid.js", () => {
  const category = "batman"

  test("Should match with the snapshot", () => {
    useFetchGifts.mockReturnValue({
      data: [],
      loading: true,
    })
    const wrapper = shallow(<GifGrid category={category} />)
    expect(wrapper).toMatchSnapshot()
  })

  test("Should show items when it loads images", () => {
    const gifs = [
      {
        id: "abc",
        url: "asdasdasdasdadassd",
        title: "nada",
      },
      {
        id: "123",
        url: "asdasdasdasdadassd",
        title: "nada",
      },
    ]
    useFetchGifts.mockReturnValue({
      data: gifs,
      loading: false,
    })
    const wrapper = shallow(<GifGrid category={category} />)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find("p").exists()).toBe(false)
    expect(wrapper.find("GifGridItem").length).toBe(gifs.length)
  })
})
