import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { Modal } from './shared/modal/modal';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Footer } from "./components/footer/footer";


@Component({
  selector: 'app-root',
  imports: [Header, Modal, RouterOutlet, RouterModule, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  protected readonly title = signal<string>('todo');

}
