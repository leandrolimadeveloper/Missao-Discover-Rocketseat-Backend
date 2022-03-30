const Database = require('../db/config')

module.exports = {
    async index(req, res) {
        const db = await Database()

        const roomId = req.params.room
        const questionId = req.params.question
        const action = req.params.action
        const password = req.body.password
        
        // console.log(roomId, questionId, action, password)

        // Verificar se a senha está correta 
        const verifyRoom = await db.get(`SELECT * FROM rooms WHERE id = ${roomId}`)
        if(verifyRoom.pass == password) {
            if(action == 'delete') {

                await db.run(`DELETE FROM questions WHERE id = ${questionId}`)

            } else if (action == 'check') {
                
                await db.run(`UPDATE questions SET checked = 1 WHERE id = ${questionId}`)

            }

            res.redirect(`/room/${roomId}`)
        } else {
            res.render('pass-incorrect', {roomId: roomId})
        }
    },

    async create(req, res) {
        const db = await Database()

        const roomId = req.params.room
        const question = req.body.question

        await db.run(`INSERT INTO questions(
            title,
            room,
            checked
        ) VALUES (
            "${question}",
            ${roomId},
            0
        )`)

        res.redirect(`/room/${roomId}`)
    }
}