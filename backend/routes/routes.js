const express = require('express')
const router = express.Router()

router.get('/users', function(req, res) {
    return res.json(["user1", "USER 2"])
})    

module.exports = router