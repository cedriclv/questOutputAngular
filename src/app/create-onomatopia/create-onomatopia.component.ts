import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-onomatopia',
  templateUrl: './create-onomatopia.component.html',
  styleUrls: ['./create-onomatopia.component.css']
})
export class CreateOnomatopiaComponent {

  public newOnomatopia: string = '';
  @Output() sendOnomatopiaToParent = new EventEmitter<string>();

  createOnomatopia(): void {
    this.sendOnomatopiaToParent.emit(this.newOnomatopia);
  }
  

}
