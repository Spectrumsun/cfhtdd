var path = require('path'),
rootPath = path.normalize(__dirname + '/../..');
var keys = rootPath + '/keys.txt';
require('dotenv').config({ path: '.env' });

module.exports = {
	root: rootPath,
	port: process.env.PORT,
    db: process.env.MONGOHQ_URL
};
