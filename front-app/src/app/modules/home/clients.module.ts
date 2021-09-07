import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

import { ClientsRoutingModule } from './clients-routing.module';
import { ListClientsComponent } from './pages/list-clients/list-clients.component';
import { DetailsClientComponent } from './pages/details-client/details-client.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ListClientsComponent, DetailsClientComponent],
  imports: [
    CommonModule,
    NgxPaginationModule,
    ClientsRoutingModule,
    SharedModule,
  ],
})
export class ClientsModule {}
