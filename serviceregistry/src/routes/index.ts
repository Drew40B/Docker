import { Router } from "express";
import { Registry } from "../registry/registry";
import { RegistryEntry } from "../registry/registryEntry";

const index: Router = Router();
const registry = new Registry();

/* GET home page. */
index.get("/", function(req, res, next) {
  res.send(Array.from(registry.Entries.values()));
});

index.post("/", function(req, res, next) {
  let entry = <RegistryEntry>req.body;

  let key =  `${entry.serviceName}:${entry.instanceId}`;

  var map = registry.Entries;

  map.set (key, entry);

  res.status(200).send(entry);




});

export default index;
