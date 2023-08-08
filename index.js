const express = require("express");
const bodyParser = require("body-parser");

const app = express().use(bodyParser.json());
const port = process.env.PORT || 3000;
const _function = require("./function");
app.listen(port, () => {
  // const today = Date.now();
  // const d = new Date();
  // console.log(d.toLocaleString('default',{
  //   day:'numeric',
  //   month:'short',
  //   year:"numeric",
  //   hour:"numeric",
  //   minute:"numeric",
  //   second:"numeric",
  //   timeZoneName:"short",
  //   timeZone:"Asia/Hong_kong",  
  // }))
  console.log(`server is listening on port ${port}`);
});

// Import the appropriate class
const { WebhookClient } = require("dialogflow-fulfillment");

//http post request
app.post("/webhook-laa-chatbot", (request, response) => {
  dialogflowFulfillment(request, response);
});

//http get request
app.get("/", (request, response) => {
  response.send("Webhook using express.js");
});

const dialogflowFulfillment = (request, response) => {
  const agent = new WebhookClient({ request: request, response: response });
  function welcome(agent) {
    agent.add(`Welcome to my agent! from webhook`);
  }
  //connect intent with the function within webhook
  let intentMap = new Map();
  intentMap.set("11. Insert Spreadsheet", _function.addApi);

  agent.handleRequest(intentMap);
};
