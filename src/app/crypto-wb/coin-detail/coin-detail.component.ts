import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coin-detail',
  templateUrl: './coin-detail.component.html',
  styleUrls: ['./coin-detail.component.scss'],
})
export class CoinDetailComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToCryptoHome() {
    this.router.navigate(['crypto']);
  }
}
