import { MarqueeModel } from "./Marquee"

const data = {
  text: "hi",
}
const marquee = MarqueeModel.create(data)

test("marquee text", () => {
  expect(marquee.text).toBe("hi")
})

