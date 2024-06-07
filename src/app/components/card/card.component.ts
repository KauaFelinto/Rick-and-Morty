import { Component, NgModule, OnInit } from '@angular/core';
import { CharactersServices } from '../../../services/characters.services';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [InfiniteScrollModule, FormsModule, RouterLink, RouterOutlet, RouterModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit{


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
        

        if(event){
          event.target.complete();
        }
        
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
