import { Component, inject, Input, OnInit, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

  singUpUsers: any[] = [];
  singUpObj: any = {
    username: ''
  };
  loginObj: any = {
    username: ''
  };

  constructor(){

  }

  ngOnInit(): void{
    const localData = localStorage.getItem('singUpUsers');
    if(localData != null){
      this.singUpUsers = JSON.parse(localData);
    }
  }

  onSingUp(){
    this.singUpUsers.push(this.singUpObj);
    localStorage.setItem('singUpUsers', JSON.stringify(this.singUpUsers));
    this.singUpObj ={
      username: ''
    }
  
  }

}
