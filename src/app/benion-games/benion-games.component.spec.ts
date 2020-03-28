import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenionGamesComponent } from './benion-games.component';

describe('BenionGamesComponent', () => {
  let component: BenionGamesComponent;
  let fixture: ComponentFixture<BenionGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenionGamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenionGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
