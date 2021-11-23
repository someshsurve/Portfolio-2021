import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import {AppRoutingModule} from "./app-routing.module";
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { HomeIntroductionComponent } from './home/home-introduction/home-introduction.component';
import { HomeSkillsComponent } from './home/home-skills/home-skills.component';
import { HomeSkillsBarComponent } from './home/home-skills/home-skills-bar/home-skills-bar.component';
import { HomeFooterComponent } from './home/home-footer/home-footer.component';
import { WorkFooterComponent } from './work/work-footer/work-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    WorkComponent,
    HeaderComponent,
    ContactComponent,
    HomeIntroductionComponent,
    HomeSkillsComponent,
    HomeSkillsBarComponent,
    HomeFooterComponent,
    WorkFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
