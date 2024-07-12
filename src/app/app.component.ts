import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSnackBarModule, MatSnackBar} from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MatProgressBarModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ample-logic-task';
  total: any = 100;
  percentage: number = 0;
  count = 0;
  progressionBar: boolean = true;
  
  companyUrl ="../assets/Ample-Logic-Logo.svg";
  status:boolean = true;
  onClickButton() {
    this.status = !this.status;
    this.count = 0;
    this.percentage = 0;
    this.progressionBar = true;
    setInterval(()=> {
      if(this.count < this.total) {
        this.incrementalLogic();
      }
    }, 25)
  }
 
  incrementalLogic() {
    if(this.count < this.total) {
      this.count++;
      this.percentage = this.count;
      this.progressionBar = true;
    }
    if(this.percentage === this.total) {
      setTimeout(() => {
        this.openSnackbar();
        this.progressionBar = false;
      }, 100);
    }
    
  }
  constructor( private _snackbar:MatSnackBar){}

  openSnackbar(){
    this._snackbar.open('Migration applied successfully','x',{
      panelClass: ['custom-snackbar', 'snackbar-success'],
      horizontalPosition:'right',
      verticalPosition:'top',
      duration: 3000
    });
  }
}
