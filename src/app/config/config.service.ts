// config.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  public urlTwitter = 'https://twitter.com/AdriLaraCode';
  public urlGitHub = 'https://github.com/Alarbon';
  public urlLinkedin = 'https://linkedin.com/in/adrián-lara-bonilla-306413180/';
  public logo = 'assets/logo.png';
}
