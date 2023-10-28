import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'heroCharacters'
})
export class HeroCharactersPipe implements PipeTransform {

  transform( characters: string ): string[] {
    
    return characters.split(",");

  }

}
