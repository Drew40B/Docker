export default class Config{
    Delay:number = process.env.Delay || 5 * 1000;
    Alternate:boolean = process.env.Alternate || true;
    Url:string = process.env.URL || "http://192.168.99.100:4000/"
}