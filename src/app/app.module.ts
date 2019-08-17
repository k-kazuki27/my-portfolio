import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopComponent } from './top/top.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, TopComponent],
  imports: [BrowserModule, ScrollToModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
