import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Iuser } from '../../model/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
   userObj:Array<Iuser>=[]
  constructor(
    private Userservice:UserService
  ) { }

  ngOnInit(): void {
  this.fetChusers()
  }

  fetChusers(){
   this.Userservice.fetchAllUser()
   .subscribe({
    next:res=>{
       console.log(res)
       this.userObj=res
    },
    error:err=>{
      console.log(err)
    } 
    
   })
  }

}
