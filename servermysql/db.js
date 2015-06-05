var mysql      = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'admin',
  password        : '123456',
  database        : 'test'
});


pool.getConnection(function(err, connection) {
  if(err){
    console.error('error pool connecting: ' + err.stack);
    return;
  }
  console.log('db connection established ');
  connection.release();
});



//connection.end();

module.exports = pool;