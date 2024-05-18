import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import userRoutes from './Routes/userRoutes.js'
import connectDB from './db/connectDB.js';


const app=express();

app.use(express.json());

app.use(cors());

dotenv.config();



app.get('/',(req,res)=>{
    res.send('API is running...');
})

app.use('/api/users',userRoutes);


app.listen(5000,()=>{
    connectDB();
    console.log('Server started on http://localhost:5000');
})