import { expect, it } from "vitest";

export const getName = (params: { first: string, last?: string }) => {
  if (params.first) {
    return `${params.first} ${params.last}`
  }
  return params.first
}

it("Sid - Should run this first name", () => {
  const name = getName({
    first: "Siddhath"
  })
  expect(name).toBe("Siddharth")
})

it("Sid - Should run this with first & last name", () => {
  const name = getName({
    first: "Siddharth",
    last: "Kamble"
  })
  
  expect(name).toBe("Siddharth Kamble")
})