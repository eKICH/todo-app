import { Component, input } from '@angular/core';
import { _Toast } from '../../model/toast.model';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-toast',
  imports: [NgClass],
  templateUrl: './toast.html',
  styleUrl: './toast.css'
})
export class Toast {

  toast = input<_Toast | null>(null);

}
