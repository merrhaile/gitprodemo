function filterGreater(arr, target) {
  return arr.filter((item) => item > target);
}

function reverseString(str){
  temp = "";
  for(let i = str.length -1; i >= 0; i--){
    temp += str[i];
  }
  return temp;
}
