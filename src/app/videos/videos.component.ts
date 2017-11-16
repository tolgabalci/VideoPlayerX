import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  color$: Observable<string>;
  category$: Observable<string>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.category$ = this.route.paramMap.map(params => params.get("category"));
    this.color$ = this.route.paramMap.map(params => params.get("color"));
  }

}
