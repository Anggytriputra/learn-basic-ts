import { Employe, Manager } from "../src/employe";
import { Seller } from "../src/seller";

describe("Interfcae", function () {
  it("should support in typescript", function () {
    const seller: Seller = {
      id: 1,
      name: "Toko ABC",
      nib: "123212",
      npwp: "2212121",
    };

    seller.name = "Toko EKo";
    // nib tidak bisa di ubah karna  nib proprty ya adalah readonly
    // seller.nib = 454521;

    console.info(seller);
  });

  it("should support function interface", function () {
    // (value1, value2 adalaha parameter ya): number return adalah number
    interface AddFunction {
      (value1: number, value2: number): number;
    }

    const add: AddFunction = (value1: number, value2: number): number => {
      return value1 + value2;
    };

    expect(add(2, 3)).toBe(5);
  });

  it("Should support indexable interface", function () {
    interface StringArray {
      [index: number]: string;
    }

    const names: StringArray = ["Anggy", "Tri", "Putra"];

    console.info(names[0]);
    console.info(names[1]);
    console.info(names[2]);
    console.info(names);
  });

  it("Should support indexable interface for non number index", function () {
    interface StringDictionary {
      [key: string]: string;
    }

    const dictionary: StringDictionary = {
      name: "Eko",
      address: "Indonesia",
    };

    expect(dictionary.name).toBe("Eko");
    expect(dictionary["address"]).toBe("Indonesia");
  });

  it("Should support extends interface", function () {
    const employe: Employe = {
      id: "1",
      name: "Anggy",
      division: "IT",
    };

    console.info(employe);

    const manager: Manager = {
      id: "2",
      name: "Anggy Triputra",
      division: "IT ",
      numberOfEmployees: 10,
    };

    console.info("manager", manager);
  });
});
