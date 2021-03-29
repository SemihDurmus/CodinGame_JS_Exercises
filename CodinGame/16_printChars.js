console.log("--------------Print Chars----------------");
const E = "1# 2O 4$ 12+";
const D = E.split(" ");
let ans = "";

function seperateNr(str) {
  var res = [];
  var matches = str.match(/(\d+)/);
  res.push(parseInt(matches[0]));
  let ch = str.slice(-1);
  res.push(ch);
  return res;
}

for (const element of D) {
  let ch = seperateNr(element)[1];
  let times = seperateNr(element)[0];
  ans += ch.repeat(times);
}
console.log(ans);
