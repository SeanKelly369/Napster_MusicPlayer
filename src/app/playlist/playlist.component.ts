import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// import { map, startWith } from 'rxjs/operators';

// import 'rxjs/add/observable/interval';


@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {

  constructor(private http: HttpClient) {
    this.getData();
  }

  ngOnInit() { }

  getData() {

    return this.http.get<any>("https://api.napster.com/v2.1/tracks/top?apikey=ZGJkYzYzZTktY2U1My00YjQ3LWIzOTEtYjE2ZjI3ZTMzMzhh")
      .subscribe(data => {
        console.log(data);
      })

  }
}