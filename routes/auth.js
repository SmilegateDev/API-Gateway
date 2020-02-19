const express = require('express');
const jwt = require('jsonwebtoken');
const httpProxy = require('express-http-proxy');
const userServiceProxy = httpProxy('https://127.0.0.1:8005/test');
const url = require('url');
const request = require('request');

const { verifyToken, apiLimiter } = require('./middlewares');


const router = express.Router();



router.get('/token', (req, res, next)=>{
   request({
       method : 'GET',
       uri : 'http://localhost:8005/test' 
   },function(err, response, body){
        if(err){throw err;}
        return res.status(200).send(body);
   });
});

// express().use('/token', userServiceProxy);

router.get('/test', (req, res, next)=>{
    return res.status(200).json({
        code : 200,
        messgae : "dsfsdf",
    });
})


module.exports = router;