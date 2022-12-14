const express = require('express');
const routerApi = require('./routes');
const app = express();
const port = 3100;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Holi uwu');
});

routerApi(app);

app.listen(port, () => {
  console.log('Express Server Activo: ' + port);
});
