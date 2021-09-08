import { Component, OnInit } from '@angular/core';
import { clientsMock } from '../../mocks/clients.mock';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.scss'],
})
export class ListClientsComponent implements OnInit {
  isLoading: boolean = false;
  listOfClients: any[] = clientsMock;
  paginationCurrentPage: number = 1;
  paginationItemsPerPage: number = 10;
  totalOfClients: number = clientsMock.length;

  constructor() {}

  ngOnInit(): void {}

  deleteClient(): void {}

  pageChanged(page: number): void {
    this.paginationCurrentPage = page;
  }

  test(inputValue: string): void {
    console.log(inputValue);
  }
}
