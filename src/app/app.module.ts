import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatatableComponent } from './views/datatable/datatable.component';
import {DataTablesModule} from 'angular-datatables';
import { HeaderComponent } from './views/header/header.component';
import { HomeComponent } from './views/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { MediumComponent } from './views/medium/medium.component';
import { DetailProductComponent } from './views/detail-product/detail-product.component';
import { FindervarComponent } from './views/findervar/findervar.component';
import {FormsModule} from '@angular/forms';
import { NumberonlyDirective } from './directivas/numberonly.directive';
import { CreateRecordComponent } from './views/create-record/create-record.component';
import { FormUpdateComponent } from './views/form-update/form-update.component';

@NgModule({
  declarations: [
    AppComponent,
    DatatableComponent,
    HeaderComponent,
    HomeComponent,
    MediumComponent,
    DetailProductComponent,
    FindervarComponent,
    NumberonlyDirective,
    CreateRecordComponent,
    FormUpdateComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        DataTablesModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
