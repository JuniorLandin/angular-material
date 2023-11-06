import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarMsgComponent } from './snackbar-msg/snackbar-msg.component';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent {

  constructor(private snackbar: MatSnackBar){}

  ngOnInit(): void {}

  openSnackBar() {
    const snackBar = this.snackbar.open('Hello World', 'X', {
      duration: 2000
    })

    snackBar.afterDismissed().subscribe(_ => {
      console.log('DISMISSED')
    })
    
    snackBar.onAction().subscribe(_ => {
      console.log('AFTER ACTION')
    })
  }

  openFromComp() {
    this.snackbar.openFromComponent(SnackbarMsgComponent, {
      data:  'Hello People'
    })
  }

}
