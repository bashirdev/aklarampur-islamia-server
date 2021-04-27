
import { Gotpin, MemberProfile, UserMoney, NEWTASK } from '../models/dataManager.js';



//POST method  new post data feture money will give , api
const newPostData=async (req,res)=>{
   
   try {
    const moneyForm=req.body;
  const newPost=await UserMoney.create(moneyForm)
  res.status(200).json(newPost)

   } catch (error) {
       res.status(404).json({message: error.message})
   }
}

//all ready send money POST api

const getPin=async(req,res)=>{
   
    try {
       const sentMoney=req.body;
        const getMoneyPin=await Gotpin.create(sentMoney)
        res.status(200).json(getMoneyPin)
    } catch (error) {
       res.status(404).json({message: error.message})
    }
   }

   //POST method profile data POST

   const profileData=async (req,res)=>{
       try {
      
            const profilePost= req.body;
            const newPost=await MemberProfile.create(profilePost)
            
           res.status(200).json(newPost)
           
      
       } catch (error) {
        res.status(404).json({message: error.message})
       }
   }

   const newTask =async (req,res)=>{
       try {
          const newTasks= req.body;
           const task = await NEWTASK.create(newTasks)
           res.status(200).json(task)
       } catch (error) {
        res.status(404).json({message: error.message})
       }
   }

//DELETE MEMBER DATA 
const deleteMembers =async (req,res)=>{
    try {
        const membersDelete=await MemberProfile.deleteOne({_id: req.params.id})
        res.status(201).json(membersDelete)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}
//update MEMBER DATA 
const updateMember =async (req,res)=>{
    try {
        const {fullName, blood, mobile, address} =req.body;
        const updateData=await MemberProfile.findById(req.params.id)
        if(updateData){
            updateData.fullName=fullName;
            updateData.blood=blood;
            updateData.mobile=mobile;
            updateData.address=address;

            const dataUpdate= await updateData.save()
            res.json(dataUpdate)
        }else{
           res.status(404)
        }

       
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}


   export {newPostData, getPin , profileData, deleteMembers,updateMember, newTask }

