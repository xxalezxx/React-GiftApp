import { useFetchGifts } from "../../hooks/useFetchGifts"
import { renderHook } from "@testing-library/react-hooks"

describe("useFetchGifts testing [ customHook ]", () => {
  test("Should return the initial state", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifts("batman")
    )
    const { data, loading } = result.current
    await waitForNextUpdate()
    expect(data).toEqual([])
    expect(loading).toBe(true)
  })

  test("Should return an array with img and loading false", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifts("batman")
    )
    await waitForNextUpdate()
    const { data, loading } = result.current
    expect(data.length).toEqual(10)
    expect(loading).toBe(false)
  })
})
