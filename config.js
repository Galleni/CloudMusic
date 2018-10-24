const path = require('path');
module.exports = {
  uploadDir: path.join(__dirname, 'public/files'),
  db: {
    // mysql 默认端口3306
    // oracle 默认端口1521
    // sqlserver 默认端口1433
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'node_music',
  }
}