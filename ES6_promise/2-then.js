export default function handleResponseFromAPI(promise) {
    promise.then((response => {
        console.log("Status: 200", response);
    })).catch(error => {
        console.error("Error occurred:", error);
    });
}
