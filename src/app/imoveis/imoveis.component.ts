import { Component, OnInit } from '@angular/core';
import { Imovel } from './imovel/imovel.model';
import { ImoveisService } from './imoveis.service';

@Component({
  selector: 'tfx-imoveis',
  templateUrl: './imoveis.component.html'
})
export class ImoveisComponent implements OnInit {

  imoveis: Imovel[]

  constructor(private imoveisService: ImoveisService) { }

  ngOnInit() {
    this.imoveisService.imoveis()
      .subscribe(imoveis => this.imoveis = imoveis)
  }

}
