//create let to hold db connection
let db;
//establish a connection to IndexedDB database called 'budget' with version 1 and a callback function 
//to run if the database doesn't exist
const request = indexedDB.open('budget', 1);
