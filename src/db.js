const mongoose = require('mongoose');

const URIDB = process.env.MONGO_URIDB ? 
              process.env.MONGO_URIDB : 
              'mongodb://localhost/rokketmanuelguerrero'  ;

mongoose.connect(URIDB,{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: true,
    useFindAndModify: true
});

const cnx = mongoose.connection;

cnx.once('open', () => console.log('DB IS CONNECTED'));

