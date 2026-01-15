export class BerlinClock {
  translateSingleMinutes(time: string): string {
    if(time == "00:01:00") return "JXXX";
    if(time == "00:02:00") return "JJXX";
    if(time == "00:03:00") return "JJJX";
    if(time == "00:04:00") return "JJJJ";
    return "XXXX";
  }
}
