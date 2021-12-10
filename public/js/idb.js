//Were using this indexDB to store the data locally. 
//So that if a user loses their internet connection, they can still access their data.
//And also so when the user comes back online, their data gets updated.

//create let to hold db connection
let db;
//establish a connection to IndexedDB database called 'budget' with version 1 and a callback function 
//to run if the database doesn't exist
const request = indexedDB.open('budget', 1);

//this event will emit if the database version changes (nonexistant to v1, v2 to v3, etc)
request.onupgradeneeded = function(event) {
    //save a reference to the database
    const db = event.target.result;
    //create an object store (table) called `pending` with autoIncrement primary key of sorts
    db.createObjectStore('pending', {autoIncrement: true});
    //its not showing up in dev tools application
    console.log(db);
};

//upon success, run this function
request.onsuccess = function(event) {
    // when db is successfully created with its object store(from onupgradeneeded) 
    //or simply established a connection, save a reference to db in global variable let = db
    db = event.target.result;

    // check if app is online, if yes run uploadPendingTransactions() function to send all local db data to api
    if (navigator.onLine) {
        //uploadPendingTransactions(); //where is this function defined? it's not a function yet
    }
};

request.onerror = function(event) {
    //log error here
    console.log(event.target.errorCode);
};

//This function will be executed if we attempt to submit a new transaction while offline
//it will store the data in the IndexedDB database
function saveRecord(record) {
    //open a new transaction with the database with readwrite access/permissions
    const transaction = db.transaction(['pending'], 'readwrite');

    //access the object store for `new_pizza`
    const budgetObjectStore = transaction.objectStore('pending');

    // add the record to the object store with the key being the record's id using the add method
    budgetObjectStore.add(record);
}

function uploadPendingTransactions() {
    // open a transaction on your db
    const transaction = db.transaction(['pending'], 'readwrite');

    // access your pending object store
    const pendingObjectStore = transaction.objectStore('pending');

    // get all records from your object store and set it to a variable
    const getAll = pendingObjectStore.getAll();

    // upon a successful .getAll() execution, run this function
    getAll.onsuccess = function() {
        // if there was data in indexedDb's store, let's send it to the api server
        if (getAll.result.length > 0) {
            fetch('/api/transaction/bulk', {
                method: 'POST',
                body: JSON.stringify(getAll.result),
                headers: {
                    Accept: 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                }
            })
                .then(response => response.json())
                .then(serverResponse => {
                    if (serverResponse.message) {
                        throw new Error(serverResponse);
                    }
                    // open one more transaction on your db
                    const transaction = db.transaction(['pending'], 'readwrite');
                    //access the pending object store
                    const pendingObjectStore = transaction.objectStore('pending');
                    // clear all items in your pending object store
                    pendingObjectStore.clear();

                    alert('your transactions have been successfully uploaded!');
                })
                .catch(err => {
                    console.log(err);
                    alert(
                        'your transactions were unable to be uploaded. Please try again later.'
                    );
                })
        }
    }
}

//listen for app coming back online
window.addEventListener('online', uploadPendingTransactions);