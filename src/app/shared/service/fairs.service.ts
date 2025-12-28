import { Injectable } from '@angular/core';
import { Ifair } from '../model/fairs';
import { fairsArr } from '../const/fairs';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FairsService {
   fairsarr:Array<Ifair>=fairsArr
  constructor() { }

  fetChFairss():Observable<Ifair[]>{
  return of(this.fairsarr)
  }

  fetchfair(id:string){
      let fair=this. fairsarr.find(u=>u.fairId===id)as Ifair
      return of(fair)
    }

}
