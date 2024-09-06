"use strict";

interface IData {
    id: number;
    [propName: string]: any;
}

class genClass{
    private id: number = undefined
    private name: string = undefined
    private animals: Array<string> = undefined
    private static instance = new genClass()
    private static keys = Object.keys(this.instance)

    public constructor()
    public constructor(params: Object)
    public constructor(...args: any){
        if (args.length > 0){
            const params = args[0]
            for(let key in params){
                //console.log(key, params[key])
                this[key] = params[key]
            }
        }
    }

    public getMethods(){
        console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(this)))
    }
}

const instance = new genClass()
const instance2 = new genClass({edad: "31", nacionalidad: "Mexicana", name: "Jair"})

let properties = Object.keys(instance)
let properties2 = Object.keys(instance2)

console.log(JSON.stringify(instance))
console.log(JSON.stringify(instance2))
console.log(instance2.getMethods())

//@ts-ignore
console.log(instance2.edad)