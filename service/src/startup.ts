import ServiceRequest from "./ServiceRequest";
import * as rm from "typed-rest-client/RestClient";
import Config from "./config";
import { IHeaders } from "typed-rest-client/Interfaces";
import { ENGINE_METHOD_PKEY_ASN1_METHS } from "constants";

enum Status {
  pass = 1,
  warn = 0,
  fail = -1
}

const id = process.env.ID || "<Unknown>";
const config = new Config();
let _lastStatus: Status = Status.fail;

async function run() {
  console.log(`Staring Service Id: ${id}`);
  console.log(`Delay:${config.Delay}`);

  await sendStatus();

  setInterval(() => {
    sendStatus();
  }, config.Delay);
}

async function sendStatus() {
  var sr = new ServiceRequest();
  sr.instanceId = id;
  sr.serviceName = "Service";

  let status: Status = _lastStatus;

  if (config.Alternate) {
    status = status == Status.fail ? Status.pass : Status.fail;
    _lastStatus = status;
  }
  sr.status = Status[status];

  let rest: rm.RestClient = new rm.RestClient("My Agent", config.Url);

  let json = JSON.stringify(sr);

  let headers: IHeaders = {
    "Content-Type": "application/json"
  };

  let result = await rest.client.post(config.Url, json, headers);

  console.log(
    `${new Date().toLocaleString('en-GB')} Sending status: ${Status[status]} to ${config.Url}. Response: ${result.message.statusCode} (${result.message.statusMessage})`
  );
    

}
run();
