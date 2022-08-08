const User = require('../../Models/User')

const sessionController = {
    async createSession(req,res) {
        const { userName } = req.body

        try {
            const user = await User.findOne({ userName })
            return res.status(200).json(user)
        } catch(err){
            return res.status(400).json(err)
        }
    }
}

module.exports = sessionController