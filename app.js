import express from 'express';
import Videos from './routes/videos.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import ConnectDB from './utils/connectdb.js';
dotenv.config();
const port = process.env.PORT || 3000;
console.log(port);

ConnectDB(process.env.CONNECT_URI);
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.get('/',(req,res)=>{
  res.send('WELCOME TO DANIEL TIKTOK BACKEND')
})
app.use('/videos',Videos);
mongoose.connection.on('open',()=>{
  app.listen(port);
  console.log('no connection error, port sucessfully created');
});
