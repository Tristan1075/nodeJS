import test from 'ava';
import axios from 'axios';
import nock from 'nock';

test('verif form presence', async t => {
  await axios.get('https://agile-sea-76895.herokuapp.com')
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


test('find city', async t => {
  const response = await axios.post('https://agile-sea-76895.herokuapp.com/ville', { nom_ville: 'Paris'})
  try {
    t.is(response.data.toString().includes('Paris'), true);
  } catch(e) {
    t.fail(e);
    console.log(e);
  }
});

test('verify if error', async t => {

  nock('hettp://geocode.xyz')
    .get('/paris?json1')
    .reply(200, 'HTML');

  const res = await getVilleData();
  t.is(res.status, 200);
});