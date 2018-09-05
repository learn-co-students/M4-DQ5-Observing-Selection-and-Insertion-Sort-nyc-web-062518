function selectionSort(arr) {

  for(let i = 0; i < arr.length; i++) {
    let min = i
    for(let j=i+1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j
      }
    }
    if (i != min) {
      swap(arr, i, min)
    }
  }
}



function swap(arr, firstIndex, secondIndex) {
  let first = arr[firstIndex]
  let second = arr[secondIndex]
  arr[firstIndex] = second
  arr[secondIndex] = first
}
