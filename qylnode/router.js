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

router.get('/house', (req, res) => {
  // 每发送一次请求，都会从连接中中获取一次连接
  pool.getConnection((error, conn) => {
    if (error) throw error
    // var sql = "select landlord_id, houseimages_id, name, category, province, area, lower, upper, quantity, rate, description, image, consume, site, facility, room_sort, remark from house order by id"

    // var sql = "select * from house order by id"

    var sql = "SELECT *,landlord.name as landlord_name,house.name as house_name,house.description as house_description   FROM house,landlord WHERE house.landlord_id=landlord.id"

    conn.query(sql, (error, results, fileds) => {
      res.send(results)
    })
    conn.release()

  })
})

// 新增
router.get("/addhouse", (req, res) => {
  console.log(req.query)
  pool.getConnection((error, conn) => {
    var sql = " INSERT into qiaojourney.house(landlord_id,houseimages_id,name)values(?,?,?)"
    // 这里的req.query如何对象转字符串，再转数组
    var data = [req.query.landlord_id,req.query.houseimages_id,req.query.name]
    conn.query(sql, data, (error, results, fields) => {
      if (error) throw error
      // 受影响的行数
      console.log(results.affectedRows)
      res.send("ok")
    })
    conn.release()
  })
})



module.exports = router