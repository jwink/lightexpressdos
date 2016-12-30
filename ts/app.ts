
import * as express from 'express';
import * as path from 'path';

let app = express();

app.use('/', express.static(path.join(__dirname, '../public')), function(req, res, next) {
  next();
});

let port = process.env.PORT || 8080;

app.listen(port);

console.log("server is up and running");

