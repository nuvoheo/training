const express = require('express');
const {
  encryptJson,
  decryptJson
} = require('./CryptoJS');

const app = express();
// eslint-disable-next-line no-undef
const publicDir = (`${__dirname}/public/`);

app.use(express.static(publicDir));
app.use('/', (req, res, next) => {
  // eslint-disable-next-line no-console
  console.log('Time:', Date.now());
  next();
});

app.get('/user/:id', (req, res) => {
  console.log('ID:', req.params.id);
  res.send('User Info');
}, (req, res, next) => {
  res.send('User Info');
  next();
});

// handler for the /user/:id path, which prints the user ID
app.get('/user/:id', (req, res) => {
  console.log('Dat');
  res.end(req.params.id);
});


// eslint-disable-next-line no-undef
const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  const data = ['123', 123];
  console.log(encryptJson(data));
  console.log(decryptJson(encryptJson(data)));
});