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
    });

    it("should return JJJX when given 00:03:00", () => {
      const actual = berlinClock.translateSingleMinutes("00:03:00");

      expect(actual).toBe("JJJX");
    });

    it("should return JJJJ when given 00:04:00", () => {
      const actual = berlinClock.translateSingleMinutes("00:04:00");

      expect(actual).toBe("JJJJ");
    });
  });

  describe("translate five minutes", () => {
    let berlinClock = new BerlinClock();

    it("should return XXXXXXXXXXX when given 00:00:00", () => {
      const actual = berlinClock.translateFiveMinutes("00:00:00");

      expect(actual).toBe("XXXXXXXXXXX");
    });

    it("should return JXXXXXXXXXX when given 00:00:05", () => {
      const actual = berlinClock.translateFiveMinutes("00:00:05");
      expect(actual).toBe("JXXXXXXXXXX");
    })
  });
});
