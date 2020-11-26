import { shallow } from "enzyme"
import React from "react"

import GifExpertApp from "../GifExpertApp"

describe("GifExpertApp testing - Normal function of it", () => {
  test("Should match with the snapshot", () => {
    const wrapper = shallow(<GifExpertApp />)
    expect(wrapper).toMatchSnapshot()
  })

  test("Should have 2 elements because I send it array with 2 elements", () => {
    const categories = ["Batman", "Peter"]
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />)
    expect(wrapper.find("GifGrid").length).toBe(categories.length)
  })
})
