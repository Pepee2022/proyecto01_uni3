const express = require('express');
const app = express();
const port = 3100;

app.get('/', (req, res) => {
    res.send(' golaasaaaaaaaaaaa');
});

app.listen(port, () => {
    console.log("express server activo: " +port )
});
