const express = require('express');
const jwt = require('jsonwebtoken');
const url = require('url');
const request = require('request');
const apiAdpater = require('./apiAdapter');
const qs = require('qs');

const { verifyToken, apiLimiter } = require('./middlewares');
const BASE_URL = 'http://'+process.env.CONTENTS_URL+'/api/auth'; //여기에 나중에 auth 같은거 붙여서 prefix 사용할수있음; //여기에 나중에 auth 같은거 붙여서 prefix 사용할수있음
const router = express.Router();
const api = apiAdpater(BASE_URL);



router.post('/create', apiLimiter, (req, res)=>{
    api.post(req.path,req.bod,req.headersy)
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


router.get('/getMyPost', apiLimiter, (req, res)=>{
  api.post(req.path,req.body,req.headers)
      .then(resp =>{
        return res.status(200).send(resp.data);
      })
      .catch(err=>{
        console.log(err.message);
        return res.status(500).json({
          code : 500,
          msg : "getMyPost Error"
        })
      });
});


router.post('/getUserPost', apiLimiter, (req, res)=>{
  api.post(req.path,req.body,req.headers)
      .then(resp =>{
        return res.status(200).send(resp.data);
      })
      .catch(err =>{
        console.error(err);
        return res.status(500).json({
          code : 500,
          msg : "getUserPost Error"
        });
      })
});

router.post('/getReply', apiLimiter, (req, res)=>{
  api.post(req.path,req.body,req.headers)
      .then(resp =>{
        return res.status(200).send(resp.data);
      })
      .catch(err =>{
        console.error(err);
        return res.status(500).json({
          code : 500,
          msg : "getReply Error"
        });
      })
});


router.post('/ceateReply', apiLimiter, (req, res)=>{
  api.post(req.path,req.body,req.headers)
      .then(resp =>{
        return res.status(200).send(resp.data);
      })
      .catch(err =>{
        console.error(err);
        return res.status(500).json({
          code : 500,
          msg : "getReply Error"
        });
      })
});

module.exports = router;