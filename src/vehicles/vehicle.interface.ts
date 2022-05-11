export declare interface Vehicle {
    wheelCount:number,
    passengerCount:number,
    speed:number,
    type:string,
    startEngine():boolean,
    stopEngine():boolean,
    soundHorn():any
}