import { Component } from '@angular/core';
import { PetShop } from "./models/PetShop";
import { Cat } from "./models/Cat";
import { Dog } from "./models/Dog";
import { Hamster } from "./models/Hamster";
import { Pet } from "./models//Pet";
import { NgModule } from '@angular/core';

@Component({
    selector: 'pet-shop',
    template: ` 
        <div class="panel">
        <div class="form-inline">
            <div class="form-group">
                <div class="col-md-8">
                    <input class="form-control" [(ngModel)]="name" placeholder = "Name" />
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-6">
                    <input type="number" class="form-control" [(ngModel)]="price" placeholder="Price" />
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-6">
                    <input class="form-control" [(ngModel)]="color" placeholder="Color" />
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-offset-2 col-md-8">
                    <button class="btn btn-default" (click)="addItem(color, price, name)">Add</button>
                </div>
            </div>
        </div>
        <pet-list [title]="listTitle" [pets]="selectedPets"> </pet-list>
        <button (click)="showPetList('Cats')">Show all cats</button>
        <button (click)="showPetList('ExpensivePets')">Show all expensive pets</button>
        <button (click)="showPetList('Fluffy')">Show all fluffy and white pets</button>`,
    styles: [`
    button {
    cursor: pointer;
    
    padding: 20px;
    
}
`]
})

export class PetShopComponent {
    petShop: PetShop;
    listTitle: string;
    selectedPets: Pet[];

    addItem(color:string, price: number, name: string) {
         
        
        this.petShop.push(new Dog(color, price, name));
    }

    constructor () {
        this.petShop = new PetShop();
        this.petShop.addPets([new Cat('white', 453, 'Jeka', true),
            new Cat('grey', 334, 'Bonya', true),
            new Cat('white', 234, 'Pepe', false),
            new Dog('black', 654, 'Muhtar'),
            new Dog('brown', 123, 'Tobik'),
            new Dog('black', 987, 'Lolo'),
            new Hamster('black', 176, true),
            new Hamster('yellow', 431, true),
            new Hamster('white', 830, false)
        ]);
    }

    showPetList (value: string) {
        this.listTitle = value;

        if (value === 'Cats') {
            this.selectedPets = this.petShop.getByType(Cat);
        } else if (value === 'ExpensivePets') {
            this.selectedPets = this.petShop.getGreaterThanEvaragePrice();
        } else if (value === 'Fluffy') {
            this.selectedPets = this.petShop.getFluffyAndWhite();
        }
    }
}
