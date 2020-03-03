const express = require('express');
const jwt = require('jsonwebtoken');
const url = require('url');
const request = require('request');
const apiAdpater = require('./apdiAdapter');
const qs = require('qs');

const { verifyToken, apiLimiter } = require('./middlewares');
const BASE_URL = 'http://localhost:8002/api/auth'; //여기에 나중에 auth 같은거 붙여서 prefix 사용할수있음
const router = express.Router();
const api = apiAdpater(BASE_URL);


router.post('/join', apiLimiter, (req, res)=>{
    api.post(req.path,req.body)
        .then(resp =>{
          return res.status(200).send(resp.data);
        })
        .catch(err =>{
          console.error(err);
          return res.status(500).json({
            code : 500,
            msg : "오류!"
          });
        })
});

router.get('/confirmEmail', apiLimiter, (req, res)=>{
  console.log(req.path+req.query);
  api.get(req.path+'?'+qs.stringify(req.query))
      .then(resp =>{
        return res.status(200).send(resp.data);
      })
      .catch(err =>{
        console.error(err);
        return res.status(500).json({
          code : 500,
          msg : "Error"
        });
      })
});


router.post('/login', apiLimiter, (req, res)=>{
  api.post(req.path,req.body)
      .then(resp =>{
        if(res.code == 200)
          return res.status(200).json(resp.data);

      })
      .catch(err=>{
        console.log(err.message);
        return res.status(500).json({
          code : 500,
          msg : "유저가 이미 존재합니다!0"
        })
      });
});

router.get('/kakao', apiLimiter, (req, res)=>{
  api.get(req.path)
      .then(resp =>{
        return res.status(200).json(resp.data);
      })
      .catch(err=>{
        console.log(err.message);
        return res.status(500).json({
          code : 500,
          msg : "Error"
        })
      });
});

router.get('/token', verifyToken, apiLimiter, (req, res)=>{
  api.get(req.path, req.data)
      .then(resp =>{
        return res.status(200).json(resp.data);
      })
      .catch(err=>{
        console.log(err.message);
        return res.status(500).json({
          code : 500,
          msg : "Error"
        })
      });
});

module.exports = router;