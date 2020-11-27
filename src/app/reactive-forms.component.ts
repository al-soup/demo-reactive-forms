import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html'
})
export class ReactiveFormsComponent implements OnInit, OnDestroy {

  public readonly MIN_AGE = 16;
  public happyStatus = 'Getting there';
  public validationMessages = [
    { type: 'required', message: 'Age is required' },
    { type: 'min', message: `Must be at least ${this.MIN_AGE} years old` }
  ];
  public myForm!: FormGroup;
  private sub!: Subscription;

  public ngOnInit(): void {
    // Reactive Form Setup
    this.myForm = new FormGroup({ // Group different controls in an object (also interesting `FormArray`)
      name: new FormControl(
        null, // initial value
        [Validators.required, Validators.minLength(3)] // Way more possible (e.g. Email, Regex or write your own (advanced))
      ),
      // Or crate a control like this:
      age: new FormControl(
        null,
        {
          validators: Validators.compose([Validators.required, Validators.min(this.MIN_AGE)]),
          updateOn: 'change' // 'submit' | 'blur'
        }
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

    this.sub = this.myForm.valueChanges
      .pipe(
        map(value => value.name === ':)' ? '😃' : 'Almost...')
        // filter(...)
        // ...
      )
      .subscribe(value => this.happyStatus = value);
  }

  public onSubmit(form: FormGroup): void {
    alert(`Name: ${form.value.name}`);
  }

  // Getters and setters
  public onUppercase(): void {
    const currentName: string = this.myForm.get('name')?.value;
    if (currentName) {
      this.myForm.patchValue({ name: currentName.toUpperCase() }); // partially (alt. `.setValue(...)` for the whole group)
    }
  }

  public onReset(): void {
    this.myForm.reset();
  }

  // DON'T FORGET TO UNSUBSCRIBE!
  public ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }


}
