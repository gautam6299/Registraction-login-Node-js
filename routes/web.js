import express from "express";

import UserController from "../controller/userController.js"
let router=express.Router()

router.get('/',UserController.home);
router.get('/registraction',UserController.registraction);
router.post('/registraction',UserController.createuserDoc);
router.get('/login',UserController.login);
router.post('/login',UserController.verifyLogin);

export default router;