import { BerlinClock } from "../src/berlinClock";

describe("BerlinClock", () => {
  describe("translate single minute", () => {
    let berlinClock = new BerlinClock();

    it("should return XXXX when given 00:00:00", () => {
    
      const actual = berlinClock.translateSingleMinutes("00:00:00");

      expect(actual).toBe("XXXX"); //X représente la lampe
    });

    it("should return JXXX when given 00:01:00", () => {

      const actual = berlinClock.translateSingleMinutes("00:01:00");

      expect(actual).toBe("JXXX");
    });

    it("should return JJXX when given 00:02:00", () => {
        
        const actual = berlinClock.translateSingleMinutes("00:02:00");

        expect(actual).toBe("JJXX");
    })
  });
});
