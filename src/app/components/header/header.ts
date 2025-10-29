import { Component, input } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  appName = input<string>('');

  appLogo: string = 'public/todo.png';

}
