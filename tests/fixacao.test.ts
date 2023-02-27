import {fixacao} from "../src/fixacao"

describe("fixacao", () => {
    test("receber uma string e retornar um array de strings onde cada item é uma letra da palavra original", () => {
        const result = fixacao("oi")

        expect(result).toEqual(["o", "i"])
    })
})