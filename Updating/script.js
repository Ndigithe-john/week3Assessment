'use strict';

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
