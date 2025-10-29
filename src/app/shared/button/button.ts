import { Component, input, output } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [NgClass],
  templateUrl: './button.html',
  styleUrl: './button.css'
})
export class Button {

  label = input('');
  type = input<'button' | 'submit' | 'reset'>("button");
  color = input<'default' | 'save' | 'cancel' | 'close' | 'search'>('default');
  disabled = input(false);

  clicked = output<void>();

  onClick() {
    if(!this.disabled()){
      this.clicked.emit();
    }
  }

}
