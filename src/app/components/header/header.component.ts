import { Component } from '@angular/core';
import { faUserCircle, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  faUser = faUserCircle;
  faCart=faShoppingCart;
}
