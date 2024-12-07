const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require('body-parser');
const connetedToMongodb = require('./db/db');

const port = process.env.PORT || 8000
connetedToMongodb();
app.use(bodyParser.json());
app.use(express.json());



app.use(cors());


app.use('/api/c1/', require('./routes/Category.route'));
app.use('/api/a1/', require('./routes/Answer.route'));


app.listen(port,()=> {
    console.log(`Server is started at http://localhost:${port}`);
})

