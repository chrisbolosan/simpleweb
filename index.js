const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello single docker container');
});

app.listen(8081, () => {
  console.log('listening on 8081');
});
