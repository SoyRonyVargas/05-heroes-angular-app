import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'heroImage'
})
export class HeroImagePipe implements PipeTransform {

  transform( id?: string ): string {
    
    if( !id ) return ""

    return `assets/heroes/${id}.jpg`;

  }

}
