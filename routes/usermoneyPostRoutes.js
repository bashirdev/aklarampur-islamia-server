import express from 'express'
const router = express.Router()

import { deleteMembers, getPin, newPostData, newTask, profileData, updateMember } from '../controller/usermoneyPostController.js'
import { balanceMoney, getMembers, gotMoneyPin, getNewTask, deleteMoneyPin,deleteDueMoney, getMemberById, 
    updateCampaignById, campaignDeleteById, getNewTaskById } from '../controller/usermoneyGetController.js'

router.route('/newPostData').post(newPostData)
router.route('/moneySent').post(getPin)
router.route('/profile').post(profileData)
router.route('/newtask').post(newTask)
router.route('/delete/:id').delete(deleteMembers)
router.route('/updatemember/:id').put(updateMember)

router.route('/getMembers').get(getMembers)
router.route('/getMembers/:id').get(getMemberById)
router.route('/moneyDue').get(balanceMoney)
router.route('/gotPin').get(gotMoneyPin)

router.route('/getnewtask').get(getNewTask)
router.route('/getcampaignbyid/:id').get(getNewTaskById)
router.route('/updatecampaign/:id').put(updateCampaignById)
router.route('/campaigndelete/:id').delete(campaignDeleteById)


router.route('/deletemoney/:id').delete(deleteMoneyPin)
router.route('/deleteduemoney/:id').delete(deleteDueMoney)

export default router