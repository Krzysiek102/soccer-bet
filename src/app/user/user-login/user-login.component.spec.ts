import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserLoginComponent } from './user-login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatCardModule, MatInputModule, MatFormFieldModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

describe('UserLoginComponent', () => {
  let component: UserLoginComponent;
  let fixture: ComponentFixture<UserLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        FormsModule,
        MatCardModule,
        MatFormFieldModule,
        HttpClientModule,
        MatInputModule,
      ],
      declarations: [ UserLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
