import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { outputAst } from '@angular/compiler';

@Component({
  selector: 'app-form-caracter',
  templateUrl: './form-caracter.component.html',
  styleUrls: ['./form-caracter.component.css']
})
export class FormCaracterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  }

  emitCharacter():void {
    if(this.character.name.length === 0 ) return;
    console.log(`hola`)

    this.onNewCharacter.emit(this.character);

    this.character = {
      name: '',
      power: 0
    }

  }



}
