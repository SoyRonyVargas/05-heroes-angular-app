import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { HeroeService } from '../../services/heroe.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {

  public heroes: Hero[] = []

  constructor( private heroeService: HeroeService ) { }

  ngOnInit(): void {

    this.heroeService.getHeroes().subscribe( observer => {
      this.heroes = observer
    })
  }

}
