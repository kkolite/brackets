module.exports = function check(str, bracketsConfig) {
  let arr = bracketsConfig.flat();
  let obj = {};
  let stack = [];
  

  for (k = 0; k < arr.length; k+=2) {
    obj[arr[k+1]] = arr[k]
  }
 
  for(i = 0; i < str.length; i++) {
    let top = stack[stack.length - 1];
    if (obj[str[i]] === top && stack.length >= 1) {
      stack.pop();
    }
    
    else if(Object.values(obj).includes(str[i])) {
      stack.push(str[i])
    }
 
    else {return false};
  }
  
  return stack.length === 0
}

