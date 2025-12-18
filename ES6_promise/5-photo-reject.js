export default function uploadPhoto(fileName) {
    return new Promise((resolve, reject) => {
        reject (new Error)(`Upload of ${fileName} failed`);
    });
}
