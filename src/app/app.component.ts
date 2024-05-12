import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    nav {
      background-color: #333;
      overflow: hidden;
    }

    nav a {
      float: left;
      color: white;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
      font-size: 17px;
    }

    nav a:hover {
      background-color: #ddd;
      color: black;
    }

    nav a.active {
      background-color: #4CAF50;
      color: white;
    }
    
  `]
})
export class AppComponent {}