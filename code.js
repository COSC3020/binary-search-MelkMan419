function binarySearch(arr, target) {
  let start = 0
  let end = arr.length - 1
  while (start <= end) {
    let middle = Math.floor((start + end) / 2)
    if (arr[middle] < target) {
      // Search the right half
      start = middle + 1
    } else if (arr[middle] > target) {
      // Search the left half
      end = middle - 1
    } else if (arr[middle] === target) {
      // Found target
      return middle
    }
  }
  // Target not found
  return -1
}
