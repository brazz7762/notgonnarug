//Install express server
const express = require('express');
const path = require('path');
const cors = require('cors')
const bodyParser = require('body-parser');
const app = express();

const connectOptions = {
  autoReconnect: true,
  useNewUrlParser: true,
  promiseLibrary: global.Promise // Deprecation issue again
};

app.use(bodyParser.json());

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/'));

app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname+'/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 6969);