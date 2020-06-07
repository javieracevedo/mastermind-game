import masterMind from "../../src/core/mastermind";

describe("Test mastermind game methods", () => {

  describe("Test selected random color code method", () => {
    it("selects color properly", () => {
  
      const colorCodes = {
        BLUE: "blue",
        GREEN: "green",
        ORANGE: "orange",
        PURPLE: "purple",
        RED: "red",
        YELLOW: "yellow"
      }
  
      const randomColorCode = masterMind.selectRandomColorCode(colorCodes)
  
      expect(typeof randomColorCode).toBe("string")
    })
  
    it("color codes parameter should be present", () => {
      const randomColorCode = masterMind.selectRandomColorCode()
      expect(randomColorCode).toBe("Color code parameter is missing.")
    })
  })

  describe("Test mastermind code generation", () => {
    it("returns an array", () => {
      const code = masterMind.generateCode();
      expect(Array.isArray(code)).toBe(true);
    })

    it("returns the correct amount of codes in the array", () => {
      const codeLimit = masterMind.codeLimit;
      const code = masterMind.generateCode();
      expect(code.length).toBe(codeLimit);
    })
  })

  describe("Test get hints results", () => {
    it("returns all black when user code is correct", () => {
      const userCode = ["red", "blue", "orange", "purple"];
      const machineCode = ["red", "blue", "orange", "purple"];

      const hints = masterMind.getHints(userCode, machineCode);
      const isAllBlack = hints.every(hint => hint == "black")
      expect(isAllBlack).toBe(true);
    })

    it("returns all empty when user code does not match any", () => {
      const userCode = ["red", "blue", "red", "blue"];
      const machineCode = ["yellow", "green", "orange", "purple"];

      const hints = masterMind.getHints(userCode, machineCode);
      const isAllWhite = hints.every(hint => hint == "")
      expect(isAllWhite).toBe(true);
    })

    it("returns some white when user code has some correct color out of position", () => {
      const userCode = ["blue", "yellow", "red", "orange"];
      const machineCode = ["yellow", "green", "orange", "purple"];

      const hints = masterMind.getHints(userCode, machineCode);
      const hasSomeWhite = hints.some(hint => hint == "white")
      expect(hasSomeWhite).toBe(true);
    })

    it("returns some black when user code matches some correct solor in correct position", () => {
      const userCode = ["yellow", "blue", "red", "orange"];
      const machineCode = ["yellow", "green", "orange", "purple"];

      const hints = masterMind.getHints(userCode, machineCode);
      const hasSomeBlack = hints.some(hint => hint == "black")
      expect(hasSomeBlack).toBe(true);
    })

    it("returns some empty when a peg in user code does not exist in machine code", () => {
      const userCode = ["yellow", "blue", "red", "orange"];
      const machineCode = ["green", "green", "orange", "purple"];

      const hints = masterMind.getHints(userCode, machineCode);
      const hasSomeEmpty = hints.some(hint => hint == "")
      expect(hasSomeEmpty).toBe(true);
    })

  })

  describe("Test check win conditions", () => {
    it("returns true when hints are all black", () => {
      const fakeHintResult = new Array(4).fill("black");
      const win = masterMind.checkWin(fakeHintResult);
      expect(win).toBe(true);
    })

    it("returns flase when at least one of the values are not black", () => {
      const fakeHintResult = new Array(3).fill("black");
      fakeHintResult.push("white");
      const win = masterMind.checkWin(fakeHintResult);
      expect(win).toBe(false);
    })
  })
})