import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cidade } from '../model/cidade';
import { CidadeService } from '../model/cidade.service';

@Component({
  selector: 'app-busca-cidade',
  templateUrl: './busca-cidade.component.html',
  styleUrl: './busca-cidade.component.css'
})
export class BuscaCidadeComponent {
  formBusca: FormGroup
  deputado: Cidade[] | undefined 
  constructor(private fb: FormBuilder, 
              private fs: CidadeService
  ) {
    this.formBusca = this.fb.group({
      nome: ['', [Validators.required, 
                    Validators.minLength(2)]
              ]
    })

    this.deputado = undefined
  }
  buscar() {
    const nome = this.formBusca.value.nome
    this.fs.buscarCidade(nome).subscribe(
      res => {
        this.deputado = res.dados 
      }
    )
  }
}
