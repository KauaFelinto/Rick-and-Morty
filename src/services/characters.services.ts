import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../environments/environment.development";

@Injectable({
    providedIn: 'root'
})

export class CharactersServices{


    constructor(private http: HttpClient){

    }

    getCharacters(params: any){
        return this.http.get(environment.baseUrl + environment.character, {params})
    }

    getCharactersById(id: string){
        return this.http.get(environment.baseUrl + environment.character + id)
    }
}