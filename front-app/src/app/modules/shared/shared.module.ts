import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar.component';
import { InputSearchComponent } from './components/input-search/input-search.component';

@NgModule({
  declarations: [NavbarComponent, InputSearchComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavbarComponent, InputSearchComponent],
})
export class SharedModule {}
