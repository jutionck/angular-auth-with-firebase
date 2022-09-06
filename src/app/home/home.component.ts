import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title: string = 'Angular Authentication with Firebase';
  welcomeTxt: string = 'Selamat Datang Anda berhasil login menggunakan <span class="text-warning">Firebase</span>';
  welcomeDescTxt: string = 'Anda berhasil login';
  constructor() { }

  ngOnInit(): void {
  }

}
