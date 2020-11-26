
import { Component } from '@angular/core';

@Component({
  selector: 'app-template-dirven-forms',
  templateUrl: './template-driven-forms.component.html'
})
export class TemplateDrivenFormsComponent {

  public name = 'Yoda';

  public onSubmit(): void {
    alert(`Name: ${this.name}`);
  }

  public isNameValid(name: string): boolean {
    return name !== undefined && name.length > 2;
  }

}
