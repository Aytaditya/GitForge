import express from "express";
import {getProfileandRepos} from '../endpoints/user.controller.js'
import {ensureAuthenticated} from '../middleware/auth.middleware.js'
import { likeProfile } from "../endpoints/user.controller.js";
import { getLikes } from "../endpoints/user.controller.js";

//user routes in this file 

const router=express.Router()

router.get('/profile/:username',getProfileandRepos)

router.get('/likes',ensureAuthenticated,getLikes)

router.post('/like/:username',ensureAuthenticated,likeProfile)

export default router;  