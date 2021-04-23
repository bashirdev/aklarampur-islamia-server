import mongoose from 'mongoose'

const configDB=async(req,res)=>{
    try {
       const conn =await mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser:true,
        useCreateIndex:true,
        useUnifiedTopology:true,
       }) 
      console.log(`Mongodb connected: ${conn.connection.host}`);
     
    } catch (error) {
        res.error({message: error.message})
        process.exit(1)
    }
}

export default configDB