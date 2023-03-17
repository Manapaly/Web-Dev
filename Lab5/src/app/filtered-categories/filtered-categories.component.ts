import {Component, OnInit} from '@angular/core';
import {Product, products} from "../products";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
// import {POSTS} from "../fake-db";
// import {AlbumService} from "../post.service";

@Component({
  selector: 'app-filtered-categories',
  templateUrl: './filtered-categories.component.html',
  styleUrls: ['./filtered-categories.component.css']
})
export class FilteredCategoriesComponent implements OnInit{
  filteredProducts: Product[];
  loaded: boolean;

  constructor(private route: ActivatedRoute) {
    this.filteredProducts = [] ;
    this.loaded = true;
  }


  getPosts(c: string | null):Product[] {
    this.loaded = false;
    let prod: Product[] = [];
    for (let i of products) {
      if (i.category == c) {
        prod.push((i))
      }
    }
    this.loaded = true;
    return prod;
  }
  ngOnInit(): void {
    
    this.route.paramMap.subscribe((params) => {
      const category = params.get('name');
      this.loaded = false;

      this.filteredProducts = this.getPosts(category);
      this.loaded = true;

    })

  }


  
    // this.postService.getPosts().subscribe((posts) =>{
    //   this.posts = posts;
    //   this.loaded = true;
    // })

}



