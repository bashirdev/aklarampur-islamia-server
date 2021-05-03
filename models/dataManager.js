
import mongoose from 'mongoose';

const moneyCollectionSchema=mongoose.Schema(
    {
   fullName:String,
   date:String,
   donate:String,
   status:String,
}
);

export const UserMoney=mongoose.model('UserMoney', moneyCollectionSchema);
 
const gotPinSchema=mongoose.Schema(
    {
        fullName:String,
        date:String,
        pin:String, 
        mobilePin:String,
       amount:String,
       
         
    }
);

export const Gotpin =mongoose.model('Gotpin', gotPinSchema);


const userProfileSchema = mongoose.Schema(
    {    
        fullName:String,
        blood:String,
        mobile:String,
        address:String,
        selectedFile:String,
    }
   
);

const postDataSchema =mongoose.Schema({
    title:String,
    content:String,
    author:String,
    date:String,
    
})

export const POST =mongoose.model('POST', postDataSchema )

export const MemberProfile = mongoose.model('MemberProfile', userProfileSchema);

const newTaskSchema= mongoose.Schema(
    {
        taskname:String,
        date:String,
        description:String,
    }
)
export const NEWTASK =mongoose.model('NEWTASK', newTaskSchema)
