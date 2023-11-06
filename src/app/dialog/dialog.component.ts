import { Component } from '@angular/core';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { DialogMsgComponent } from './dialog-msg/dialog-msg.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogMsgComponent, {
      data: 'Bazinga',
      width: '250px',
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '500ms'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
    })
  }

}
