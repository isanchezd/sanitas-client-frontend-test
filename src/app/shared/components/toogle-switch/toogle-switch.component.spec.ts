import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToogleSwitchComponent } from './toogle-switch.component';

describe('ToogleSwitchComponent', () => {
  let component: ToogleSwitchComponent;
  let fixture: ComponentFixture<ToogleSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToogleSwitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToogleSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('when the toogle change the state should be change and emit an event', waitForAsync(() => {
    const element = fixture.nativeElement;
    const spanElement = element.querySelector('span');

    component.changeToogle.subscribe(value => {
      expect(value).toBeTruthy();
    })

    spanElement.click();
    fixture.detectChanges();

  }));

});
