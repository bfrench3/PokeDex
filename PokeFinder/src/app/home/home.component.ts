import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  randomPokemon: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getRandomPokemon();
  }

  getRandomPokemon() {
    const randomId = Math.floor(Math.random() * 1024) + 1; //get random pokedex number
    //this hits pokedex endpoint
    this.http.get(`https://pokeapi.co/api/v2/pokemon/${randomId}`).subscribe({
      next: data => {
        this.randomPokemon = data; //assign randomPokemon to the data retrieved from this endpoint
        console.log('Fetched Pokémon:', data); //log
      },
      error: err => {
        console.error('Failed to fetch Pokémon:', err);
      }
    });

  }
}
