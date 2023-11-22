import { Component } from '@angular/core';
import { ConfigService } from '../../config/config.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(public configService: ConfigService) {
    
  }
}
