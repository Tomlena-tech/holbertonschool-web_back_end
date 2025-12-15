export default function createInt8TypedArray (length, position, value = 0) {
    const bufferArray = new Int8Array(length);
    bufferArray[position] = value;
    return bufferArray;
}
