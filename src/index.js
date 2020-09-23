require('dotenv').config();

const app = require('./app');
require('./db');

const main = async () =>
    await app.listen(app.get('port'), () => 
        console.log(`SERVER RUN ON PORT : ${app.get('port')}`));

main();