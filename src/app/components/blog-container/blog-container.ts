import { Component } from '@angular/core';
import { OneBlog } from '../one-blog/one-blog';
import { IBlog } from '../../interfaces/blog-data';
import { BlogFetch } from '../../services/blog-fetch';

@Component({
  selector: 'app-blog-container',
  imports: [OneBlog],
  templateUrl: './blog-container.html',
  styleUrl: './blog-container.css'
})
export class BlogContainer {
  blogData: IBlog[] = [];

  constructor(private blogFetch: BlogFetch) { }

  ngOnInit() {
    this.blogData = new BlogFetch().data();
  }
}
