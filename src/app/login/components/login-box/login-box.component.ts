import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';



@Component({
  selector: 'app-login-box',
  templateUrl: './login-box.component.html',
  styleUrls: ['./login-box.component.scss']
})
export class LoginBoxComponent implements OnInit, OnDestroy {
  public faEnvelope = faEnvelope;
  public faLock = faLock;
  public form: FormGroup;
  public isFormSubmitted;
  private _unsubscribe$: Subject<boolean>;


  constructor(private _formBuilder: FormBuilder) {
    this.isFormSubmitted = false;
    this.form = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      remember: [false, []]
    });
    this._unsubscribe$ = new Subject<boolean>();
  }

  public ngOnInit(): void {
    this.form.valueChanges
    .pipe(takeUntil(this._unsubscribe$))
    .subscribe(() => this.isFormSubmitted = false);
  }

  public ngOnDestroy(): void {
    this._unsubscribe$.next(true);
    this._unsubscribe$.unsubscribe();  
  }

  public onChangeToogle($event: boolean) {
    this.form.controls['remember'].setValue($event);
  }

  public onSubmit() {
    this.isFormSubmitted = true;

    if(this.form.valid) {
      console.log(this.form.value);
      console.log('Ok');
    }
  }
}


