
import { Gotpin, POST, MemberProfile, UserMoney, NEWTASK, COST } from '../models/dataManager.js';



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
        const getMoneyPin= await Gotpin.create(sentMoney)
       
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

   //POST post data blog
   const postData =async (req,res)=>{
       
       try {
          const post =req.body;
          const newPost = await POST.create(post) 
          res.status(200).json(newPost)
       } catch (error) {
        res.status(404).json({message: error.message})
       }
   } 

   //DELETE Blog post data
   const deleteBlogPost=async (req,res)=>{
       try {
           const deltePost=await POST.deleteOne({_id:req.params.id})
           res.status(201).json(deltePost)
       } catch (error) {
        res.status(404).json({message: error.message}) 
       }
   }

   //UPDATE Blog post Data

const BlogPostUpdate =async (req,res)=>{
    try {
        const {title, author, content} = req.body;
        const updatePost =await POST.findById(req.params.id)
        if(updatePost){
            updatePost.title=title;
            updatePost.author=author;
            updatePost.content=content;
            const saveUpdate = updatePost.save()
            res.json(saveUpdate)
        }
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

 //POST Cost campaign
 const costData =async (req,res)=>{
       
    try {
       const cost =req.body;
       const newCost = await COST.create(cost) 
       res.status(200).json(newCost)
    } catch (error) {
     res.status(404).json({message: error.message})
    }
} 

//DELETE Blog post data
const deleteCost=async (req,res)=>{
    try {
        const delteCost=await COST.deleteOne({_id:req.params.id})
        res.status(201).json(delteCost)
    } catch (error) {
     res.status(404).json({message: error.message}) 
    }
}


   //POST task data
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


   export {newPostData,postData,costData,deleteCost, deleteBlogPost,BlogPostUpdate, getPin , profileData, deleteMembers,updateMember, newTask }

