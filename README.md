### http service validator

Validate http services easily

### TODO:
* Implement UI form to persist test cases into the API
* Implement UI list to show current test cases
* Implement UI list to show test results 
* Implement endpoints API
* Add validation to API
* Implement erlang app to process tests

#### Setup
`cd api`
`npm install`

#### API

Node http api used to manage test cases and retrieve test results.
`cd api`
`npm install`
`node src/api.js`

#### Worker

Erlang app that runs the tests concurrently and persists the results into the database.

### UI

User Interface to manage test cases and see results.