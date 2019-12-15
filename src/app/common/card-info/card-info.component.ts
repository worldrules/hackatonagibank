import { Component, OnInit } from '@angular/core';
import { Features } from '../../_infra/model/features';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss']
})
export class CardInfoComponent implements OnInit {

  constructor( ) { }

  informacao : Features;
  ngOnInit() {
    this.informacao = new Features();
    this.informacao.icon="../../../assets/img/escola.png"
    this.informacao.desrption = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Providentveritatis commodi debitis"
    
    this.carregaDados();
  }

  carregaDados(){
    // this.teste.getInformacoesInstitucionais(1).subscribe( data=>{
    //   this.informacao = data;
    //console.log( this.informacao.icon);
    // })
  }

}
