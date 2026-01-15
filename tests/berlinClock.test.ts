import { BerlinClock } from "../src/berlinClock";

describe("BerlinClock", () => {
  describe("translate single minute", () => {
    it("should return XXXX when given 00:00:00", () => {
      let berlinClock = new BerlinClock();

      const actual = berlinClock.translateSingleMinutes("00:00:00");

      expect(actual).toBe("XXXX"); //X représente la lampe
    });
  });
});
