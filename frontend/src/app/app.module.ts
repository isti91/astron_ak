import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { FooterComponent } from './component/footer/footer.component';
import { SidenavComponent } from './component/sidenav/sidenav.component';

import { NgIf } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule, MatIconRegistry} from '@angular/material/icon';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewcarComponent } from './component/newcar/newcar.component';
import { CarrentComponent } from './carrent/carrent.component';
import { MotorrentComponent } from './component/motorrent/motorrent.component';
import { TrailrentComponent } from './component/trailrent/trailrent.component';
import { MicrobusrentComponent } from './component/microbusrent/microbusrent.component';
import { LorryrentComponent } from './component/lorryrent/lorryrent.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    SidenavComponent,
    NewcarComponent,
    CarrentComponent,
    MotorrentComponent,
    TrailrentComponent,
    MicrobusrentComponent,
    LorryrentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgIf,
    MatToolbarModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
