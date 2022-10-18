import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-cryptoweb',
  templateUrl: './cryptoweb.component.html',
  styleUrls: ['./cryptoweb.component.scss'],
})
export class CryptowebComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;

  public selectedCurrency: string | undefined;
  public coinListData: any;
  public allCoinData: any;

  displayedColumns: string[] = [
    'name',
    'symbol',
    'current_price',
    'price_change_percentage_24h',
    'market_cap',
  ];
  currency: string = 'INR';
  dataSource!: MatTableDataSource<any>;

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.getCurrencyDetails();
    this.getAllDetails();

    this.myStyle = {
      position: 'fixed',
      width: '100%',
      height: '100%',
      'z-index': -1,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    };

    this.myParams = {
      particles: {
        number: {
          value: 200,
        },
        color: {
          value: '#ff0000',
        },
        shape: {
          type: 'triangle',
        },
      },
    };
  }
  // this.dataSource.sort = this.sort;

  onCurrencyChange(value: any) {
    console.log(value.value);
  }

  getCurrencyDetails() {
    this.apiService.getTrendingCurrency('INR').subscribe((res) => {
      console.log('Trending Coin Data', res);
      this.coinListData = res;
    });
  }

  getAllDetails() {
    this.apiService.getCryptoCurrencyList('INR').subscribe((res) => {
      console.log('All Coin Data', res);
      this.allCoinData = res;
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  gotoDetails(row: any) {
    console.log('row details', row);
    this.router.navigate(['coin-detail', row.id]);
  }
}
