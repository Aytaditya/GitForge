import express from "express";
import {getProfileandRepos} from '../endpoints/user.controller.js'

//user routes in this file 

const router=express.Router()

router.get('/profile/:username',getProfileandRepos)

export default router;  