function binarySearch(list, element) {
    let left = 0;
    let right = list.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (list[mid] < element) {
            left = mid + 1; // Search in the right half
        } else {
            right = mid - 1; // Search in the left half
        }
    }

    // Check if the left index is within the array bounds and the element is found
    if (left < list.length && list[left] === element) {
        // Adjust the index if there are multiple occurrences
        while (left > 0 && list[left - 1] === element) {
            left--;
        }
        return left;
    }

    // Element not found in the list, return the index where it should be inserted
    return -1;
}
