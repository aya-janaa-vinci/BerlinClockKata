export class BerlinClock {
  translateSingleMinutes(time: string): string {
    if (time == "00:01:00") return "JXXX";
    if (time == "00:02:00") return "JJXX";
    if (time == "00:03:00") return "JJJX";
    if (time == "00:04:00") return "JJJJ";
    return "XXXX";
  }

  translateFiveMinutes(time: string) {
    if (time == "00:05:00") return "JXXXXXXXXXX";
    if (time == "00:10:00") return "JJXXXXXXXXX";
    if (time == "00:15:00") return "JJRXXXXXXXX";
    if (time == "00:20:00") return "JJRJXXXXXXX";
    if (time == "00:25:00") return "JJRJJXXXXXX";
    if (time == "00:30:00") return "JJRJJRXXXXX";
    if (time == "00:35:00") return "JJRJJRJXXXX";
    if (time == "00:40:00") return "JJRJJRJJXXX";
    if (time == "00:45:00") return "JJRJJRJJRXX";
    if (time == "00:50:00") return "JJRJJRJJRJX";
    if (time == "00:55:00") return "JJRJJRJJRJJ";
    
    return "XXXXXXXXXXX";
  }

  translateSingleHours(time: string): string {
    if (time == "01:00:00") return "RXXX";
    if (time == "02:00:00") return "RRXX";
    if (time == "03:00:00") return "RRRX";
    if (time == "04:00:00") return "RRRR";

    return "XXXX";
  }

  translateFiveHours(time : string): string {
    if (time == "05:00:00") return "RXXX";
    if (time == "10:00:00") return "RRXX";
    if (time == "15:00:00") return "RRRX";
    if (time == "20:00:00") return "RRRR";

    return "XXXX";
  }

  translateSingleSeconds(time : string): string {
    if(time == "00:00:02") return "J";
    if(time == "00:00:04") return "J";
    if(time == "00:00:06") return "J";
    if(time == "00:00:08") return "J";
    if(time == "00:00:10") return "J";
    return "X";
  }

}
