import {Router} from "express";
import * as request from './Adminrequesthandler.js';
import Auth from './middleware/Auth.js'
const router=Router()


router.route('/add').post(request.addstaff)
router.route('/get').get(request.getstaff)
router.route('/delete/:id').delete(request.deletestaff)
router.route('/getforedit/:id').get(request.getforedit)
router.route('/update/:id').patch(request.updatestaff)


router.route('/staff').post(request.staffRegister)
router.route('/stafflogin').post(request.staffLogin)
router.route('/staffhome').post(request.staffHome)
router.route('/getstaffone').get(Auth,request.getstaffone)






router.route('/user').post(request.userRegister)
router.route('/login').post(request.userLogin)
router.route('/home').post(Auth,request.Home)
router.route('/fpwd').post(request.Forget)

router.route('/addstudent').post(request.addstudent)
router.route('/getstudent').get(request.getstudent)
router.route('/deletestudent/:id').delete(request.deletestudent)
router.route('/getstudentedit/:id').get(request.getstudentedit)
router.route('/updatestudent/:id').patch(request.updatestudent)
export default router