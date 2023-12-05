import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {
  Email(){
    alert('Contate-nos no email: empresaqtx@gmail.com');
  }
  Insta(){
    alert('Visite nossa página no Instagram: @petroliferaQTX');
  }
  Whats(){
    alert('Contate-nos no Whatsapp: +55 (15) 99876-5432');
  }
}
