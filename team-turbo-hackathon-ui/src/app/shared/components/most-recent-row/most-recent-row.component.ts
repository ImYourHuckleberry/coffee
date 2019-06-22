import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ViewDetailsComponent } from '../modal/view-details/view-details.component';

@Component({
  selector: 'app-most-recent-row',
  templateUrl: './most-recent-row.component.html',
  styleUrls: ['./most-recent-row.component.scss']
})


export class MostRecentRowComponent implements OnInit {

  name: string;

  //test array of users
  public dudes = [{ firstname: 'joe', lastname: 'doe' }, { firstname: 'yoe', lastname: 'poe' }, { firstname: 'xoe', lastname: 'doe' }, { firstname: 'soe', lastname: 'doe' }, { firstname: 'koe', lastname: 'doe' }]
  constructor(public dialog: MatDialog) {

  }

  ngOnInit() {
  }

  viewDetails() {
    const dialogRef = this.dialog.open(ViewDetailsComponent, {
      width: '30%',
      data: { name: this.name }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('dialog closed, i guess');
      this.name = result;
      console.log(this.name)
    })
  }



}
