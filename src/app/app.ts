import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { BlogContainer } from './components/blog-container/blog-container';
@Component({
  selector: 'app-root',
  imports: [Header, Footer, BlogContainer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-test');
}
