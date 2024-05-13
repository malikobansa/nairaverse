const fetch = require('node-fetch');

const url = 'https://api.paystack.co/balance';
const options = {
  method: 'GET',
  headers: {
    Authorization: 'sk_live_f4ce681ecb88677787f9e9e2d548d05582b4d489'
  }
}

fetch(url, options)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error.message);
  });
