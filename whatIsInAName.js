//TODO:
// Wherefore art thou
// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

function whatIsInAName(collection, source) {
    const sourceKey = Object.keys(source)
    const result = collection.filter(obj => {
        for (let i = 0; i < sourceKey.length; i++) {
            if (obj[sourceKey[i]] !== source[sourceKey[i]]) {
                return false;
            }
        }
        return true;
    });
}

whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 });