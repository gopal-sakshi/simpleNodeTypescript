import { Vehicle } from './vehicle.interface'

export class Train implements Vehicle {
    wheelCount: 50;
    passengerCount: 700;
    speed: 100;
    type: 'heavy-heavy-weight';
    isRunning:boolean;                                      
    name:string;                                            
    famousTrains:string[] = ['Rajdhani', 'Duronto', 'Shatabdi'];

    constructor(name?:string) {
        if(name) this.name = name;
        else this.name = 'no_name_provided'
    }

    getDetails():any {
        return { 
            name: this.name, 
            speed: this.speed, 
            type: this.type
        }
    }

    startEngine(): boolean {
        if(this.isRunning) {
            console.log('cant start engine of already running train');
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
            console.log('cant stop already stopped train');
            return false;
        }
    }

    soundHorn() {
        console.log('souding Train Horn - please clear off tracks');
    }

    isFamousTrain():boolean {
        if(this.famousTrains.includes(this.name)) return true;
        else return false
    }

}