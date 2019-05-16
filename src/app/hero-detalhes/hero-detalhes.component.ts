import { Component, OnInit, Input } from '@angular/core';
import { Hero } from './../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from './../hero.service';

@Component({
  selector: 'app-hero-detalhes',
  templateUrl: './hero-detalhes.component.html',
  styleUrls: ['./hero-detalhes.component.css']
})
export class HeroDetalhesComponent implements OnInit {
  @Input() hero: Hero;
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit() {
  }

}
