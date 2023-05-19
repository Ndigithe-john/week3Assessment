'use strict';
console.log('===============listing========================');
//Listing Data from the API
const api_url = 'https://jsonplaceholder.typicode.com/posts';

// Defining async function
async function getapi(url) {
  // Storing response
  const response = await fetch(url);

  // Storing data in form of JSON
  let data = await response.json();
  console.log(...data);
  if (response) {
  }
}
// Calling that async function
getapi(api_url);
