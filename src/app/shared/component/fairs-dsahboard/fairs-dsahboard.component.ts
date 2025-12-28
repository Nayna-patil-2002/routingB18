import { Component, OnInit } from '@angular/core';
import { Ifair } from '../../model/fairs';
import { FairsService } from '../../service/fairs.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-fairs-dsahboard',
  templateUrl: './fairs-dsahboard.component.html',
  styleUrls: ['./fairs-dsahboard.component.scss']
})
export class FairsDsahboardComponent implements OnInit {
   fairs:Array<Ifair>=[]
  constructor(
    private _fairsService:FairsService,
    private _router:Router,
    private _routs:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.fetchAllfairs()
  }

  fetchAllfairs(){
  this._fairsService.fetChFairss()
   .subscribe({
    next:res=>{
      console.log(res)
      this.fairs=res

      if(this.fairs?.length){
        this._router.navigate([this.fairs[0].fairId], { relativeTo: this._routs});
      }
    },
    error:err=>{
      console.log(err)
    }
   })
  }

}
