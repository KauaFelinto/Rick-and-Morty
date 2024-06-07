import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-acount',
  standalone: true,
  imports: [RouterLink, RouterOutlet, RouterModule],
  templateUrl: './acount.component.html',
  styleUrl: './acount.component.scss'
})
export class AcountComponent {
  loginObj: any = {
    username: ''
  };
}
