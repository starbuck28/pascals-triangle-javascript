//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (num) => {
  let triangle = []

  if (num === 0) {
    return triangle
  }

  if (num === 1) {
    triangle.push([1])
    return triangle
  }

  if (num === 2) {
    triangle.push([1])
    triangle.push([1, 1])
    return triangle
  }

  if (num > 2) {
    // triangle.push([1])
    // triangle.push([1,1])
    triangle[0] = [1]
    triangle[1] = [1,1]
    console.log("Triangle for rows > 2: " + triangle)
  }

  for ( let i = 3; i <= num; i++) {
    // let tempArray = []
    //add empty array to triangle
    triangle.push([])

    //Define empty array added to triangle
    let tempArray = triangle[i - 1]

    //Define array right before tempArray
    let previousArray = triangle[i - 2]
    console.log("previousArray: " + previousArray)

    //First element in temp array is always 1
    tempArray[0] = 1

    //Add to temp array using numbers from prev array (up to 2nd to last element)
    for (let j = 1; j < previousArray.length + 1; j++) {
      tempArray[j] = previousArray[j - 1] + previousArray[j]
      console.log("TempArray number: " + tempArray[j])
    }

    //Las element in temp array is always 1
    tempArray[previousArray.length] = 1
  }
  // triangle.push(tempArray)
  console.log("Triangle: " + triangle)

  // for (let i = 3; i <= num; i++) {
  //   let previousArray = triangle[i - 2]
  //   console.log("Previous Array: " + previousArray)
  //   tempArray.push(previousArray[0] + previousArray[1])
  //   console.log("Temp array: " + tempArray)
  // }
  // triangle.push(tempArray)
  // console.log("Triangle: " + triangle)
  return triangle

};
