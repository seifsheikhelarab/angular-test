import { Component, signal } from '@angular/core';
import { Header } from './components/header/header.component';
import { Footer } from './components/footer/footer.component';
import { BlogContainerComponent } from './components/blog-container/blog-container.component';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, BlogContainerComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-test');
}
