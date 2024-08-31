import { Character, CharacterInfo } from './../interfaces/characters.interface';
export const CharacterAdapter = ( characterInfo:CharacterInfo ) : Character[] => {
    return characterInfo.results;
}