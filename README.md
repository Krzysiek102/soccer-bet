# SoccerBet

This project is deployed here: <https://soccer-bet.herokuapp.com>
Travis CI pipeline: <https://travis-ci.org/Krzysiek102/soccer-bet>

## Local execution

### Prerequisites

* add secrets.json file to the main catalog with connectionString do mongo db. Please have a look on secrets.sample.json file to check the expected format.
* run `npm install`

### Run locally

* to run server (node) and client (angular) separately (to have a sepratre logging) use commands `npm run server` and `npm run client`
* to run server and client concurrently (logs fall into the same place) use command `npm run local`

### Debug client locally

* In Visual Studio Code trigger `ng server` debug configuration
* Put a breakpoint on ts file - it should be catched in VS Code

### Debug server locally

* Install nodemon globally `npm install -g nodemon` (one off action)
* In Visual Studio Code trigger `node attach` debug configuration
* Put a breakpoint in server script - it should be catched in VS Code
