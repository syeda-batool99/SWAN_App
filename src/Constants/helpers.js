export function insertAt(array, index, ...elements) {
    array.splice(index, 0, ...elements);
}