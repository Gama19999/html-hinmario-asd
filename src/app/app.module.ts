import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { PlayerComponent } from './player/player.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FadeComponent } from './player/fade/fade.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    PlayerComponent,
    FooterComponent,
    FadeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
