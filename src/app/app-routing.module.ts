import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './index/index.component';
import {EditComponent} from './edit/edit.component';
import {CreateComponent} from './create/create.component';
import {DeleteComponent} from './delete/delete.component';


const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'edit/:id',
    component: EditComponent
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'delete/:id',
    component: DeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
