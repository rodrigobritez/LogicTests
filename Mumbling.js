// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
  var count = 0;
  var str = "";
  s.split("").map((c) => {
    count++;
    var a = 0;
    for (; a < count; a++) {
      if (a == 0) str += c.toUpperCase();
      else str += c.toLowerCase();
    }
    if (s.length != count) str += "-";
  });
  return str;
}

//BEST RESPONSE

function accum(s) {
  return s
    .split("")
    .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
    .join("-");
}
