# SoccerBet

This project is deployed here: <https://soccer-bet.herokuapp.com>
Travis CI pipeline: <https://travis-ci.org/Krzysiek102/soccer-bet>

## Local execution

### Prerequisites

* add secrets.json file to the server catalog with connectionString do mongo db. Please have a look on ./server/secrets.sample.json file to check the expected format
* run `npm install`

### Run locally

* to run server (node) and client (angular) separately (to have a sepratre logging) use commands `npm run server` and `npm run client`
* to run server and client concurrently (logs fall into the same place) use command `npm run local`

### Debug server locally

* Install nodemon globally `npm install -g nodemon` (one off action)
* While having server running, in VS Code on debug panel trigger `debug server` debug configuration
* Put a breakpoint in server script - it should be catched in VS Code

### Debug client locally

* In VS Code trigger `debug client` debug configuration. It should open a new browser window on which actions should be breakable by debugger
* Put a breakpoint on ts file - it should be catched in VS Code
