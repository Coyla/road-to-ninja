const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
const logger = require('../helpers/logger');
const token = require('../middlewares/token');
const jwt = require('jsonwebtoken');

//models
const userModel = require('../models/user.model');
const projectModel = require('../models/project.model');

router.use('/user', userController);
module.exports = router;
