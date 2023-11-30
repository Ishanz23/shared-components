import { TitleCasePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'mfe-shared-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css'],
  standalone: true,
  imports: [TitleCasePipe],
})
export class DynamicComponent {
  @Input() propOne!: string;
  @Input() buttonName = 'Click Me!';
  @Output() customEvent = new EventEmitter<string>();

  onClickMe(event: MouseEvent) {
    console.log(event);
    this.customEvent.emit('Hi From Custom Event');
  }
}
