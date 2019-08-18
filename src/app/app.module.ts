import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopComponent } from './top/top.component';
import { WorksComponent } from './works/works.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  declarations: [AppComponent, HeaderComponent, TopComponent, WorksComponent],
  imports: [BrowserModule, ScrollToModule.forRoot(), LazyLoadImageModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
