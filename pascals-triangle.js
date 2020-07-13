export const rows = (num) => {
  let triangle = []

  if (num === 1) {
    triangle.push([1])
  }

  if (num >= 2) {
    triangle.push([1])
    triangle.push([1, 1])
  }

  if(num > 2) {
    for ( let i = 3; i <= num; i++) {
      triangle.push([])

      let tempArray = triangle[i - 1]
      let previousArray = triangle[i - 2]

      tempArray[0] = 1

      for (let j = 1; j < previousArray.length + 1; j++) {
        tempArray[j] = previousArray[j - 1] + previousArray[j]
      }
      tempArray[previousArray.length] = 1
    }
  }
  return triangle

};
