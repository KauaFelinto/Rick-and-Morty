import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { CharactersServices } from './../../../services/characters.services';
import { CardComponent } from './../../components/card/card.component';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [CardComponent, RouterLink, RouterOutlet, RouterModule]
})
export class HomeComponent implements OnInit{

  sidebarActive = true;

  characters: any[] = [];
  params = {} as any;

  constructor(private charactersSvc: CharactersServices){

  }


  ngOnInit(): void {
      this.params.page = 0;
      this.getCharacters();
  }

  getCharacters(event?: any){
    this.params.page += 1;

    this.charactersSvc.getCharacters(this.params).subscribe({

      next: (res: any) =>{
        this.characters.push(...res.results);
        console.log(this.characters);
        
      },
      error: (error:any) =>{

      }


    })
  }

  searchCharacters(){
    this.params.page = 1;

    this.charactersSvc.getCharacters(this.params).subscribe({

      next: (res: any) =>{
        this.characters = res.results;
        
        
      },
      error: (error:any) =>{

      }
    })
  }


}
