import {Test} from  './test';

export enum StatusEnum{ 
    Red = 3,
    Yellow = 2,
    Green =1,
}

export class RegistryEntry{
    serviceName:string;
    instanceId:string;
    status:StatusEnum;
    tests: Test[];

    createKey() :string{
        return `${this.serviceName}:${this.instanceId}`;
    }

}