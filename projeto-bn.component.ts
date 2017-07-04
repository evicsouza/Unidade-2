  import { Component, OnInit } from '@angular/core';

  @Component({
    selector: 'app-projeto-bn',
    templateUrl: './projeto-bn.component.html',
    styleUrls: ['./projeto-bn.component.css']
  })
  export class ProjetoBnComponent {

    constructor() { }

    notas = [];// array
    notasId: number = 0; //id da nota
    caixaDeTexto: String = " "; //parte que digita

    adicionarNota(){
      this.notas.push({valor:this.caixaDeTexto+"", id:this.notasId});//add no array
      this.caixaDeTexto = "";//limpa a parte que digita
      this.notasId ++;//bota ++ no id
    }
    pegarNota(id){
      let nota: number = 0;
      for(var i = 0; i < this.notas.length; i++){ //vai procurar a nota que tem o id igual ao id que o botao apertou
        if(this.notas[i].id == id){//ve se é igual
          nota = i;
        }
      }
      return nota;
    }
    apagarNota(id){
      this.notas.splice(this.pegarNota(id),1);//apaga a notinha se tiver os negocio de cima certo
    }
  }
