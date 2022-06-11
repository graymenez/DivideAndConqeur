let arr = [
  231, 3342, 345, 345, 23, 123, 3522, 3312, 5, 552, 2, 231, 23, 5, 235, 123123,
  2,
];

arr.indexOf(5);

// Linear search
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}

// Binary search attempt

// const binarySearch = (arr, num) => {
//   let sortedarray = arr.sort((a, b) => a - b);
//   let midArrOdd;
//   let midArrEven;
//   sortedarray.length % 2 === 0
//     ? (midArrEven = sortedarray[sortedarray.length / 2])
//     : (midArrOdd = sortedarray[(sortedarray.length - 1) / 2]);

//   //handles even arr lengths
//   if (midArrEven) {
//     // console.log(arr);
//     // console.log(num);
//     // console.log(midArrEven);
//     if (num >= midArrEven) {
//       if (num === midArrEven) {
//         console.log(`We found ${num} in array!`);
//       } else {
//         let rightSideArr = [];
//         for (let i = midArrEven; i <= arr.length; i++) {
//           rightSideArr.push(arr[i]);
//           console.log(arr[i]);
//         }
//         console.log(rightSideArr);
//       }
//     }
//   }
//   console.log(`E:${midArrEven},O:${midArrOdd}`);
// };

// Coles Binary search solution

// function binarySearch(arr, val) {
//   let leftIdx = 0;
//   let rightIdx = arr.length - 1;
//   while (leftIdx <= rightIdx) {
//     let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
//     let middleVal = arr[middleIdx];
//     if (middleVal < val) {
//       leftIdx = middleIdx + 1;
//     } else if (middleVal > val) {
//       rightIdx = middleIdx - 1;
//     } else {
//       return middleIdx;
//     }
//   }
//   return -1;
// }
// let arrNum = [0, 0, 0, 1, 1, 1];

const arrEx = [1, 0, 0, 0, 0];
const countZeros = (arr) => {
  let sorrtedArr = arr.sort();
  let beginingIdx = 0;
  let endingIdx = sorrtedArr.length - 1;
  let zeroCount = 0;
  while (beginingIdx <= endingIdx) {
    let beginingVal = sorrtedArr[beginingIdx];
    let endingVal = sorrtedArr[endingIdx];
    if (beginingVal < 1) {
      zeroCount += 1;
      beginingIdx += 1;
    } else if (endingVal > 0) {
      endingIdx -= 1;
    }
  }
  return zeroCount;
};
let x = [1, 1, 2, 2, 2, 2, 3];
const sortedFrequency = (arr, num) => {
  let beginingIdx = 0;
  let endingIdx = arr.length - 1;
  let numCount = 0;
  while (beginingIdx <= endingIdx) {
    let beginingVal = arr[beginingIdx];
    let endingVal = arr[endingIdx];
    if (beginingVal < num) {
      beginingIdx += 1;
    } else if (endingVal > num) {
      endingIdx -= 1;
    } else if (beginingVal === num) {
      numCount += 1;
      beginingIdx += 1;
    } else if (endingVal === num) {
      endingIdx -= 1;
    }
  }
  if (numCount === 0) {
    return -1;
  }
  return numCount;
};

// I thought arr needed to be sorted in this version of findRotateIndex()

// const findRotatedIndex = (arr, num) => {
//   let sortedArr = arr.sort((a, b) => a - b);
//   let beginingIdx = 0;
//   let endingIdx = sortedArr.length - 1;
//   while (beginingIdx <= endingIdx) {
//     let beginingVal = sortedArr[beginingIdx];
//     let endingVal = sortedArr[endingIdx];
//     if (beginingVal < num) {
//       beginingIdx += 1;
//     } else if (endingVal > num) {
//       endingIdx -= 1;
//     } else if (beginingVal === num) {
//       return beginingIdx;
//     }
//   }
//   return -1;
// };

//Needed more time to do it. Time contrained
const findRotatedIndex = (arr, num) => {};
const findRotationCount = () => {};
const findFloor = () => {};
