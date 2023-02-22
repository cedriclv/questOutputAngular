import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'questOutput';
  
  public onomatopoeiaList: string[] = ['a','b'];

  onReceiveNewOnomatopia(onoEvent: string): void {
    this.onomatopoeiaList.push(onoEvent);
  }
}
