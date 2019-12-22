import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DatatableComponent} from './views/datatable/datatable.component';
import {HomeComponent} from './views/home/home.component';
import {FindervarComponent} from './views/findervar/findervar.component';
import {CreateRecordComponent} from './views/create-record/create-record.component';
import {FormUpdateComponent} from './views/form-update/form-update.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'table',
    component: DatatableComponent
  },
  {
    path: 'finder',
    component: FindervarComponent
  },
  {
    path: 'form',
    component: CreateRecordComponent
  },
  {
    path: 'update',
    component: FormUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
