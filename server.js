import dotenv from 'dotenv'
import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
// import { UserMoney,Gotpin, MemberProfile } from './models/dataManager.js'
import configDB from './config/db.js'
import router from './routes/usermoneyPostRoutes.js'
 dotenv.config();
const app = express();
const port =process.env.PORT || 5000;
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())

//  const connection_uri=`mongodb+srv://${}:${process.env.DB_PASS}@cluster0.pqfbo.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
//  mongoose.connect(connection_uri,{
//      useNewUrlParser:true,
//      useCreateIndex:true,
//      useUnifiedTopology:true,

//  })
//git add .
//git commit -m
//$ git push heroku master
configDB();
app.use('/api', router)





app.get('/', (req,res) => res.send('hello world'))

app.listen(port, ()=>console.log(`Server will be run on port : ${port}`));