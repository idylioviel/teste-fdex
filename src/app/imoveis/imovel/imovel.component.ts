import { Component, OnInit, Input } from '@angular/core';
import { Imovel } from './imovel.model';

@Component({
  selector: 'tfx-imovel',
  templateUrl: './imovel.component.html'
})
export class ImovelComponent implements OnInit {

  @Input() imovel: Imovel

  constructor() { }

  ngOnInit() {
  }

}
