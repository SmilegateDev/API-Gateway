const express = require('express');
const jwt = require('jsonwebtoken');
const url = require('url');
const request = require('request');
const apiAdpater = require('./apiAdapter');
const qs = require('qs');

const { verifyToken, apiLimiter } = require('./middlewares');
const BASE_URL = 'http://'+process.env.FEED_URL+'/api/feed'; //여기에 나중에 auth 같은거 붙여서 prefix 사용할수있음; //여기에 나중에 auth 같은거 붙여서 prefix 사용할수있음
const router = express.Router();
const api = apiAdpater(BASE_URL);



router.post('/getFeed', apiLimiter, (req, res)=>{
    api.post(req.path,req.bod,req.headersy)
        .then(resp =>{
          return res.status(200).send(resp.data);
        })
        .catch(err =>{
          console.error(err);
          return res.status(500).json({
            code : 500,
            msg : "getFeed Error!"
          });
        })
});

module.exports = router;