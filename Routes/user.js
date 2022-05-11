const express = require('express')
const router = express.Router()
const db = require("../model/connection")
const coursedata = require('../controller/user')

router.get('/course', coursedata.get_course_data)
router.get('/course/:id', coursedata.get_course_id)
// router.put('/course/update/:id',coursedata.update_data)
router.post('/course/post', coursedata.createCourse)
router.delete('/course/delete/:id', coursedata.delete_Course_id)
router.put('/course/update/:id', coursedata.update_Course)
module.exports = router