export class Pet {
	color: string;
	price: number;

	constructor(color: string, price: number) {
		this.color = color;
		this.price = price;
	}

	whiteOrFluffy() {
		return this.isYourColor('white') || this.isFluffy();
	}

	isFluffy() {
		return;
	}

	isYourColor(_color: string) {
		return this.color === _color;
	}
};