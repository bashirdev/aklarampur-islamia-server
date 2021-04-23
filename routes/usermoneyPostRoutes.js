import express from 'express'
const router = express.Router()

import { deleteMembers, getPin, newPostData, newTask, profileData } from '../controller/usermoneyPostController.js'
import { balanceMoney, getMembers, gotMoneyPin, getNewTask, deleteMoneyPin,deleteDueMoney } from '../controller/usermoneyGetController.js'

router.route('/newPostData').post(newPostData)
router.route('/moneySent').post(getPin)
router.route('/profile').post(profileData)
router.route('/newtask').post(newTask)
router.route('/delete').delete(deleteMembers)

router.route('/getMembers').get(getMembers)
router.route('/moneyDue').get(balanceMoney)
router.route('/gotPin').get(gotMoneyPin)
router.route('/getnewtask').get(getNewTask)
router.route('/deletemoney/:id').delete(deleteMoneyPin)
router.route('/deleteduemoney/:id').delete(deleteDueMoney)

export default router