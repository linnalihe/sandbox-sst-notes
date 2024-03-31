import { expect, test } from "vitest";
import { calculateCost } from "../src/cost"

test("Lowest tier", ()=> {
    const storedVolume = 10;
    const cost = 4000;
    const expectedCost = calculateCost(storedVolume)
    expect(cost).toEqual(expectedCost)
})

test("Middle tier", ()=>{
    const storedVolume = 100;
    const cost = 20000;
    const expectedCost = calculateCost(storedVolume)
    expect(cost).toEqual(expectedCost)
})

test("Highest tier", () => {
    const storedVolume = 101;
    const cost = 10100;
    const expectedCost = calculateCost(storedVolume)
    expect(cost).toEqual(expectedCost)
})