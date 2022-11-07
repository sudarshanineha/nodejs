const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controllers');

router.get('/', userController.getUserList);


router.get('/:id',userController.getUserByID);

router.post('/',userController.createNewUser);

router.put('/:id',userController.updateUser);

router.delete('/:id',userController.deleteUser);

module.exports=router;