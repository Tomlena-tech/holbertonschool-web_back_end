export default function uploadPhoto(fileName) {
    return new Promise((reject) => {
        reject (new Error)(`Upload of ${fileName} failed`);
    });
}
