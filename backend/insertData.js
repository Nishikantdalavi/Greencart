import mongoose from "mongoose";
import fs from 'fs'
import dotenv from 'dotenv';
dotenv.config();

import Product from "./models/product.js";

const uri =process.env.MONGO_DB_URI ;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });


const products = JSON.parse(fs.readFileSync('mockProducts_no_id.json', 'utf-8'));


Product.insertMany(products)
  .then(() => {
    console.log('Data inserted successfully');
    mongoose.disconnect();
  })
  .catch(err => {
    console.error('Error inserting data:', err);
    mongoose.disconnect();
  });