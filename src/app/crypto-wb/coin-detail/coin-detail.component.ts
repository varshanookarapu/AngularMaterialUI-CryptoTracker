import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-coin-detail',
  templateUrl: './coin-detail.component.html',
  styleUrls: ['./coin-detail.component.scss'],
})
export class CoinDetailComponent implements OnInit {
  coinData: any;
  coinId!: string;
  days: number = 1;
  currency = 'INR';

  constructor(
    private router: Router,
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((value) => {
      console.log('params', value);
      this.coinId = value['id'];
      console.log(this.coinId);
    });
    this.getCoinData();
  }

  goToCryptoHome() {
    this.router.navigate(['crypto']);
  }

  getCoinData() {
    this.apiService.getCurrencyById(this.coinId).subscribe((value) => {
      console.log('coind data ', value);
      this.coinData = value;
    });
  }
}
