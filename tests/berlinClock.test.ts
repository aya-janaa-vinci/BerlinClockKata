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

    it("should return JXXXXXXXXXX when given 00:05:00", () => {
      const actual = berlinClock.translateFiveMinutes("00:05:00");
      expect(actual).toBe("JXXXXXXXXXX");
    });

    it("should return JJXXXXXXXXX when given 00:10:00", () => {
      const actual = berlinClock.translateFiveMinutes("00:10:00");
      expect(actual).toBe("JJXXXXXXXXX");
    });

    it("should return JJRXXXXXXXX when given 00:15:00", () => {
      const actual = berlinClock.translateFiveMinutes("00:15:00");
      expect(actual).toBe("JJRXXXXXXXX");
    });

    it("should return JJRJXXXXXXX when given 00:20:00", () => {
      const actual = berlinClock.translateFiveMinutes("00:20:00");
      expect(actual).toBe("JJRJXXXXXXX");
    });
    
    it("should return JJRJJXXXXXX when given 00:25:00", () => {
      const actual = berlinClock.translateFiveMinutes("00:25:00");
      expect(actual).toBe("JJRJJXXXXXX");
    });

    it("should return JJRJJRXXXXX when given 00:30:00", () => {
      const actual = berlinClock.translateFiveMinutes("00:30:00");
      expect(actual).toBe("JJRJJRXXXXX");
    });

    it("should return JJRJJRJXXXX when given 00:35:00", () => {
      const actual = berlinClock.translateFiveMinutes("00:35:00");
      expect(actual).toBe("JJRJJRJXXXX");
    });

    it("should return JJRJJRJJXXX when given 00:40:00", () => {
      const actual = berlinClock.translateFiveMinutes("00:40:00");
      expect(actual).toBe("JJRJJRJJXXX");
    });

    it("should return JJRJJRJJRXX when given 00:45:00", () => {
      const actual = berlinClock.translateFiveMinutes("00:45:00");
      expect(actual).toBe("JJRJJRJJRXX");
    });
  });
});
