import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewTncComponent } from './new-tnc.component';

describe('NewTncComponent', () => {
  let component: NewTncComponent;
  let fixture: ComponentFixture<NewTncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTncComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewTncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
