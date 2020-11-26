import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public myMixedForm!: FormGroup;
  public name = 'Yoda';

  public myForm!: FormGroup;


  public ngOnInit(): void {

    // Reactive Form Setup
    this.myForm = new FormGroup({ // Group different controls in an object (also interesting `FormArray`)
      name: new FormControl(
        this.name, // initial value
        [Validators.required, Validators.minLength(3)] // Way more possible (e.g. Email, Number stuff or Regex)
      ),
    });

      /**
       * The same using the FormBilder helper class would look something like this:
       *
       * constructor(formBuilder: FormBuilder) {
       *   this.form = fb.group({
       *       "name": [this.name, [Validators.required, Validators.minLength(3)]],
       *        ...
       *   });
       * }
       */

      // The Mix ©️ smallstack ;)
    this.myMixedForm = new FormGroup({
      name: new FormControl(
        this.name, // Initial value
        [Validators.required, Validators.minLength(3)]
      )
    });
  }

  public onSubmit(form: FormGroup): void {
    alert(`Name: ${form.value.name}`);
  }

  public onTemplateDrivenSubmit(): void {
    alert(`Name: ${this.name}`);
  }

  public isNameValid(name: string): boolean {
    return name !== undefined && name.length > 2;
  }
}
