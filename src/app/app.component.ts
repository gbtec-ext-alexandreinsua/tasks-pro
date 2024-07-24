import { Component } from '@angular/core';
import { BoardComponent } from './components/board/board.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [AppComponent, BoardComponent, HeaderComponent]
})
export class AppComponent {
  title = 'tasks-pro';
}
