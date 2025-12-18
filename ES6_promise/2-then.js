export default function handleResponseFromAPI(promise) {
    promise.then((response => {
        return {
        status: 200,
        body: 'success'
        };
    })).catch(error => {
        return new Error();
    })
    .finally((() => {
        console.log('Got response from API');
    }));
}
