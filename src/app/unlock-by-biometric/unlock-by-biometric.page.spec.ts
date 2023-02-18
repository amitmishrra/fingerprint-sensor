import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UnlockByBiometricPage } from './unlock-by-biometric.page';

describe('UnlockByBiometricPage', () => {
  let component: UnlockByBiometricPage;
  let fixture: ComponentFixture<UnlockByBiometricPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UnlockByBiometricPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UnlockByBiometricPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
