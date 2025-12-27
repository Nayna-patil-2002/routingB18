import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../service/user.service';
import { Iuser } from '../../model/user';
import { SnackabrService } from '../../service/snackabr.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetconfirmComponent } from '../getconfirm/getconfirm.component';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss']
})
export class UserdetailsComponent implements OnInit {
  userId!:string
  userInfo!:Iuser

  constructor(
    private _route:ActivatedRoute,
    private _userservice:UserService,
    private _router:Router,
    private _snackar:SnackabrService,
    private _matDilog:MatDialog 
  ) { }

  ngOnInit(): void {
    console.log(this._route.snapshot.params['userId'])
      this.userId=  this._route.snapshot.params['userId']

       if(this.userId)
        this._userservice.fetchuser(this.userId)
        .subscribe({
          next:res=>{
            console.log(res)
            this.userInfo=res
          }
        })
  }

   onRemove() {


  if (this.userId) {
     let matconfig=new MatDialogConfig()
        matconfig.data=`Are you sure you want to remove this user?`
        matconfig.disableClose=true
      let matdilogconfig=  this._matDilog.open(GetconfirmComponent, matconfig)
        matdilogconfig.afterClosed()
           .subscribe({
            next:res=>{
              console.log(res)
              if(res){
                   this._userservice.deleteUser(this.userId)
            .subscribe({
                next: res => {
                  console.log( res);
                  
                  this._router.navigate(['user']);
                  this._snackar.opesnackbar(`This ${this.userId} removed succesfully.`)
                },
                error: err => {
                }
              });
              }
            }
           })

    
  } 
}

  
  
}
