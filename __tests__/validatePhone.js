import validatePhone from "../lib/validatePhone";

describe("validatePhone", () => {
  it("should return true for a valid phone number", () => {
    const validator = validatePhone("2022243121");
    expect(validator).toBe(true);
  });

  it("should ignore spaces between numbers", () => {
    const validator = validatePhone("202 224 3121");
    expect(validator).toBe(true);
  });

  it("should ignore parentheses between numbers", () => {
    const validator = validatePhone("(202) 224 3121");
    expect(validator).toBe(true);
  });

  it("should ignore hyphens between numbers", () => {
    const validator = validatePhone("(202) 224-3121");
    const validator2 = validatePhone("202-224-3121");
    expect(validator).toBe(true);
    expect(validator2).toBe(true);
  });

  it("should ignore periods between numbers", () => {
    const validator = validatePhone("202.224.3121");
    const validator2 = validatePhone("(202) 224.3121");
    expect(validator).toBe(true);
    expect(validator2).toBe(true);
  });

  it("should return false if letters are present", () => {
    const validator = validatePhone("(202) 224 ABCD");
    const validator2 = validatePhone("(202) 224 3121 WXYZ");
    expect(validator).toBe(false);
    expect(validator2).toBe(false);
  });
});
