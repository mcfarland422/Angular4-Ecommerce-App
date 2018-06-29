import { Component, OnInit } from "@angular/core";

@Component({
  selector: "favorite",
  templateUrl: "./favorite.component.html",
  styleUrls: ["./favorite.component.css"]
})
export class FavoriteComponent implements OnInit {
  isFavorite: boolean;
  constructor() {}

  ngOnInit() {
    console.log(this.isFavorite);
  }
  onClick() {
    this.isFavorite = !this.isFavorite;
    console.log(this.isFavorite);
  }
}
