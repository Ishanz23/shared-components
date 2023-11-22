import { Component, Input } from '@angular/core';

@Component({
  selector: 'mfe-shared-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css'],
})
export class DynamicComponent {
  @Input() propOne!: string;
  @Input() propTwo!: number;
}
