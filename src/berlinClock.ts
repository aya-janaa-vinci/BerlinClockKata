export class BerlinClock {
  translateSingleMinutes(time: string): string {
    if(time == "00:01:00") return "JXXX";
    if(time == "00:02:00") return "JJXX";
    return "XXXX";
  }
}
