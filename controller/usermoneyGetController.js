
import { Gotpin, MemberProfile, NEWTASK, UserMoney } from '../models/dataManager.js';


//Get request For all members
const getMembers = async(req,res)=>{
try {
  const getAllMembers=await  MemberProfile.find({})
   res.status(200).json(getAllMembers)
} catch (error) {
    res.status(404).json({message: error.message})
}
}


//GET request for money due

const balanceMoney=async(req,res)=>{
     
    try {
        const getBalance=await  UserMoney.find({})
     res.status(200).json(getBalance) 
    } catch (error) {
        res.status(404).json({message: error.message}) 
    }
 
}

//DELETE balance money
const deleteDueMoney =async(req,res)=>{
    try {
        const deleteDue=await UserMoney.deleteOne({_id:req.params.id})
        res.status(201).json(deleteDue)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

//GET request got pin api
const gotMoneyPin=async(req,res)=>{
     
    try {
        const gotBalance=await  Gotpin.find({})
     res.status(200).json(gotBalance) 
    } catch (error) {
        res.status(404).json({message: error.message}) 
    }
 
}
//DELETE money Pin
const deleteMoneyPin =async(req,res)=>{
    try {
        const deletePin=await Gotpin.deleteOne({_id:req.params.id})
        res.status(201).json(deletePin)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}
//GET Request for newTask
const getNewTask=async(req,res)=>{
    try {
        const gettingNewtask =await NEWTASK.find({})
        res.status(200).json(gettingNewtask)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export {getMembers, balanceMoney, gotMoneyPin, getNewTask, deleteMoneyPin, deleteDueMoney}

