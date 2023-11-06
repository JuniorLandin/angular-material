import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from '../dialog.component';

@Component({
  selector: 'app-dialog-msg',
  templateUrl: './dialog-msg.component.html',
  styleUrls: ['./dialog-msg.component.scss']
})
export class DialogMsgComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
    ) {}

    public closeDialog() {
      this.dialogRef.close('Returned Baazinga')
    }

}
