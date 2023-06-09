const express = require('express');

const router = express.Router();

const { registerAdmin, loginAdmin,logoutAdmin, getAdminProfile, updatePassword, addNotification, getNotification, downloadNotification, deleteNotification}  = require('../controllers/authController');
const { isAuthenticated } = require('../middleware/auth');
const upload = require('../middleware/upload');

router.route('/register').post(registerAdmin);
router.route('/login').post(loginAdmin);
router.route('/profile').post(isAuthenticated,getAdminProfile);
router.route('/logout').post(isAuthenticated,logoutAdmin);
router.route('/password/update').put(isAuthenticated,updatePassword);
router.route('/addnotification').post(isAuthenticated,upload.single('file'),addNotification);
router.route('/getnotifications').get(getNotification);
router.route('/downloadnotification').post(downloadNotification);
router.route('/deletenotification').post(isAuthenticated,deleteNotification);
module.exports= router;