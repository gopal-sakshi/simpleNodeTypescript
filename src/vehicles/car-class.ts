import { Vehicle } from './vehicle.interface'

export class Car implements Vehicle {
    wheelCount:number = 4;
    passengerCount:number = 4;
    speed:number = 60;
    type:string = 'light-weight';
    isRunning:boolean;                                      // not existing on vehicle interface
    name:string;                                            // not existing on vehicle interface
    famousCars:string[] = ['Audi', 'Benz', 'BMW'];          // property only on Car class... with default value    

    constructor(name?:string) {
        if(name) this.name = name;
        else this.name = 'no_name_provided'
    }

    getDetails():any {
        return { 
            name: this.name, 
            speed: this.speed, 
            passengerCount: this.passengerCount
        }
    }

    startEngine(): boolean {
        if(this.isRunning) {
            console.log('cant start engine of already running car');
            return false
        } else {
            console.log('engine started');
            this.isRunning = true;
            return true;
        }
    }

    stopEngine(): boolean {
        if(this.isRunning) {
            console.log('stopping engine');
            this.isRunning = false;
            return true;
        } else {
            console.log('cant stop already stopped car');
            return false;
        }
    }

    soundHorn() {
        console.log('souding Car Horn');
    }

    isFamousCar():boolean {                                             // method existing ONLY on Car class
        if(this.famousCars.includes(this.name)) return true;
        else return false
    }

}