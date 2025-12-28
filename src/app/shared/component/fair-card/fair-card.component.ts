import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FairsService } from '../../service/fairs.service';
import { Ifair } from '../../model/fairs';

@Component({
  selector: 'app-fair-card',
  templateUrl: './fair-card.component.html',
  styleUrls: ['./fair-card.component.scss']
})
export class FairCardComponent implements OnInit {
 fairId!:string
 firsInfo!:Ifair
  constructor(
    private _route:ActivatedRoute,
    private _fairservice:FairsService
  ) { }

  ngOnInit(): void {
    
     this.getDetails() 
   
  }

  getDetails(){
     this._route.params.subscribe(params => {
      this.fairId = params['fairId'];
      console.log(this.fairId);
      if (this.fairId) {
        this._fairservice.fetchfair(this.fairId)
          .subscribe({
            next: res => {
              console.log(res);
              this.firsInfo = res;
            },
            error: err => {
              console.log(err);
            }
          });
      }
    });
  }

}
