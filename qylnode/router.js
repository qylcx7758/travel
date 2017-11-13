//加载模块
var express = require('express')
// 加载mysql
var mysql = require('mysql')
var bodyParser = require('body-parser')
var router = express.Router()
// urlencoded解码post数据
router.use(bodyParser.urlencoded({
  extended: false
}))

// 创建数据库连接池
var pool = mysql.createPool({
  connectionLimit: 100,
  host: '127.0.0.1',
  port: 3306,
  database: 'qiaojourney',
  user: 'root',
  password: 'root'
})

// 访问路径
router.get('/', (req, res) => {
  res.redirect('index.html')
  // 重定向index文件
})

router.get('/list', (req, res) => {
  // 每发送一次请求，都会从连接中中获取一次连接
  pool.getConnection((error, conn) => {
    if (error) throw error
    // var sql = "select landlord_id, houseimages_id, name, category, province, area, lower, upper, quantity, rate, description, image, consume, site, facility, room_sort, remark from house order by id"
    
      // var sql = "select * from house order by id"

    var sql="SELECT *,landlord.name as landlord_name,house.name as house_name,house.description as house_description   FROM house,landlord WHERE house.landlord_id=landlord.id"
    
    conn.query(sql, (error, results,fileds)=>{
      res.send(results)
    })
    conn.release()

  })
})



module.exports = router