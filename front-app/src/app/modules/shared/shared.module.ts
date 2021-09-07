import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { NavbarComponent } from './components/navbar/navbar.component';
import { InputSearchComponent } from './components/input-search/input-search.component';
import { NoResultsComponent } from './components/no-results/no-results.component';

@NgModule({
  declarations: [NavbarComponent, InputSearchComponent, NoResultsComponent],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [NavbarComponent, InputSearchComponent, NoResultsComponent],
})
export class SharedModule {}
