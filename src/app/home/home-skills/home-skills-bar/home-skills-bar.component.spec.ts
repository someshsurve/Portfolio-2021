import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSkillsBarComponent } from './home-skills-bar.component';

describe('HomeSkillsBarComponent', () => {
  let component: HomeSkillsBarComponent;
  let fixture: ComponentFixture<HomeSkillsBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSkillsBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSkillsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
