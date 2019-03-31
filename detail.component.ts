import { Component, OnInit } from '@angular/core';
import { MYSONGS } from '../mySongs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  mySongs = MYSONGS;


  constructor() { }

  onClickMe(index){
    var divs = document.getElementById("myList").getElementsByTagName("div");
    var table = document.getElementById("myList").getElementsByTagName("table");
    if (divs[index].style.display === 'none') {
      divs[index].style.display = 'block';
    }
    else {
      divs[index].style.display = 'none';
    }

    if (table[index].style.display === 'none') {
      table[index].style.display = 'block';
    }
    else {
      table[index].style.display = 'none';
    }
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    var divs = document.getElementById("myList").getElementsByTagName("div");
    var table = document.getElementById("myList").getElementsByTagName("table");
    /* create an array div's in myList */

    for (let x=0; x < divs.length; x++){
      divs[x].style.display="none";
    }

    for (let x=0; x < table.length; x++){
      table[x].style.display="none";
    }
  }

}
