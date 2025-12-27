import { Injectable } from '@angular/core';
import { Iuser } from '../model/user';
import { users } from '../const/user';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userArr:Array<Iuser>=users
  constructor() { }

  fetchAllUser():Observable<Iuser[]>{
  return of(this.userArr)
  }

  fetchuser(id:string){
    let user=this.userArr.find(u=>u.id===id)as Iuser
    return of(user)
  }

  creteuser(user:Iuser){
    this.userArr.push(user)
    return of(user)
  }

  updateUser(user:Iuser){
    let getIndex=this.userArr.findIndex(u=>u.id===user.id)
    this.userArr[getIndex]=user
  }

  deleteUser(id:string){
    let getIndex=this.userArr.findIndex(u=>u.id===id)
    this.userArr.splice(getIndex, 1)

    return of(id)
  }
}
