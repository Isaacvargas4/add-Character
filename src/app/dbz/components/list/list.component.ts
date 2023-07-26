import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  public deleteCharacterIndex= new EventEmitter<string> ;

  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 1000
    },
  ];

  onDeleteCharacter(uuid?: string):void{

    if(!uuid) return

    this.deleteCharacterIndex.emit(uuid);

  }

}
