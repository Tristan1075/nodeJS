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

test('find city with nock if geocode down', async t => {

  const city = 'Paris';
  nock('http://geocode.xyz').get(`/${city}?json=1`).reply(200, { latt: 4 });

  const { data } = await axios.post('http://localhost:3000/ville', { city });
  // Marche pas, je ne comprend pas ce que je récupère de data ..
  console.log(data)
  t.true(data.coord.includes('latt'));
});