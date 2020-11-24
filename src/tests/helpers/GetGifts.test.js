import { getGif } from "../../helpers/getGifts"

describe("GetGifts testing", () => {
  test("Should bring elements (10 elements in total), the limit from the API end point", async () => {
    const gifs = await getGif("batman")
    expect(gifs.length).toBe(10)
  })
  test("Should bring cero elements, i give no category", async () => {
    const gifs = await getGif("")
    expect(gifs.length).toBe(0)
  })
})
