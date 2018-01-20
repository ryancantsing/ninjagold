import { Component } from '@angular/core';
import { HttpService} from './http.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  gold_total: number;
  activity : Array<string>=[]
  constructor(private _httpService: HttpService){}
  ngOnInit() {
    this.gold_total = 0;
  }
  onButtonFarm() {
    let gold = Math.floor(Math.random() * 5) + 1
    this.gold_total += gold
    let str = "You gained " + gold + " from the Farm"
    this.activity.push(str)
    return this.gold_total
  }
  onButtonCave(){
    let gold =  Math.floor(Math.random() * 10) + 4
    this.gold_total += gold
    let str = "You gained " + gold + " from the Cave"
    this.activity.push(str)
    return this.gold_total
  }
  onButtonHouse(){
    let gold = Math.floor(Math.random() * 15) + 6
    this.gold_total += gold
    let str = "You gained " + gold + " from the House"
    this.activity.push(str)
    return this.gold_total
  }
  onButtonCasino(){
    let gold = Math.floor(Math.random() * 201) - 100
    this.gold_total += gold
    if ( gold >= 0 ){
    let str = "You gained " + gold + " from the Casino"
    this.activity.push(str)
    } else {
    let str = "You lost " + gold + " from the Casino"
    this.activity.push(str)
  }
    return this.gold_total
  }
  
  } 


