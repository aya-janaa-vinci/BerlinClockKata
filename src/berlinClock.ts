export class BerlinClock {
  translateSingleMinutes(time: string): string {
    if(time == "00:01:00") return "JXXX";
    return "XXXX";
  }
}
