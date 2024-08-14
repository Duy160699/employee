import { NgModule, TemplateRef } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgGridAngular } from 'ag-grid-angular';
//import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { CellCustomComponent } from './cell-custom/cell-custom.component';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    CellCustomComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    //HttpModule,
    HttpClientModule,
    AgGridAngular,
    BrowserAnimationsModule,
    ModalModule.forRoot()
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
