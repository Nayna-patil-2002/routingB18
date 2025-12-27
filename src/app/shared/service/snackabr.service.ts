import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackabrService {

  constructor(
    private matsnack:MatSnackBar
  ) { }

    private readonly matconfig:MatSnackBarConfig={
      duration:3000,
    horizontalPosition:'left',
    verticalPosition:'top'
  }

  opesnackbar(msg:string){
    this.matsnack.open(msg, "close", this.matconfig)
  }
}
