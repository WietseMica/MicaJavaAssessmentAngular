import {Component, OnInit} from '@angular/core';
import {ApiService} from "./api/api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'calculator';

  history: any;

  constructor(private service: ApiService) {

  }

  ngOnInit() {

    this.service.getHistory()
      .subscribe((response) => {
        this.history = response;
      });

  }
}

