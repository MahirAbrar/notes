// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
//For Example:
//const array1 = ['a', 'b', 'c', 'x'];
//const array2 = ['z', 'y', 'I'];
//should return false
//-----------------
const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'x'];
//should return true

// Brute force O(n * m) where n is array1 and m is array2

containsSameBF = (arr1, arr2) => {
      for (i = 0; i < arr1.length; i++) {
            for (j = 0; j < arr2.length; j++) {
                  if (i === j) {
                        return true
                  }
            }
      }
      return false
}



containsSameOO = (arr1, arr2) => {
      // Loop through first array and create an object where
      // properties === items in the array
      map = {}
      for (i in arr1) {
            // If item do not exist in map then add the item in the map.
            if (!map[i]) {
                  let item = arr1[i]
                  // [] in front of the object indicates the key.
                  map[item] = true;
            }
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