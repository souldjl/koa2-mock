/**
 * @file
 * @Author: daijiulong
 * @Date:   2019/4/12
 */
const mysql      = require('mysql')
const pool  = mysql.createPool({
    host     : '47.104.67.162',   // 数据库地址
    user     : 'root',    // 数据库用户
    password : 'root',  // 数据库密码
    database : 'department'  // 选中数据库
});



pool.getConnection(function(err, connection) {

    connection.query('SELECT * FROM Persons',  (error, results, fields) => {
        console.log(results);
        // 结束会话
        connection.release();

        // 如果有错误就抛出
        if (error) throw error;
    })
});
module.exports = db;
