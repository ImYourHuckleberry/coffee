import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-most-recent-row',
  templateUrl: './most-recent-row.component.html',
  styleUrls: ['./most-recent-row.component.scss']
})


export class MostRecentRowComponent implements OnInit {

  //test array of users
  public dudes = [{ firstname: 'joe', lastname: 'doe' }, { firstname: 'yoe', lastname: 'poe' }, { firstname: 'xoe', lastname: 'doe' }, { firstname: 'soe', lastname: 'doe' }, { firstname: 'koe', lastname: 'doe' }]
  constructor() { }

  ngOnInit() {
  }

}
