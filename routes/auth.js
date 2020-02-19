const express = require('express');
const jwt = require('jsonwebtoken');
const url = require('url');
const request = require('request');
const apiAdpater = require('./apdiAdapter');

const { verifyToken, apiLimiter } = require('./middlewares');
const BASE_URL = 'http://localhost:8005'; //여기에 나중에 auth 같은거 붙여서 prefix 사용할수있음
const router = express.Router();
const api = apiAdpater(BASE_URL);


router.get('/test', (req, res)=>{
    api.get(req.path)
        .then(resp =>{
          return res.status(200).send(resp.data);
        })
});

module.exports = router;