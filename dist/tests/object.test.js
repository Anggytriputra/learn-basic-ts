"use strict";
describe("Object ", function () {
    it("Should support in typescript", function () {
        const person = {
            id: "1",
            name: "eko",
        };
        console.info(person);
        person.id = "2";
        person.name = "Anggy Triputra";
        console.info(person);
    });
});
