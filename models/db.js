const mysql = require('mysql');
const dbConfig = require('../config').db;
// 创建连接池，使用的时候，getConnection 释放连接回池子的时候release

const pool = mysql.createPool(dbConfig);

let db = {};
// 封装了mysql查询的功能
db.q = (sql, params) => {
  return new Promise((resolve, reject) => {
    pool.getConnection(function (err, connection) {
      // if (err) throw err; // not connected!
      // Use the connection
      // 使用连接 params参数是数组
      connection.query(sql, params, (error, results, fields) => {
        // When done with the connection, release it.
        // 释放连接
        connection.release();
        // Handle error after the release.
        if (error) return reject(error);
        // 成功传递数据
        resolve(results);
      });
    });
  })
}

//导出db对象
module.exports = db;