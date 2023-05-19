'use strict';
// This test will take 1.5 hours, you are supposed to submit your solution within that time.
// You are allowed to research with search engines but not consult your colleagues.
// The idea behind this test is to gauge what you have gained and areas you need to improve on.
// Interacting with Web APIs
// In this test you will use the jsonplaceholder API to accomplish different tasks.
// // Resources
// JSONPLACEHOLDER API Documentation  https://jsonplaceholder.typicode.com/guide/
// JSONPLACEHOLDER Posts API https://jsonplaceholder.typicode.com/posts
// Tests
// You will be expected to write code to do the following LIST, POST, UPDATE, DELETE and FILTER post(s) to the API provided.
// Objective
// The objective of this test is to gauge your error handling, asynchronous programming and fetching data from Web APIs skills

//Getting a resource
// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(response => response.json())
//   .then(json => console.log(json));
// async function funcName() {
//   const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//   console.log(response);
//   let data = await response.json();
//   console.log(data);
// }
// funcName();
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

console.log('------------Getting resouce with id 1-------------------------');
// Getting a resource
async function funcName() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  console.log(response);
  let data = await response.json();
  console.log(data);
}
funcName();
console.log('------------------posting--------------------');
// Posting To the API

fetch(
  'https://jsonplaceholder.typicode.com/posts',
  // this is the second parameter of the fetch method which specifies the type of request in this case Post
  {
    method: 'POST',
    body: JSON.stringify({
      title: 'postTest',
      body: 'Trying to post data to the typicode json file',
      userId: 2,
    }),
    // This is the third patamenter which specifies the type of data to be sent
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }
)
  .then(response => response.json())
  .then(postOutput => console.log(postOutput));

console.log('------------------Updating---------------------------');
//   Updating to the api
fetch(
  'https://jsonplaceholder.typicode.com/posts/10',
  // second paramenter initiating the update method with the put keyword
  {
    method: 'PUT',
    body: JSON.stringify({
      id: 10,
      title: 'updateTest',
      body: 'Update data to the user id 10',
      userId: 10,
    }),
    //third paramenter of fetch method
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }
)
  .then(response => response.json())
  .then(output => console.log(output));

console.log('==============Deleting======================');
//   Deleting data to the api that is user-id 7
fetch(
  'https://jsonplaceholder.typicode.com/posts/7',
  // second paramenter which is an object with method DELETE
  {
    method: 'DELETE',
  }
);
console.log('-------Filter----------------');
//This will return all users with userid=3
fetch('https://jsonplaceholder.typicode.com/posts?userId=3')
  .then(response => response.json())
  .then(filt => console.log(filt));
