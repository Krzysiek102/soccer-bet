# SoccerBet

This project is deployed here: https://soccer-bet.herokuapp.com

To run it locally:
* add secrets.json file to the main catalog with connectionString do mongo db
* run npm install
* to run server (node) and client (angular) separately (to have a sepratre logging) use commands `npm run server` and `npm run client`
* to run server and client concurrently (logs fall into the same place) use command `npm run local`

How to debug client locally:
* In Visual Studio Code trigger `ng server` debug configuration
* Put a breakpoint on ts file - it should be catched in VS Code

How to debug server locally:
* Install nodemon globally `npm install -g nodemon` (one off action)
* In Visual Studio Code trigger `node attach` debug configuration
* Put a breakpoint server script - it should catched in VS Code
