const express = require('express');
const jwt = require('jsonwebtoken');
const url = require('url');
const request = require('request');
const apiAdpater = require('./apdiAdapter');

const { verifyToken, apiLimiter } = require('./middlewares');
const BASE_URL = 'http://localhost:8002/api/auth'; //여기에 나중에 auth 같은거 붙여서 prefix 사용할수있음
const router = express.Router();
const api = apiAdpater(BASE_URL);


router.post('/join', (req, res)=>{
    api.post(req.path,req.body)
        .then(resp =>{
          return res.status(200).send(resp.data);
        })
});

router.get('/confirmEmail', (req, res)=>{
  api.get(req.path)
      .then(resp =>{
        return res.status(200).send(resp.data);
      })
});


router.post('/login', (req, res)=>{
  api.post(req.path,req.body)
      .then(resp =>{
        return res.status(200).send(resp.data);
      })
      .catch(err=>{
        console.log(err.message);
      });
});

router.get('/kakao', (req, res)=>{
  api.get(req.path)
      .then(resp =>{
        return res.status(200).send(resp.data);
      })
      .catch(err=>{
        console.log(err.message);
      });
});

module.exports = router;