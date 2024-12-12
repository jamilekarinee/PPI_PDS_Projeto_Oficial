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
  cidade: Cidade[] | undefined 
  constructor(private fb: FormBuilder, 
              private fs: CidadeService
  ) {
    this.formBusca = this.fb.group({
      nome: ['', [Validators.required, 
                    Validators.minLength(2)]
              ]
    })
    this.buscar()
    this.cidade = undefined
  }
  buscar() { 
    this.fs.buscarCidade().subscribe(
      res => {
        this.cidade = res 
      }
    )
  }
}
