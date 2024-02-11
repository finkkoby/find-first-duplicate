function findFirstDuplicate(arr) {
  // type your code here
  for (let num of arr) {
    let tracker = {};
    tracker.num = num;
    tracker.counter = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === num) {
        tracker.counter++;
      }
      if (tracker.counter === 2) {
        return num;
      }
    }
  }
  return -1;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 2");
  console.log("=>", findFirstDuplicate([2, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

/* Please add your pseudocode to this file
And a written explanation of your solution

iterate through each number in an array
create an object with properties denoting the number and the counter set to 0;
create a second iteration that iterates through each each number again to check for matches
  with this method, i will expect at least one match as it iterates over itself
  each match will increase the counter property value
  iteration will stop once counter = 2f
outside of both iterations will return a -1 if nothing else gets return from iterating
 */