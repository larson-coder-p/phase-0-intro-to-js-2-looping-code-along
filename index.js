// index.js

// Define the writeCards function
function writeCards(names, event) {
    return names.map(name => `Thank you, ${name}, for the wonderful ${event} gift!`);
}

// Define the countDown function
function countDown(start) {
    while (start >= 0) {
        console.log(start);
        start--;
    }
}
