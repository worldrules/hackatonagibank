import { Component, OnInit } from '@angular/core';
import { EscolasService } from 'src/app/_infra/model/escolas.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-escola',
  templateUrl: './card-escola.component.html',
  styleUrls: ['./card-escola.component.scss']
})
export class CardEscolaComponent implements OnInit {

  escolas: any[];
  mensagemErro: any;

  constructor(private _escolaService: EscolasService, private _router:Router) { }

  ngOnInit() {
    let novaEscolas: any[] = [
      {
        id: 2,
        name: "Escola nova",
        category: "Privada",
        vacancy: 332,
        description: "Teste",
        rating: 21,
        lat: 51.654654,
        long: 65.546465
      }];

      this.escolas = novaEscolas;

    this.obterEscolas();
  }

  abrirDetalhes(id: number) {
      this._router.navigate(['detalhes', id]);
  }

  obterEscolas(){
    this._escolaService.obterEscolasPeloNome("cristal")
    .subscribe(
        esc => {
          this.escolas = esc;
        },
        error => this.mensagemErro = error 
    );
  }
}
