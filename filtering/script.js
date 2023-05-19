'use strict';

console.log('-------Filter----------------');
//This will return all users with userid=3
fetch('https://jsonplaceholder.typicode.com/posts?userId=3')
  .then(response => response.json())
  .then(filt => console.log(filt));
