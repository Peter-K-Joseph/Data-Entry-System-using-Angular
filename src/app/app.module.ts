import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input'; 
import {MatSelectModule} from '@angular/material/select'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table'; 
import {MatPaginatorModule} from '@angular/material/paginator';
import { AddonsComponent } from './addons/addons.component';
import { AluminiComponent } from './alumini/alumini.component';
import { BlendedComponent } from './blended/blended.component';
import { GuestComponent } from './guest/guest.component';
import { IndustryComponent } from './industry/industry.component';
import { MoocComponent } from './mooc/mooc.component';
import { ModifyComponent } from './modify/modify.component';
import { ApiService } from './services/api.service';


@NgModule({
  declarations: [
    AppComponent,
    AddonsComponent,
    AluminiComponent,
    BlendedComponent,
    GuestComponent,
    IndustryComponent,
    MoocComponent,
    ModifyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
