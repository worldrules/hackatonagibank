import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { HeaderComponent } from './common/header/header.component';
import { RouterModule } from '@angular/router';
import { CardInfoComponent } from './common/card-info/card-info.component';
import { HttpClientModule }    from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { MapaComponent } from './mapa/mapa/mapa.component';
import { MapaModule } from './mapa/mapa.module';
import { DetalhesModule } from './detalhes/detalhes.module';
import { ChatBotComponent } from './chat-bot/chat-bot.component';
import { FormularioEscolaComponent } from './formulario-escola/formulario-escola.component';
import { AvaliacaoComponent } from './avaliacao/avaliacao.component';
import { AcessibilidadeComponent } from './acessibilidade/acessibilidade.component';
import { EnsinoComponent } from './ensino/ensino.component';
import { DesempenhoComponent } from './desempenho/desempenho.component';
import { SaudacaoComponent } from './chat-bot/saudacao/saudacao.component';
import { CabecalhoComponent } from './chat-bot/cabecalho/cabecalho.component';
import { FeedbackComponent } from './feedback/feedback.component';


@NgModule({
  declarations: [
    AppComponent,
    TelaLoginComponent,
    HeaderComponent,
    CardInfoComponent,
    ChatBotComponent,
    FormularioEscolaComponent,
    AvaliacaoComponent,
    AcessibilidadeComponent,
    EnsinoComponent,
    DesempenhoComponent,
    SaudacaoComponent,
    CabecalhoComponent,
    FeedbackComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MapaModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBf4N8Hrd4ZIyf9akTdT34HTrFYWZ33qwY'
    }),
    HttpClientModule,
    DetalhesModule,
    RouterModule.forRoot([
    {path:"",component:TelaLoginComponent},
    {path:"mapa",component:MapaComponent},
    {path:"chat",component:ChatBotComponent},
    {path:"cadastro-escola",component:FormularioEscolaComponent},
    {path:"acessibilidade",component:AcessibilidadeComponent},
    {path:"cadastro",component: FormularioEscolaComponent},
    {path:"desempenho", component:DesempenhoComponent},
    {path:"feedback", component:FeedbackComponent},

  ]),
  HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
