import { Kaur4799 } from "../kaur4799";
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currStudent: Kaur4799 = {
    sid: 991504334, sname: "Diljot Kaur",
    slogin: "kaur4799", scampus: "Davis", 
    atitle: "Assignment3"
  }

  constructor() { }

  ngOnInit() {
    
  }

}
