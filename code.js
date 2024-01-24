function binarySearch(list, element) {
    let left = 0;
    let right = list.length;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        if (list[mid] === element) {
            // Adjust the index if there are multiple occurrences
            while (mid > 0 && list[mid - 1] === element) {
                mid--;
            }
            return mid; // Element found, return its index
        } else if (list[mid] < element) {
            left = mid + 1; // Search in the right half
        } else {
            right = mid; // Search in the left half, adjusting the range
        }
    }

    // Element not found in the list, return the index where it should be inserted
    return left;
}
