const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const memberRouter = require('./member.router');
const models = require('../models')

app.use(express.json());
app.use(express.urlencoded());
app.use(bodyParser.urlencoded({ extended: true}));

// app.use('namespace',memberRouter)


// allow custom header and CORS
app.all('*',function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

  if (req.method == 'OPTIONS') {
    res.send(200);
  }
  else {
    next();
  }
});

app.get('/message/list', async (req, res, next) => {
  let list = await models.Comments.findAll({
    where: {
      is_delete: 1
    }
  });
  res.json({
    list
  })
})

app.post('/message/create', async (req, res) => {
  let { content, is_delete } = req.body;
  let user = await models.Comments.create({
    content,
    is_delete
  })
  res.json({
    message: "创建成功",
    user
  })
})

app.put('/message/update', async (req, res) => {
  let {id,is_delete} = req.body;
  let todo = await models.Comments.findOne({
    where: {
      id
    }
  })
  if(todo){
    todo = await todo.update({
      is_delete
    })
  }
  res.json({
    todo
  });
})

app.use((err,req,res,next) =>{
  if (err){
    res.status(500).json({
      message: err.message
    })
  }
})

app.listen(3000, '127.0.0.1', () => {
  console.log('ornage')
})