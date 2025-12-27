import { UniqueSelectionDispatcher } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UniqService } from '../../service/uniq.service';
import { UserService } from '../../service/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Iuser } from '../../model/user';
import { SnackabrService } from '../../service/snackabr.service';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.scss']
})
export class UserformComponent implements OnInit {
  userForm!:FormGroup
    isInEditMode:boolean=false
    userId!:string
  constructor(
    private _uniq:UniqService,
    private _userservice:UserService,
    private _router:Router,
    private _route:ActivatedRoute,
    private _snackabr:SnackabrService
  ) { }

  ngOnInit(): void {
    this.creteuserForm()
    this.editUser()
  }

  creteuserForm(){
   this.userForm=new FormGroup({
    name:new FormControl(null, [Validators.required]),
    email:new FormControl(null, [Validators.required]),
    image:new FormControl(null, [Validators.required]),
    role:new FormControl(null, [Validators.required]),
   })
  }

  addUser(){
    if(this.userForm.valid){
      let obj={...this.userForm.value, id:this._uniq.Uuid()}
      console.log(obj)
     this._userservice.creteuser(obj)
      .subscribe({
        next:res=>{
          console.log(res)
          
          this._router.navigate(['user'])
          this._snackabr.opesnackbar(`This ${obj.name} added succesfully.`)
        }
      })
    }
  }

  editUser(){
    console.log( this._route.snapshot.params['userId'])
  this.userId= this._route.snapshot.params['userId']

  if(this.userId){
    this.isInEditMode=true;
    this._userservice.fetchuser(this.userId)
       .subscribe({
        next:data=>{
          console.log(data)
          this.userForm.patchValue(data)
        }
       })
  }
    
  }

  onUpdate(){
    if(this.userForm.valid){
      let updateobj={...this.userForm.value, id:this.userId }
      console.log(updateobj)
      this._userservice.updateUser(updateobj)
      this.userForm.reset()
      this._router.navigate(['user'])
       this._snackabr.opesnackbar(`This ${updateobj.name} updated succesfully.`)
    }
  }

 

}
