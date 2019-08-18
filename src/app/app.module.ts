import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopComponent } from './top/top.component';
import { WorksComponent } from './works/works.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { AboutComponent } from './about/about.component';
import { SkillComponent } from './skill/skill.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, TopComponent, WorksComponent, AboutComponent, SkillComponent, ContactComponent, FooterComponent],
  imports: [BrowserModule, ScrollToModule.forRoot(), LazyLoadImageModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
