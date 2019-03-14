import test from 'ava';
const axios = require('axios');

test('verif form presence', async t => {
  await axios.get('http://localhost:3000/')
    .then(response => {
      if(response.data.toString().includes("<form")){
        t.pass();
      }
      else{
        t.fail();
      }
    })
    .catch(error => {
      // handle error
      console.log(error);
      t.fail();
    });
});
