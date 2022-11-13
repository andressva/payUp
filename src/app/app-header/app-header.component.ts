import { Component } from '@angular/core';
import { faUserAstronaut, faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})

export class HeaderComponent {
  faUserAstronaut = faUserAstronaut;
  faBars = faBars;
}