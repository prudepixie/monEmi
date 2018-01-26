const s = "abppplee";

const dict = ["able", "ale", "apple", "bale", "kangaroo"];

//keep object to track length of word 

// for (let word in dict) {
// }

const sArr = s.split('');
console.log(sArr)
const object = dict.reduce((obj, current, index) => {
  ;
  console.log('current', current);
  console.log('obj', obj);
  sArr.forEach((char, charInd) => {
    console.log(current[charInd] === char);
    obj[current] = 0;
    if (dict[charInd] && dict[charInd] === char) {
      obj[current] += 1; 
      console.log('obj[,', obj[current])
    } else {
      obj[current] = 0
    }
  })
}, {});

console.log(object)