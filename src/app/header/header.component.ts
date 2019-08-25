import { Component, HostListener, OnInit } from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private ofset = 68
  private startPos = 0
  headerPos = 0

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    const currentPos = window.pageYOffset
    if (currentPos > this.startPos) {
      this.headerPos = -this.ofset
    } else {
      this.headerPos = 0
    }
    this.startPos = currentPos
  }

  constructor() {}

  ngOnInit() {}
}
