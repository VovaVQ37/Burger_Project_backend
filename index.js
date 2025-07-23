require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');



const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Сервер работает!');
});


app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  })
  .catch(err => console.error('Mongo error:', err));