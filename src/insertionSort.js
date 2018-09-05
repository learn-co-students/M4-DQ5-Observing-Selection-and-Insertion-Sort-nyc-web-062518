function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j > -1 && arr[j-1] > arr[j]; j--) {
       // if (arr[j] < arr[j - 1]) {
         let firstValue = arr[j-1]
         let secondValue = arr[j]
         arr[j - 1] = secondValue
         arr[j] = firstValue
      // }
    }
  }
}

// function insertionSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let j = arr.length - 1
//        while (j > -1) {
//          if (arr[j] > arr[j - 1]) {
//            j--
//       } else {
//         let firstValue = arr[j-1]
//         let secondValue = arr[j]
//         arr[j - 1] = secondValue
//         arr[j] = firstValue
//       }
//     }
//   }
// }



function swap(arr, firstIndex, secondIndex) {
  let first = arr[firstIndex]
  let second = arr[secondIndex]
  arr[firstIndex] = second
  arr[secondIndex] = first
}


// function insertionSort(arr) {
//   let startIdx = 0
//   for (let startIdx = 0; startIdx < arr.length; startIdx++) {
//     for(let currIdx = startIdx; currIdx > 0 && arr[currIdx-1] > arr[currIdx]; currIdx--) {
//       let temp = arr[currIdx]
//       arr[currIdx] = arr[currIdx-1]
//       arr[currIdx-1] = temp
//     }
//   }
// }
