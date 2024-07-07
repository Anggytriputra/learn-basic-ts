import { CustomerType } from "../src/enum";
describe("Enum", function () {
    it("should support in typesript", function () {
        const customer = {
            id: 1,
            name: "Eko",
            type: CustomerType.GOLD,
        };
        console.info(customer);
    });
});
