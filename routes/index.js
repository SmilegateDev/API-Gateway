const express = require('express');
const router = express.Router();
const authRouter = require('./auth');

router.use((req, res, next) => {
    console.log("Called: ", req.path)
    next()
})

router.use(authRouter);

module.exports = router;