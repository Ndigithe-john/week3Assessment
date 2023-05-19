'use strict';
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
