import { Router } from 'express';
import {Registry} from "../registry/registry"
import { RegistryEntry } from '../registry/registryEntry';

const index: Router = Router();
const registry = new Registry();

/* GET home page. */
index.get('/', function(req, res, next) {
 // res.render('index', { title: 'Visual Studio Code!' });
 res.send(registry);
});

index.post('/', function(req,res,next){
   let entry = <RegistryEntry> req.body;

   registry.Entries.push(entry);

   res.status(200).send("OK")
});

export default index;
