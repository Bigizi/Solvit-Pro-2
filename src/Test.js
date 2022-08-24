function hurdleRace(k, height) {
    // Write your code here
// let k = 5;
// let height = [1, 6, 3, 5, 2];
let tallest = 0;
for(let i = 0; i < height.length; i++) {
  if(tallest < height[i]) {
    tallest = height[i];
  }
}
if(tallest > k) {
  return "tallest - k";
}
else {
  return "0";
}   

}


