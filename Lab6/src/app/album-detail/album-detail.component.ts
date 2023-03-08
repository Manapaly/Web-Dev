import { Component } from '@angular/core';
import {Album} from "../models";
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../post.service";

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent {
  album: Album;
  loaded: boolean;

  constructor(private route: ActivatedRoute,
              private postService: PostService) {
    this.album = {} as Album;
    this.loaded = true;
  }

  ngOnInit(): void {
    // const id = Number(this.route.snapshot.paramMap.get('id'));
    // if(id){
    //   let num_id = +id;
    // }
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      // this.post = POSTS.find((post) => post.id === id) as Post;
      this.loaded = false;
      this.postService.getAlbum(id).subscribe((album) => {
        this.album = album;
        this.loaded = true;
      });
    })

  }
}
