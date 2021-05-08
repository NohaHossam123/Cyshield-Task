const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRouter = require('./routers/product');

const PORT = 5000;

const app = express();
app.use(express.json());
app.use(cors());

const dbURL = 'mongodb://localhost:27017/product';
mongoose.connect(dbURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => console.log("successfully connected to mongodb"))
.catch(err => console.log('Connection failed', err));

app.use('/products', productRouter);

app.listen(PORT, (err) => {
    if(err) console.log('Server Error..');
    console.log(`Start server on port ${PORT}`);
})