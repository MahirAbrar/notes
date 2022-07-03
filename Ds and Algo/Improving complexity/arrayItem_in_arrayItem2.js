//any item in array1 in array2?
//const array1 = ['a', 'b', 'c', 'x'];
//const array2 = ['z', 'y', 'I'];
//should return false
//-----------------
const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'x'];
//should return true

/* Brute force 
* // time complexity O(n * m) where n is array1 and m is array2
* // space complexity of O(1)
*/
containsSameBF = (arr1 = [], arr2 = []) => {
      for (i = 0; i < arr1.length; i++) {
            for (j = 0; j < arr2.length; j++) {
                  if (i === j) {
                        return true
                  }
            }
      }
      return false
}

// Creating an object first 
/* 
* // complexity O(n + m) where n the size of arr1 
* // and m is for looping through the arr2
* // Space complexity of o(n) where n is the length of arr1
*/
containsSameOO = (arr1 = [], arr2 = []) => {
      // Loop through first array and create an object where
      // properties === items in the array
      map = {}
      try {
            for (i in arr1) {
                  // If item do not exist in map then add the item in the map.
                  if (!map[i]) {
                        let item = arr1[i]
                        // [] in front of the object indicates the key.
                        map[item] = true;
                  }
            }
      } catch (error) {
            return console.log("Correct input not inputted. ")
      }

      // Loop through second array and check if item exist in map. (Checking is O(1))
      for (item in arr2) {
            // Check in map if the item from arr2 exist.
            if (map[arr2[item]]) {
                  return true
            }
      }
      // None of the items match
      return false
}

console.log(containsSameOO(array1, array2))

// After coding, try to find edge cases, what if argument 2 was empty. and discuss about potential issues 
// that could come up.

// Try to give better meaning in the names of I and J.
// Let the interviewer know that you are thinking about these.

// Talk about testing your code and running unit tests so that the code is as bugfree as possible.