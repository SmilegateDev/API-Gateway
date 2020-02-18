const express = require('express');
const jwt = require('jsonwebtoken');
const httpProxy = require('express-http-proxy');
const userServiceProxy = httpProxy('https://127.0.0.1:8005/test');
const url = require('url');

const { verifyToken, apiLimiter } = require('./middlewares');


const router = express.Router();



// router.get('/token', (req, res, next)=>{
//    userServiceProxy(req, res, next);
// })

express().use('/token', userServiceProxy);



router.get('/test', (req, res, next)=>{
    return res.status(200).json({
        code : 200,
        messgae : "dsfsdf",
    });
})


module.exports = router;