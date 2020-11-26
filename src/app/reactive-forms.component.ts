import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html'
})
export class ReactiveFormsComponent implements OnInit {

  public myForm!: FormGroup;

  public ngOnInit(): void {
    // Reactive Form Setup
    this.myForm = new FormGroup({ // Group different controls in an object (also interesting `FormArray`)
      name: new FormControl(
        null, // initial value
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
  }

  public onSubmit(form: FormGroup): void {
    alert(`Name: ${form.value.name}`);
  }

}
