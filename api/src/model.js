const mongoose     = require('mongoose');
const Schema       = mongoose.Schema;

/**
 * Test Case respresents a test we want to perform on a http RESTful service
 */
const testCaseSchema = new Schema({
  withStateId: String,
  whenHttpRequest: {
    verb: String,
    endpoint: String,
    queryString: Array,
    headers: Array,
    data: Array
  },
  expectedHttpResponse: {
    statusCode: String,
    headers: Array,
    body: String
  }
});

/**
 * Test Results represents the result of a Test Case performed in a specific time
 */
const testResultSchema = new Schema({
  testCaseId: Number,
  testDate: String,
  testResult: Boolean,
  responseStatusCode: String,
  responseHeaders: Array,
  responseBody: String
});

const schema = {
  testCaseSchema: testCaseSchema,
  testResultSchema: testResultSchema
};

module.exports = schema;