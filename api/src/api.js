const schema = require("./model");
const express = require('express');
const mongoose = require('mongoose');
const mongoDB = 'mongodb://127.0.0.1/http_service_validator_db';
const api = express();
const bodyParser = require('body-parser');

api.use(bodyParser.json());
api.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(mongoDB, {});
mongoose.Promise = global.Promise;
const dbConn = mongoose.connection;
dbConn.on('error', console.error.bind(console, 'MongoDB connection error:'));

api.all('/test-cases', function (req, res, next) {
  switch (req.method){
    case 'POST':
      const TestCase = mongoose.model('TestCase', schema.testCaseSchema);
      const testCase = new TestCase({
        withStateId: req.body.withStateId,
        whenHttpRequest: {
          verb: req.body.whenHttpRequest.verb,
          endpoint: req.body.whenHttpRequest.endpoint,
          headers: req.body.whenHttpRequest.httpHeaders,
          queryString: req.body.whenHttpRequest.queryString,
          data: req.body.whenHttpRequest.data
        },
        expectedHttpResponse: {
          statusCode: req.body.expectedHttpResponse.statusCode,
          headers: req.body.expectedHttpResponse.statusCode,
          body: req.body.expectedHttpResponse.statusCode
        }
      });
      testCase.save(function(err, data) {
        if (err) console.log(err);
        else console.log(' + Test Case created!');
      });
      break;
    case 'PUT':
      // TODO: Implement
      break;
    case 'PATCH':
      // TODO: Implement
      break;
    case 'GET':
      // TODO: Implement
      break;
    case 'DELETE':
      // TODO: Implement
      break;
  };

  console.log('req.method: ', req.method);
  next() // pass control to the next handler
});

api.get('/test-results', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({
     a: 1
  }));
});

api.listen(3000, () => console.log(' + API running!'))
