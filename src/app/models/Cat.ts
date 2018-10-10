import { Pet } from "./Pet";

export class Cat extends Pet {
    color: string;
    price: number;
    name: string;
    isFlaffy: boolean;

    constructor(color: string, price: number, name: string, isFlaffy: boolean) {
        super(color, price);

        this.name = name;
        this.isFlaffy = isFlaffy;
    }

    isFluffy() {
        return this.isFlaffy === true ? true : false;
    }

    toString() {
        return `${this.name} color: ${this.color}  price - ${this.price}$,  fluffy is ${this.isFlaffy}`
    }
};