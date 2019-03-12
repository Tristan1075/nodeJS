const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/hello', function (req, res) {
  res.send('Hello World!');
})

app.post('/chat', function (req, res){
  if(req.body.msg === 'ville'){
    res.send('Nous sommes à Paris');
  }
  if(req.body.msg === 'météo'){
    res.send('Il fait beau');
  }
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


