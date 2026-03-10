import { Component } from '@angular/core';
import { Hero } from './hero';
import { Services } from './services';
import { About } from './about';
import { Contact } from './contact';

@Component({
  selector: 'app-home',
  imports: [Hero, Services, About, Contact],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
