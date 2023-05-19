'use strict';

console.log('==============Deleting======================');
//   Deleting data to the api that is user-id 7
fetch(
  'https://jsonplaceholder.typicode.com/posts/7',
  // second paramenter which is an object with method DELETE
  {
    method: 'DELETE',
  }
);
