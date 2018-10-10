import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PetShopComponent }   from './app.component';
import { FormsModule }   from '@angular/forms';
import { PetListComponent }   from './petList.component';


@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ PetShopComponent, PetListComponent ],
    bootstrap:    [ PetShopComponent ]
})

export class AppModule { }