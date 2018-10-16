import {Pet} from "./Pet";

export class Hamster extends Pet {
color: string;
price: number;
isFlaffy: boolean;

constructor (color: string, price: number, isFlaffy: boolean) {
super(color, price);
this.isFlaffy = isFlaffy;
}

toString () {
return `${this.color} hamster, price: ${this.price}$  fluffy is ${this.isFlaffy}`
	}

	isFluffy () {
    	if (this.isFlaffy === true) {
    		return true;
    	} else {
    		return false;
    	}
    }
};