import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trainers',
  imports: [CommonModule],
  templateUrl: './trainers.component.html',
  styleUrl: './trainers.component.css'
})
export class TrainersComponent {
  selectedGen: string = '';

  gymLeaders: GymLeader[] = [];

  onSelect(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.selectedGen = selectedValue;

    if (selectedValue === '1') {
      console.log("1 selected");
      this.get1GymLeaders();
    } else if (selectedValue === '2') {
      console.log('2 selected');
      this.get2GymLeaders();
    } else if (selectedValue === '3') {
      console.log('3 selected');
      this.get3GymLeaders();
    } else if (selectedValue === '4') {
      console.log("4 selected");
      this.get4GymLeaders();
    } else if (selectedValue === '5') {
      console.log('5 selected');
      this.get5GymLeaders();
    }

  }
  get1GymLeaders() {
    this.gymLeaders = [
      new GymLeader("Brock", "Rock", 1, ["Geodude", "Onix"]),
      new GymLeader("Misty", "Water", 2, ["Staryu", "Starmie"]),
      new GymLeader("Lt. Surge", "Electric", 3, ["Voltorb", "Pikachu", "Raichu"]),
      new GymLeader("Erika", "Grass", 4, ["Victreebel", "Tangela", "Vileplume"]),
      new GymLeader("Koga", "Poison", 5, ["Muk", "Koffing", "Weezing", "Koffing"]),
      new GymLeader("Sabrina", "Psychic", 6, ["Kadabra", "Mr. Mime", "Alakazam", "Venomoth"]),
      new GymLeader("Blaine", "Fire", 7, ["Growlithe", "Ponyta", "Rapidash", "Arcanine"]),
      new GymLeader("Giovanni", "Ground", 8, ["Rhyhorn", "Dugtrio", "Nidoqueen", "Nidoking", "Rhydon"])
    ];
  }

  get2GymLeaders() {
    this.gymLeaders = [
      new GymLeader("Falkner", "Flying", 1, ["Pidgey", "Pidgeotto"]),
      new GymLeader("Bugsy", "Bug", 2, ["Metapod", "Kakuna", "Scyther"]),
      new GymLeader("Whitney", "Normal", 3, ["Clefairy", "Miltank"]),
      new GymLeader("Morty", "Ghost", 4, ["Gastly", "Haunter", "Haunter", "Gengar"]),
      new GymLeader("Chuck", "Fighting", 5, ["Primeape", "Poliwrath"]),
      new GymLeader("Jasmine", "Steel", 6, ["Magnemite", "Magnemite", "Steelix"]),
      new GymLeader("Pryce", "Ice", 7, ["Seel", "Dewgong", "Piloswine"]),
      new GymLeader("Clair", "Dragon", 8, ["Dragonair", "Dragonair", "Dragonair", "Kingdra"])
    ];
  }

  get3GymLeaders() {
    this.gymLeaders = [
      new GymLeader("Roxanne", "Rock", 1, ["Geodude", "Nosepass"]),
      new GymLeader("Brawly", "Fighting", 2, ["Machop", "Makuhita"]),
      new GymLeader("Wattson", "Electric", 3, ["Magnemite", "Voltorb", "Magneton"]),
      new GymLeader("Flannery", "Fire", 4, ["Numel", "Slugma", "Torkoal"]),
      new GymLeader("Norman", "Normal", 5, ["Slaking", "Vigoroth", "Slaking"]),
      new GymLeader("Winona", "Flying", 6, ["Swablu", "Tropius", "Pelipper", "Skarmory", "Altaria"]),
      new GymLeader("Tate & Liza", "Psychic", 7, ["Solrock", "Lunatone"]),
      new GymLeader("Juan", "Water", 8, ["Luvdisc", "Whiscash", "Sealeo", "Crawdaunt", "Kingdra"])
    ];
  }

  get4GymLeaders() {
    this.gymLeaders = [
      new GymLeader("Roark", "Rock", 1, ["Geodude", "Onix", "Cranidos"]),
      new GymLeader("Gardenia", "Grass", 2, ["Cherubi", "Turtwig", "Roserade"]),
      new GymLeader("Maylene", "Fighting", 3, ["Meditite", "Machoke", "Lucario"]),
      new GymLeader("Crasher Wake", "Water", 4, ["Gyarados", "Quagsire", "Floatzel"]),
      new GymLeader("Fantina", "Ghost", 5, ["Drifblim", "Gengar", "Mismagius"]),
      new GymLeader("Byron", "Steel", 6, ["Magneton", "Steelix", "Bastiodon"]),
      new GymLeader("Candice", "Ice", 7, ["Snover", "Sneasel", "Medicham", "Abomasnow"]),
      new GymLeader("Volkner", "Electric", 8, ["Raichu", "Ambipom", "Octillery", "Luxray"])
    ];
  }

  get5GymLeaders() {
    this.gymLeaders = [
      new GymLeader("Cilan", "Grass", 1, ["Lillipup", "Pansage"]),
      new GymLeader("Lenora", "Normal", 2, ["Herdier", "Watchog"]),
      new GymLeader("Burgh", "Bug", 3, ["Whirlipede", "Dwebble", "Leavanny"]),
      new GymLeader("Elesa", "Electric", 4, ["Emolga", "Emolga", "Zebstrika"]),
      new GymLeader("Clay", "Ground", 5, ["Krokorok", "Palpitoad", "Excadrill"]),
      new GymLeader("Skyla", "Flying", 6, ["Swoobat", "Unfezant", "Swanna"]),
      new GymLeader("Brycen", "Ice", 7, ["Vanillish", "Cryogonal", "Beartic"]),
      new GymLeader("Drayden", "Dragon", 8, ["Druddigon", "Flygon", "Haxorus"])
    ];
  }


}

class GymLeader {
  constructor(
    public name: string,
    public type: string,
    public gymNo: number,
    public party: string[]
  ) { }
}