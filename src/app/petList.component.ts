import { Input, Component } from '@angular/core';
import { Pet } from  "./models//Pet";

@Component({
    selector: 'pet-list',
    template: ` <h5>{{title}}</h5>
                <ul>
                    <li *ngFor="let pet of pets">{{pet.toString()}}</li>
                    
                </ul>`,
    styles: [`
    ul {
    cursor: pointer;
    margin-right: 4%;
    padding: 20px;
    width: 30%;
    display: inline-block;
    vertical-align: top;
    border: 1px solid #ebebeb;
    border-radius: 20px;
    box-sizing: border-box;
    background: #fafafa;
    transition: all 0.2s linear;
    box-shadow: 0px 3px 10px 0px rgba(212, 212, 212, 0.75);
    list-style-type:none;
}
`]
})

export class PetListComponent { 
    @Input() pets: Pet[];
    @Input() title : string;
}