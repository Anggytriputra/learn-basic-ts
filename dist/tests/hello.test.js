"use strict";
describe("hello", function () {
    // Mengelompokkan tes yang terkait dengan "hello"
    it("should say hello", function () {
        // Definisi tes dengan deskripsi "should say hello"
        const name = "Hello Anggy"; // Inisialisasi variabel name dengan nilai "Hello Anggy"
        expect(name).toBe("Hello Anggy"); // Assertion: Memeriksa apakah nilai name adalah "Hello Anggy"
    });
});
