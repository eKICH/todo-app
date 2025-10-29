import { ChangeDetectorRef, Component, effect, inject, input, NgZone, output, signal} from '@angular/core';
import { Button } from '../button/button';
import { CommonModule, NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'app-modal',
  imports: [CommonModule, Button, NgComponentOutlet],
  templateUrl: './modal.html',
  styleUrl: './modal.css'
})
export class Modal {

  private cdr = inject(ChangeDetectorRef);
  private zone = inject(NgZone);

  isOpen = input(false);
  title = input<string>('Default');
  topHeader = input<string>('');
  contentComponent = input<any | null>(null);
  contentInputs = input<Record<string, unknown> | undefined>(undefined);

  closed = output<void>();

  constructor(){

    effect(() => {
      const open = this.isOpen();
      const cont = this.contentComponent();
      const inputs = this.contentInputs();

      if (open && cont) {

        queueMicrotask(() => {
          this.zone.run(() => {
            try {
              this.cdr.detectChanges();
            } catch {
              console.log("Not Changed")
            }
          });
        });
        
      }

    });

  }

  triggerAction(){
    
    console.log("clicked")
  }

  close(){
    this.closed.emit();
  }

}
