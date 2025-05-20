import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-starter',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './starter.component.html',
  styleUrls: ['./starter.component.css']
})


export class StarterComponent {
  bulbasaur: any;
  turtwig: any;
  chikorita: any;

  charmander: any;
  cyndaquil: any;
  chimchar: any;

  squirtle: any;
  piplup: any;
  totodile: any;

  selectedType: string = '';
  selectedPokemon: any = null;

  selectPokemon(pokemon: any) {
    this.selectedPokemon = pokemon;

  }

  constructor(private http: HttpClient) { }


  submitStarter(starter: string) {
    localStorage.setItem('starter', starter);
  }


  onSelect(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.selectedType = selectedValue;

    if (selectedValue === 'Grass') {
      this.fetchGrassStarters();
    } else if (selectedValue === 'Fire') {
      this.fetchFireStarters();
    } else if (selectedValue === 'Water') {
      this.fetchWaterStarters();
    }
  }

  fetchGrassStarters() {
    this.http.get(`https://pokeapi.co/api/v2/pokemon/1`).subscribe(data => this.bulbasaur = data);
    this.http.get(`https://pokeapi.co/api/v2/pokemon/387`).subscribe(data => this.turtwig = data);
    this.http.get(`https://pokeapi.co/api/v2/pokemon/152`).subscribe(data => this.chikorita = data);
  }

  fetchFireStarters() {
    this.http.get(`https://pokeapi.co/api/v2/pokemon/4`).subscribe(data => this.charmander = data);
    this.http.get(`https://pokeapi.co/api/v2/pokemon/155`).subscribe(data => this.cyndaquil = data);
    this.http.get(`https://pokeapi.co/api/v2/pokemon/390`).subscribe(data => this.chimchar = data);
  }
  fetchWaterStarters() {
    this.http.get(`https://pokeapi.co/api/v2/pokemon/7`).subscribe(data => this.squirtle = data);
    this.http.get(`https://pokeapi.co/api/v2/pokemon/393`).subscribe(data => this.piplup = data);
    this.http.get(`https://pokeapi.co/api/v2/pokemon/158`).subscribe(data => this.totodile = data);
    console.log("water hit")
  }
}

