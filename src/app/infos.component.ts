import { Component } from '@angular/core';

@Component({
  selector: 'app-infos',
  template: `
    <h1>More Infos</h1>
    <ul>
      <li>
        <a href="https://blog.angular-university.io/introduction-to-angular-2-forms-template-driven-vs-model-driven/">Intro
          to Angular 2 Template VS. Model Driven Forms</a>
      </li>
      <li>
        <a href="https://angular-templates.io/tutorials/about/angular-forms-and-validations">Angular Forms and
          Validation</a>
      </li>
    </ul>
  `
})
export class InfosComponent { }
