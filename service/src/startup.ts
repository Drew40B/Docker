import ServiceRequest from "./ServiceRequest";
import * as rm from "typed-rest-client/RestClient";
import Config from "./config";
import { IHeaders } from "typed-rest-client/Interfaces";

async function run() {
  const id = process.env.ID || "<Unknown>";
  const config = new Config();

  console.log(`Service Id: ${id}`);

  var sr = new ServiceRequest();
  sr.instanceId = id;
  sr.serviceName = "Service";
  sr.status = "red";

  let rest: rm.RestClient = new rm.RestClient("My Agent", config.Url);

  
  let json = JSON.stringify(sr);
  console.log(json);
  let headers: IHeaders = {
    "Content-Type": "application/json"
  }
  
  let result = await rest.client.post(config.Url,json,headers);

  console.log(`Post made to ${config.Url}. Response: ${result.message.statusCode} (${result.message.statusMessage}`)

}

run();
