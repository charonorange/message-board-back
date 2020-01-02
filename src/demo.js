// 1. 纯node js写法 第一个demo
// const http = require('http');
// const server = http.createServer((req, res) => {
//   res.end('heee5llo')
// })

// server.listen(3000, '127.0.0.1', () => {
//   console.log('fuwu ')
// })
// app.use((req, res) => {
//   res.json({
//     name: "orange"
//   })
// })

// app.get('/name/:age', (req,res)=>{
//   let {age} = req.params;
//   res.json({
//     name: 'tom',
//     age
//   })
// })

// app.post('/name', (req,res)=>{
//   res.json({
//     name: 'tom',
//   })
// })

// app.get('/user/byname', (req,res)=>{
//   let {name} = req.query;
//   res.json({
//     name
//   })
// })

// app.get('/user/byid', (req,res)=>{
//   let {id} = req.query;
//   res.json({
//     id
//   })
// })


// 中间件

function err() {

}
app.all('/demo',[err], (req,res) => {
  res.json({
    name: 'tom',
  })
})

app.all('*', (req,res) => {
  res.json({
    name: 'eee',
    uri: req.path
  })
})


app.use(express.static('static', {
  extensions:['html', 'htm']
}))