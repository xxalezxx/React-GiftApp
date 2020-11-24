import React from "react"
import { shallow } from "enzyme"
import "@testing-library/jest-dom"

import { GifGridItem } from "../../components/GifGridItem"

describe("GifGridItem.js - Test", () => {
  const title = "something"
  const url = "https://localhost.com"
  const id = "123"

  test("Should show the correct component with all the corrects values", () => {
    const wrapper = shallow(<GifGridItem title={title} url={url} id={id} />)
    expect(wrapper).toMatchSnapshot()
  })

  test("Should have the <p> with the title i", () => {
    const wrapper = shallow(<GifGridItem title={title} url={url} id={id} />)
    const p = wrapper.find("p")
    expect(p.text().trim()).toBe(title)
  })

  test("Should have the same image as url props", () => {
    const wrapper = shallow(<GifGridItem title={title} url={url} id={id} />)
    const img = wrapper.find("img").prop("src")
    expect(img).toBe(url)
  })

  test("Should have animate_something", () => {
    const wrapper = shallow(<GifGridItem title={title} url={url} id={id} />)
    const animation = "animate__animated animate__bounce animate__delay-2s"
    const animationInside = wrapper.find("div").prop("className")
    expect(animation).toBe(animationInside)
  })
})
