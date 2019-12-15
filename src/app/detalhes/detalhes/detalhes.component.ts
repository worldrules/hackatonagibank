import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EscolasService } from 'src/app/_infra/model/escolas.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})
export class DetalhesComponent implements OnInit {

  constructor(private route: ActivatedRoute ) { }

  detalhes: any;

  ngOnInit() {
  }

}
