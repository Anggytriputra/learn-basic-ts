"use strict";
describe("array", function () {
    it("should some with javacsript", function () {
        const names = ["Eko", "Budi", "joko"];
        const values = [1, 2, 3];
        console.info(names);
        console.info(values);
    });
    it("should support read only array", function () {
        const hobbies = ["Membaca", "Menulis"];
        console.info("hobbies", hobbies);
        // hobbies[0] = "Main Games";
    });
});
