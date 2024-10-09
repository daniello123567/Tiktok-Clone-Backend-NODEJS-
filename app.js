import express from 'express';
import Videos from './routes/videos.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import ConnectDB from './utils/connectdb.js';
dotenv.config();
ConnectDB(process.env.CONNECT_URI);
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/videos',Videos);
mongoose.connection.on('open',()=>{
  app.listen(3000);
  console.log('no connection error, port sucessfully created');
});
