import {RegistryEntry,StatusEnum} from './registryEntry';
import { Test } from './test';

export class Registry{
 
    constructor(){
        this.Entries =  new Map();
    }

 Entries: Map<string,RegistryEntry>;
}


