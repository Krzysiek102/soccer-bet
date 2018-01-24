import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatchListComponent } from './match-list.component';
import { FormsModule } from '@angular/forms';
import { MatchDetailsComponent } from '../match-details/match-details.component';
import { HttpClientModule } from '@angular/common/http';

describe('MatchListComponent', () => {
  let component: MatchListComponent;
  let fixture: ComponentFixture<MatchListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientModule
      ],
      declarations: [
        MatchListComponent,
        MatchDetailsComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
