import { ChangeDetectionStrategy, Component, input, InputSignal, OnInit, output, OutputEmitterRef } from '@angular/core';
import { Character } from '../../../../interfaces/characters.interface';
import { JsonPipe, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-character-card',
  standalone: true,
  imports: [ NgOptimizedImage, JsonPipe ],
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterCardComponent implements OnInit {

  character: InputSignal< Character > = input.required< Character >()
  characterInfo: InputSignal<Character | undefined > = input<Character>()
  loaded: OutputEmitterRef< string > = output<string>();

  ngOnInit(): void {
    this.loaded.emit( this.character().url )
  }

}
