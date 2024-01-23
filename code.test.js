function binarySearch(list, element) {
    let left = 0;
    let right = list.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (list[mid] === element) {
            // Return the actual index of the element in the sorted array
            return mid;
        } else if (list[mid] < element) {
            left = mid + 1; // Search in the right half
        } else {
            right = mid - 1; // Search in the left half
        }
    }

    return -1; // Element not found in the list
}
