import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  constructor(
    private httpService: HttpService,
    private dataService: DataService
  ) {}

  posts!: any[];

  ngOnInit(): void {
    let t = this.httpService.getPosts().subscribe({
      next: (res: any) => {
        this.posts = res;
        this.dataService.posts = res;
      },
      error: (err: any) => {},
    });

    console.log(this.dataService.posts);
  }
}
