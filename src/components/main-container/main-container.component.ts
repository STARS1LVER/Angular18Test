
import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CharactersService } from '../../services/characters.service';
import { firstValueFrom, Observable } from 'rxjs';
import { Character } from '../../interfaces/characters.interface';
import { CharacterCardComponent } from './components';


@Component({
  selector: 'app-main-container',
  standalone: true,
  imports: [ AsyncPipe, CharacterCardComponent],
  templateUrl: './main-container.component.html',
  styleUrl: './main-container.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainContainerComponent {

  private charactersService = inject( CharactersService )
  public characters$: Observable< Character[] > = this.charactersService.getCharacters();
  characterInfo: Record<string, Character> = {}

  async makeApiCall( url: string ){
    let character = await firstValueFrom( this.charactersService.getCharactersInformation(url) )

    this.characterInfo[ character.id ] = character
  }

 

}
