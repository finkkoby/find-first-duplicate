function findFirstDuplicate(arr) {
  // type your code here
  let counter = {}
  for (let num of arr) {
    counter[num] = 0;
  }
  for (let num of arr) {
    counter[num]++;
    if (counter[num] === 2) {
      return num;
    }
  }
  return -1;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([1, 2, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

/* Please add your pseudocode to this file
And a written explanation of your solution

create a counter obj to store our answers
iterate through each number in the array to define a property for that number that will eventually hold a counter total
upon declaration of that property, i have it set to zero, that way if there are multplies of the same number, there wont be multiple properties
I then iterated through the array again and added 1 to matching property of the counter object
The first key/value pair that === 2 (since each number would match with itself once), it returned that number
If no number was return from that second iteration, the function by default will return -1
 */