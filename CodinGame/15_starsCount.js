console.log("--------------Stars Count----------------");

//Display #stars in eacr row and each column.
//M is #rows, N is #columns
// Input
// 3
// 4
// ..**
// .**.
// ***.

// Output
// ROWS:
// 2
// 2
// 3
// COLUMNS:
// 1
// 2
// 3
// 1

// n=int(input())
// q=int(input())
// l=[input() for _ in range(n)]
// print("ROWS:")
// for i in range(n):
//     cnt=0
//     for j in range(q):
//         if l[i][j]=='*':cnt+=1
//     print(cnt)
// print("COLUMNS:")
// for i in range(q):
//     cnt=0
//     for j in range(n):
//         if l[j][i]=='*':cnt+=1
//     print(cnt)

const N = 3;
const M = 4;
const S = ["*...", "**..", "***."];

console.log("ROWS");
for (let element of S) {
  let count_stars = 0;
  for (let i = 0; i < element.length; i++)
    if (element[i] === "*") {
      count_stars++;
    }
  console.log(count_stars);
}

console.log("COLUMNS:");
for (let i = 0; i < 4; i++) {
  let count_stars = 0;
  for (let element of S)
    if (element[i] === "*") {
      count_stars++;
    }
  console.log(count_stars);
}
