import { shallow } from "enzyme"
import AddCategory from "../../components/AddCategory"
import React from "react"
import "@testing-library/jest-dom"

describe("Testing into the component AddCategory.jsx -- <AddCategory />", () => {
  const setCategories = jest.fn()
  let wrapper
  beforeEach(() => {
    jest.clearAllMocks()
    wrapper = shallow(<AddCategory setCategories={setCategories} />)
  })

  test("Should show it correctly", () => {
    const wrapper = shallow(<AddCategory setCategories={setCategories} />)
    expect(wrapper).toMatchSnapshot()
  })

  //   test("Should change the input text box", () => {
  //     const wrapper = shallow(<AddCategory setCategories={setCategories} />)
  //     const input = wrapper.find("input")
  //     const  = "HolaMundo!"
  //     input.simulate("change", { target: { value } })
  //     const inputValue = input.prop("value")
  //     expect(inputValue).toBe(value)
  //   })

  test("Should not post the information on Submit", () => {
    wrapper.find("form").simulate("submit", { preventDefault() {} })
    expect(setCategories).toHaveBeenCalled()
  })

  test("Should call setCategories and clean the search text input box", () => {
    const value = "Hola Mundo !"
    wrapper.find("input").simulate("change", { target: { value } })
    wrapper.find("form").simulate("submit", { preventDefault() {} })
    expect(setCategories).toHaveBeenCalled()
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function))
    expect(wrapper.find("input").prop("value")).toBe("")
  })
})
