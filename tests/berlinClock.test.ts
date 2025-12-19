import { BerlinClock } from "../types";


describe("berlin-clock", () => {
    describe("simpleMinute", () => {
        it("should return all lights off when given 00:00:00", () => {

const berlinClock = new BerlinClock();

    const actual = berlinClock.convertMinuteLineOne("00:00:00")

            expect(actual).toBe("XXXX"); //X représente la lampe
        })
    })
})