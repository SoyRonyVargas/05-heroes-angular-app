import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { ByIdComponent } from './pages/by-id/by-id.component';
import { EditHeroComponent } from './pages/edit-hero/edit-hero.component';
import { HeroeService } from './services/heroe.service';
import { CardHeroComponent } from './components/card-hero/card-hero.component';
import { HeroImagePipe } from './pipes/hero-image.pipe';
import { HeroCharactersPipe } from './pipes/hero-characters.pipe';


@NgModule({
  declarations: [
    HeroPageComponent,
    LayoutPageComponent,
    ListPageComponent,
    SearchPageComponent,
    NewPageComponent,
    ByIdComponent,
    EditHeroComponent,
    CardHeroComponent,
    HeroImagePipe,
    HeroCharactersPipe
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule
  ],
  providers: [
    HeroeService
  ]
})
export class HeroesModule { }
