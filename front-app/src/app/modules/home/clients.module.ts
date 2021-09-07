import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ListClientsComponent } from './pages/list-clients/list-clients.component';
import { DetailsClientComponent } from './pages/details-client/details-client.component';

@NgModule({
  declarations: [ListClientsComponent, DetailsClientComponent],
  imports: [CommonModule, ClientsRoutingModule],
})
export class ClientsModule {}
