const express = require('express')
const QuestionController = require('../controllers/QuestionController')
const RoomController = require('../controllers/RoomController')

const router = express.Router()

router.get('/', (req, res) => res.render('index', {page: 'enter-room'}))
router.get('/create-pass', (req, res) => res.render('index', {page: 'create-pass'}))

router.get('/room/:room_id', (req, res) => res.render('room'))

router.get('/teste/', (req, res) => res.render('teste'))

// Formato que o form de dentro da modal tem que passar a informação
router.post('/create-room', RoomController.create)
router.post('/question/:room/:question/:action', QuestionController.index)

module.exports = router
