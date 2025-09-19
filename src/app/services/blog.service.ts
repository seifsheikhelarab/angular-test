import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  blogdata = [
    {
      "category": "Starter",
      "title": "Bruschetta",
      "date": "Available daily",
      "description": "Grilled bread topped with fresh tomatoes, garlic, and basil.",
      "image": "img/our-menu-01.jpg"
    },
    {
      "category": "Main",
      "title": "Grilled Salmon",
      "date": "Chef's special",
      "description": "Perfectly grilled salmon fillet served with lemon butter sauce.",
      "image": "img/our-menu-02.jpg"
    },
    {
      "category": "Main",
      "title": "Steak & Fries",
      "date": "Weekend special",
      "description": "Juicy ribeye steak served with golden fries and pepper sauce.",
      "image": "img/our-menu-03.jpg"
    },
    {
      "category": "Dessert",
      "title": "Tiramisu",
      "date": "Today’s delight",
      "description": "Classic Italian dessert with mascarpone, coffee, and cocoa.",
      "image": "img/our-menu-04.jpg"
    },
    {
      "category": "Drink",
      "title": "Fresh Lemonade",
      "date": "Summer menu",
      "description": "Refreshing homemade lemonade with mint leaves.",
      "image": "img/our-menu-05.jpg"
    }
  ]
  constructor() { }
  data() {
    return this.blogdata
  }
}
