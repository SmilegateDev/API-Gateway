const express = require('express');
const router = express.Router();
const authRouter = require('./auth');
const contentsRouter = require("./contents");

router.use((req, res, next) => {
    console.log("Called: ", req.path)
    next()
})

router.use(authRouter);
router.use(contentsRouter);

module.exports = router;