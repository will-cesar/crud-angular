import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailsClientComponent } from './pages/details-client/details-client.component';
import { ListClientsComponent } from './pages/list-clients/list-clients.component';

const routes: Routes = [
  {
    path: '',
    component: ListClientsComponent,
  },
  {
    path: ':id',
    component: DetailsClientComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientsRoutingModule {}
