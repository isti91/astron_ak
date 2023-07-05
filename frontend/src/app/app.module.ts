import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { SidenavComponent } from './component/sidenav/sidenav.component';

import { NgIf } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarrentComponent } from './component/carrent/carrent.component';
import { NewcarComponent } from './component/newcar/newcar.component';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MockBackendInterceptor } from 'src/shared/interceptors/mock-backend.interceptor';
import { LorryrentComponent } from './component/lorryrent/lorryrent.component';
import { MicrobusrentComponent } from './component/microbusrent/microbusrent.component';
import { MotorrentComponent } from './component/motorrent/motorrent.component';
import { TrailrentComponent } from './component/trailrent/trailrent.component';

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
    MatIconModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MockBackendInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
