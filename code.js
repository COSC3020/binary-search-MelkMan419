function binarySearch(list, element) {
    let left = 0;
    let right = list.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (list[mid] === element) {
            // Element found, adjust the index for multiple occurrences
            while (mid < list.length - 1 && list[mid + 1] === element) {
                mid++;
            }
            return mid;
        } else if (list[mid] < element) {
            left = mid + 1; // Search in the right half
        } else {
            right = mid - 1; // Search in the left half
        }
    }

    // Element not found in the list, return the index where it should be inserted
    return -1;
}
