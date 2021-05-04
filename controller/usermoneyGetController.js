
import { COST, Gotpin, MemberProfile, NEWTASK, POST, UserMoney } from '../models/dataManager.js';


//Get request For all members
const getMembers = async(req,res)=>{
try {
  const getAllMembers=await  MemberProfile.find({})
   res.status(200).json(getAllMembers)
} catch (error) {
    res.status(404).json({message: error.message})
}
}

//GET post data blog
const getPostBlog=async(req,res)=>{
    try {
        const getPost = await POST.find({})
        res.status(200).json(getPost)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}
//GET Cost data
const getCostData=async(req,res)=>{
    try {
        const getCost = await COST.find({})
        res.status(200).json(getCost)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}
//GET post data blog By id
const getPostBlogById=async(req,res)=>{
    try {
        const getPostId = await POST.findById({_id:req.params.id})
        res.status(200).json(getPostId)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

//GET request by ID
const getMemberById =async(req,res)=>{
    try {
        const findMember=await MemberProfile.findById({_id:req.params.id})
        res.status(201).json(findMember)
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
//GET Find by id 
const getNewTaskById=async(req,res)=>{
    try {
        const getById =await NEWTASK.findById({_id:req.params.id})
        res.status(200).json(getById)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}
//PUT Request for edit by ID
const updateCampaignById=async(req,res)=>{
    try {
        const {taskname,date,description} = req.body;
        const taskName =await NEWTASK.findById(req.params.id)
        if(taskName){
            taskName.taskname=taskname;
            taskName.date=date;
            taskName.description=description;

            const saveTaskName = await taskName.save()
            res.json(saveTaskName)
        }else{
            res.status(404)
        }
       
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

//DELETE campaign delete by id
const campaignDeleteById=async(req,res)=>{
    try {
        const taskNameDelete =await NEWTASK.deleteOne({_id:req.params.id})
        res.status(201).json(taskNameDelete)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export {getMembers,getMemberById, balanceMoney,
     gotMoneyPin, getNewTask, deleteMoneyPin,updateCampaignById,getNewTaskById,
     campaignDeleteById,
      deleteDueMoney,getPostBlogById, getPostBlog, getCostData}

