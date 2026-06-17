import { cleanInput } from "./repl.js";
import {describe, expect, test} from "vitest";

describe.each([
    {
        input: "where does a   body   end?",
        expected: ["where", "does", "a", "body", "end?"],
    },
    {
    input: "  ",
    expected: [],
    },
    {
        input: "     HELLO       WORLD!    ",
        expected: ["hello", "world!"],
    },
    {
        input: "I fEEl like guCCi maNe in 2006",
        expected: ["i", "feel", "like", "gucci", "mane", "in", "2006"],
    },
    {
    input: "  hello  world  ",
    expected: ["hello", "world"],
  },
])("cleanInput($input)", ({input, expected}) => {
    test(`Expected: ${expected}`, () => {
        const actual = cleanInput(input);
        expect(actual).toHaveLength(expected.length);
        for (const i in expected) {
            expect(actual[i]).toBe(expected[i]);
        }
    });
});