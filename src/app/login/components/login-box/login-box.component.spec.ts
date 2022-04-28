import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginTestModule } from '../../login.module.spec';

import { LoginBoxComponent } from './login-box.component';

describe('LoginBoxComponent', () => {
  let component: LoginBoxComponent;
  let fixture: ComponentFixture<LoginBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(LoginTestModule).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('If the email is empty the form should be invalid and the email formControl should be has error required', () => {
    const element = fixture.nativeElement;
    const emailInput: HTMLInputElement = element.querySelector('#email');
    const validateButton: HTMLButtonElement = element.querySelector('#validate-button')

    emailInput.value = '';
    emailInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    validateButton.click();

    expect(component.form.invalid).toBeTruthy();
    expect(component.form.controls['email'].hasError('required')).toBeTruthy();
  });

  it('If the email is incorrect format  the form should be invalid and the email formControl should be has error email', () => {
    const element = fixture.nativeElement;
    const emailInput: HTMLInputElement = element.querySelector('#email');
    const validateButton: HTMLButtonElement = element.querySelector('#validate-button')

    emailInput.value = 'hola';
    emailInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    validateButton.click();

    expect(component.form.invalid).toBeTruthy();
    expect(component.form.controls['email'].hasError('email')).toBeTruthy();
  });

  it('If the password is empty the form should show an error and the password formControl should be has error required', () => {
    const element = fixture.nativeElement;
    const passwordInput: HTMLInputElement = element.querySelector('#password');
    const validateButton: HTMLButtonElement = element.querySelector('#validate-button')

    passwordInput.value = '';
    passwordInput.dispatchEvent(new Event('input'));
    validateButton.click();
    fixture.detectChanges();

    expect(component.form.invalid).toBeTruthy();
    expect(component.form.controls['password'].hasError('required')).toBeTruthy();
  });

  it('If the password is min length than 5 the form should show an error and the password formcontrol shoud be has error minlength', () => {
    const element = fixture.nativeElement;
    const passwordInput: HTMLInputElement = element.querySelector('#password');
    const validateButton: HTMLButtonElement = element.querySelector('#validate-button');

    passwordInput.value = '1234';
    passwordInput.dispatchEvent(new Event('input'));
    validateButton.click();
    fixture.detectChanges();

    expect(component.form.invalid).toBeTruthy();
    expect(component.form.controls['password'].hasError('minlength')).toBeTruthy();
  });

  it('When the form have valid data should be valid', () => {
    const element = fixture.nativeElement;
    const emailInput: HTMLInputElement = element.querySelector('#email');
    const passwordInput: HTMLInputElement = element.querySelector('#password');
    const validateButton: HTMLButtonElement = element.querySelector('#validate-button');

    emailInput.value = 'test@test.com';
    emailInput.dispatchEvent(new Event('input'));
    passwordInput.value = '123456';
    passwordInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    validateButton.click();


    expect(component.form.valid).toBeTruthy();
  });

  it('When the toogle button is clicked the data from toogle should be truty', () => {
    const element = fixture.nativeElement;
    const validateButton: HTMLButtonElement = element.querySelector('#validate-button');

    component.onChangeToogle(true);
    fixture.detectChanges();
    validateButton.click();

    expect(component.form.controls['remember'].value).toBeTruthy();
  });

});
