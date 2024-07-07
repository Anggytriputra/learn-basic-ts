describe("array", function () {
  it("should some with javacsript", function () {
    const names: string[] = ["Eko", "Budi", "joko"];
    const values: number[] = [1, 2, 3];

    console.info(names);
    console.info(values);
  });

  it("should support read only array", function () {
    const hobbies: ReadonlyArray<string> = ["Membaca", "Menulis"];

    console.info("hobbies", hobbies);

    // hobbies[0] = "Main Games";
  });
});
