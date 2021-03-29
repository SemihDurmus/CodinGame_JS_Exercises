console.log("------Filter Duplicates-----");

function filterDuplicates(data) {
  let arr = new Set();
  data.forEach((item) => {
    arr.add(item);
  });

  let ans = "";
  arr.forEach((item) => {
    ans += `${item} `;
  });
  return ans.trim();
}

console.log(filterDuplicates([7, 6, 4, 3, 3, 4, -6, 9]));
