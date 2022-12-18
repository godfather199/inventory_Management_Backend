const router = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')


//UPDATE USER
router.put('/:id', async (req, res) => {
    try {
        if(req.body.password) {
            const salt = await bcrypt.genSalt(10)
            req.body.password = await bcrypt.hash(req.body.password, salt)
        }

        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body
            },
            {
                new: true
            }
        )

        const {password, ...details} = updatedUser._doc
        res.status(200).json(details)
    }
    catch (err) {
        res.status(500).json(err)
    }
})




module.exports = router