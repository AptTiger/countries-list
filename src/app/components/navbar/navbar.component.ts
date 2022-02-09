import { Component, OnInit } from '@angular/core';
import { StyleService } from 'src/services/style.service';

@Component({
  selector: 'nav[navbar]',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(private style: StyleService) { }

  ngOnInit(): void {
  }

  switchTheme() {
    this.style.switchTheme()
  }

}
