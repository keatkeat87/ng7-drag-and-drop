import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Project';

  names = ['xinyao', 'keatkeat', 'ah you'];

  drop(e: CdkDragDrop<any>) {
    moveItemInArray(this.names,e.previousIndex, e.currentIndex);
    
    console.log(e.currentIndex);
    console.log(e.previousIndex);
    console.log(e.item);

  }
}
