import { NgModule } from '@angular/core';
import { SharedComponentsComponent } from './shared-components.component';
import { ImageCanvasComponent } from './image-canvas/image-canvas.component';

@NgModule({
  declarations: [SharedComponentsComponent, ImageCanvasComponent],
  imports: [],
  exports: [ImageCanvasComponent],
})
export class SharedComponentsModule {}
