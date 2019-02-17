/**
 * @description Default project file, call necessary routes
 * 
 * @author Thiago Castilho
 * @date 2019-02-16
 */

const express = require('express'),
  http = require('http'),
  search = require('./api/routes/search-route'),
  blacklist = require('./api/routes/blacklist-route'),
  whitelist = require('./api/routes/whitelist-route'),
  status = require('./api/routes/status-route');

const app = express();

const hostname = process.env.HOSTNAME || 'localhost';
const port = process.env.PORT || '8080';
app.set('port', port);

app.use('/document', search);
app.use('/blacklist', blacklist);
app.use('/whitelist', whitelist);
app.use('/status', status);

const server = http.createServer(app);
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;