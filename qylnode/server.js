// 加载模块和路由文件
var express = require('express')
var path = require('path')
var router = require('./router.js')

// 运行express模块
var app = express()

// 增加header,允许来源访问
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'origin,X-Requested-With,Content-Type,Accept')
  next()
})
// 设置静态资源路径
var staticResources = express.static(path.join(__dirname, 'public'))
// 使用静态资源
app.use(staticResources)
// 使用路由设置
app.use('/', router)

// 监听
app.listen(3000, () => {
  console.log('qiao-server running at 3000')
})
