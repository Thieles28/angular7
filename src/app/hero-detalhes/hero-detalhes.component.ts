import { Component, OnInit, Input } from '@angular/core';
import { Hero } from './../hero';

@Component({
  selector: 'app-hero-detalhes',
  templateUrl: './hero-detalhes.component.html',
  styleUrls: ['./hero-detalhes.component.css']
})
export class HeroDetalhesComponent implements OnInit {
  @Input() hero: Hero;
  constructor() { }

  ngOnInit() {
  }

}
