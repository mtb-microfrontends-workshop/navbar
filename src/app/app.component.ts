import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'navbar';
  navLinks: NavLink[] = [
    {
      to: "/",
      label: "Home"
    },
    {
      to: "/usd",
      label: "USD"
    }
  ]
}

interface NavLink {
  to: string;
  label: string;
}