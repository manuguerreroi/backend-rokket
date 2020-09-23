const express = require('express');
const app = express();
const cors = require('cors');


//config
app.set('port', process.env.PORT || 10000);

//mw
app.use(cors());
app.use(express.json());

//rt GET - POST - DELETE

app.use('/api/foods', require('./routes/foods.js'));



module.exports = app;