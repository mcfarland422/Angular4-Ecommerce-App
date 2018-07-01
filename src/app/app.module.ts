import { AuthorsService } from "./authors.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { AuthorsComponent } from "./authors/authors.component";
import { FavoriteComponent } from "./favorite/favorite.component";
import { TitleCasePipe } from "./title-case.pipe";
import { PanelComponent } from './panel/panel.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    FavoriteComponent,
    TitleCasePipe,
    PanelComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [AuthorsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
