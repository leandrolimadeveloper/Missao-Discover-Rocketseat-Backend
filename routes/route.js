const express = require('express')
const QuestionController = require('../controllers/QuestionController')
const RoomController = require('../controllers/RoomController')

const router = express.Router()

router.get('/', (req, res) => res.render('index', {page: 'enter-room'}))
router.get('/create-pass', (req, res) => res.render('index', {page: 'create-pass'}))

router.post('/create-room', RoomController.create)
router.get('/room/:room', RoomController.open)
router.post('/enter-room', RoomController.enter)

router.get('/teste/', (req, res) => res.render('teste'))

router.post('/question/:room/:question/:action', QuestionController.index)
router.post('/question/create/:room', QuestionController.create)

module.exports = router
