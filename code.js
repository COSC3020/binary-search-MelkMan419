function binarySearch(list, element) {
    let left = 0;
    let right = list.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (list[mid] < element) {
            left = mid + 1; // right
        } 
        else {
            right = mid - 1; //left
        }
    }
    if (left < list.length && list[left] === element) {
        // Adjust the index 
        while (left > 0 && list[left - 1] === element) {
            left--;
        }
        return left;
    }

    //not found
    return -1;
}
