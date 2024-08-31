
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Character, CharacterInfo } from '../interfaces/characters.interface';
import { CharacterAdapter } from '../adapter/character.adapter';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  private mainUrl: string = 'https://rickandmortyapi.com/api/';
  private charactersUrl = this.mainUrl + 'character';

  constructor( private http: HttpClient  ) { }


  public getCharacters(): Observable< Character[] >{
    return this.http.get< CharacterInfo >( this.charactersUrl )
    .pipe(
      
      map( ( result: CharacterInfo ) => CharacterAdapter(result )  )
    )
  }

  public getCharactersInformation( url:string ): Observable< Character >{
    return this.http.get< Character >( url )
  }

}
