import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/shared/models/dialogData';
import { FormGroup, FormBuilder, ReactiveFormsModule, FormControl, NgControl } from '@angular/forms';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.scss']
})
export class ViewDetailsComponent {

  public name = '';
  newForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ViewDetailsComponent>,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  updateName(name) {
    console.log(name)
  }

  createForm() {
    this.newForm = this.fb.group({
      name: ['']
    })
  }


}
