
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
        pin:String, 
        date:String,
        amount:String,
        status:String,
         
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



export const MemberProfile = mongoose.model('MemberProfile', userProfileSchema);

const newTaskSchema= mongoose.Schema(
    {
        taskname:String,
        date:String,
        description:String,
    }
)
export const NEWTASK =mongoose.model('NEWTASK', newTaskSchema)
