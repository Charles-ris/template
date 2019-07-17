import {Component, Inject} from '@angular/core';
import {MatDialog} from "@angular/material";
import {DialogComponent} from "../dialog/dialog.component";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor( private dialog: MatDialog) {
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent,{
      data:{
        message: 'Are you sure want to delete?',
        buttonText: {
          ok: 'Save',
          cancel: 'No'
        }
      }
    });

  }

}
