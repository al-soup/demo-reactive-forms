import { Component } from '@angular/core';

@Component({
  selector: 'app-infos',
  template: `
    <h1>More Infos</h1>
    <h2>Mixing the two</h2>
    <ul>
      <li>"If by some reason we would need to, we could mix and match the two ways of building forms,...(Formgroup Validations & ngModel) ... But in general, it's better to choose one of the two ways of doing forms, and using it consistently throughout the appliation." (Angular-University)</li>
      <li>Aaaaaand:
        <pre>
         "It looks like you're using ngModel on the same form field as formControlName.
          Support for using the ngModel input property and ngModelChange event with
          reactive form directives has been deprecated in Angular v6 and will be removed
          in a future version of Angular."
        </pre>
      </li>
    </ul>
    <h2>Resources</h2>
    <ul>
      <li>
        <a href="https://blog.angular-university.io/introduction-to-angular-2-forms-template-driven-vs-model-driven/">Intro
          to Angular 2 Template VS. Model Driven Forms</a>
      </li>
      <li>
        <a href="https://angular-templates.io/tutorials/about/angular-forms-and-validations">Angular Forms and
          Validation</a>
      </li>
      <li>
        <a href="https://stackoverflow.com/questions/39142616/what-are-the-practical-differences-between-template-driven-and-reactive-forms">Discussion on StackOverflow</a>
      </li>
    </ul>
  `
})
export class InfosComponent { }
