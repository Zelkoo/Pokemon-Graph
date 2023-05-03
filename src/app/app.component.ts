import {Component, OnInit} from '@angular/core';
import { DataService } from './data.service';
import { first, tap } from 'rxjs/operators';
import {Pokemon} from "./helper/types";
import {PageEvent} from "@angular/material/paginator";
import { ImagePreloadService } from './image-preload.service';


@Component({
 selector: 'root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  limit = 14;
  offset = 0;
  offsetPreload = 1; // i.e. `offsetPreload = 3;` will load next `3` extra pages
  pokemons!: Pokemon[];
  currentPage: number = 0
  chosenPokemonMoves: any
  totalItems!: number;
  constructor(private dataService: DataService, private ImagePreloadService: ImagePreloadService) {
    //
  }

  ngOnInit() {
    this.totalItems = 1000;
    this.loadPokemons();
  }

  loadPokemons() {
    this.dataService
      .getPokemons(this.limit, this.offset)
      .pipe(first())
      .subscribe((result) => {
        this.pokemons = result.pokemons.results;
      });

    this.dataService
      .getPokemonsArtwork(this.limit, ((this.offsetPreload * this.limit) + this.offset))
      .pipe(
        first(),
        tap(imageUrls => this.ImagePreloadService.preloadImages(imageUrls)),
      )
      .subscribe(/* unsubscribed by `first()` */);
  }

  // TODO fix: on quick pagination page change the previous loading state of this.loadPokemons(); should be destroyed (http request interrupted, subscribe callback should never happen)
  onPageChange(event: PageEvent) {
    this.offset = event.pageIndex * event.pageSize;
    this.limit = event.pageSize;
    this.loadPokemons();
    this.chosenPokemonMoves = '';
    this.currentPage = event.pageIndex + 1;
  }

}
