import { sayHello } from "../src/say-hello";
describe("say hello", function () {
    it("should return say hello", function () {
        expect(sayHello("Anggy")).toBe("Hello Anggy");
    });
});
