function switchcase(val) {
  switch (val) {
    case 1:
      console.log(1);
      break;
    case 1:
      console.log(1);
      break;
    case 1:
      console.log(1);
      break;
    case 1:
      console.log(1);
      break;
    case 1:
      console.log(1);
      break;
    case 1:
      console.log(1);
      break;
    case 1:
      console.log(1);
      break;
    case 1:
      console.log(1);
      break;
    case 1:
      console.log(1);
      break;
    case 1:
      console.log(1);
      break;
    case 1:
      console.log(1);
      break;
    case 1:
      console.log(1);
      break;
    case 1:
      console.log(1);
      break;
    case 1:
      console.log(1);
      break;
    case 1:
      console.log(1);
      break;
    case 1:
      console.log(1);
      break;
    case 1:
      console.log(1);
      break;
    case 1:
      console.log(1);
      break;
    case 1:
      console.log(1);
      break;
    case 1:
      console.log(1);
      break;
    default:
      console.log("default");
  }
}

function switchcasearrow(val) {
  switch (val) {
    case 1:
      console.log(1);
      break;
    case 11:
      console.log(1);
      break;
    case 111:
      console.log(1);
      break;
    case 1111:
      console.log(1);
      break;
    case 111111:
      console.log(1);
      break;
    case 12:
      console.log(1);
      break;
    case 13:
      console.log(1);
      break;
    case 198:
      console.log(1);
      break;
    case 14:
      console.log(1);
      break;
    case 15:
      console.log(1);
      break;
    case 155:
      console.log(1);
      break;
    case 16:
      console.log(1);
      break;
    case 166:
      console.log(1);
      break;
    case 17:
      console.log(1);
      break;
    case 177:
      console.log(1);
      break;
    case 1777:
      console.log(1);
      break;
    case 18:
      console.log(1);
      break;
    case 188:
      console.log(1);
      break;
    case 188888:
      console.log(1);
      break;
    case 1888:
      console.log(1);
      break;
    default:
      console.log("default");
  }
}

function testForFun() {
  let result = 0;
  for(let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      for(let j = 0; j < n; j++) {
        for(let k = 0; k < n; k++) {
          if (k % 3 === 0) {
            result += i + j + k;
          } else if (k % 3 === 1){
            result += i - j + k;
          } else {
            result += i + j - k;
          }
        }
      }
    } else {
      for(let m = 0; m < n; m++) {
        for(let o = 0; o < n; o++) {
          if (o % 3 === 0) {
            result += i - m + o;
          } else if (o % 3 === 1){
            result += i + m - o;
          } else {
            result -= i + m + o;
          }
        }
      }
    }
  }

  if(result > 10000) {
    console.log('Result is very big.');
  } else if(result > 5000) {
    console.log('Result is big.');
  } else if(result > 2000) {
    console.log('Result is medium.');
  } else if(result > 1000) {
    console.log('Result is small.');
  } else if(result > 500) {
    console.log('Result is very small.');
  } else {
    console.log('Result is too small.');
  }

  return result;
}

switchcase(1);

switchcasearrow(9)

testForFun()
