import { Pet } from "./Pet";

export class PetShop {

  private petList: Pet[] = [];

  addPets(pets: Pet[]) {
    this.petList = this.petList.concat(pets);
  }

  getByType(type: any) {
    return this.petList.filter((value) => {
      return value instanceof type;
    });
  }

  getGreaterThanEvaragePrice() {
    let avaragePrice = this.getAvaragePrice();

    return this.petList.filter((value) => {
      return value.price > avaragePrice
    });
  }

  getFluffyAndWhite() {
    return this.petList.filter((value) => {
      return value.whiteOrFluffy();
    });
  }

  clearList() {
    this.petList = [];
  }

  private getAvaragePrice() {
    let summaryPrice = this.petList.reduce((current, next) => {
      return current + next.price;
    }, 0);

    return summaryPrice / this.petList.length;
  }
}