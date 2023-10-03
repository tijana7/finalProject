import { Component } from '@angular/core';
import { faFacebookF ,faTwitter,  faPinterest, faYoutube,faInstagram } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-social-bar',
  templateUrl: './social-bar.component.html',
  styleUrls: ['./social-bar.component.css']
})
export class SocialBarComponent {
facebook = faFacebookF;
twitter = faTwitter;
pinterest = faPinterest;
youTube = faYoutube;
instagram = faInstagram;
}
