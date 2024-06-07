import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { CharactersServices } from "../../services/characters.services";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [],
    exports: [
        RouterModule
    ],
    imports: [ CommonModule, HttpClientModule, RouterModule],
    providers: [CharactersServices]
})

export class sharedModule { }