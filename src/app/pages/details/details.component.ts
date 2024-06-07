import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { sharedModule } from '../../shared/shared.module';
import { CharactersServices } from '../../../services/characters.services';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, RouterModule, sharedModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit{

  characterId:string = '';
  character = null as any;

  constructor(
    private acRoute: ActivatedRoute,
    private charactersSvc: CharactersServices
  ) {
    this.characterId = this.acRoute.snapshot.paramMap.get('id') as string;
    console.log(this.characterId);
    
  }

  ngOnInit(): void {
      
  }
  ngAfterViewInit(){
    this.getCharacters()
    
  }

  getCharacters(){

    this.charactersSvc.getCharactersById(this.characterId).subscribe({

      next: (res: any) =>{
        console.log(res);
        this.character = res;
        
      },
      error: (error:any) =>{

      }
    })
  }
}
