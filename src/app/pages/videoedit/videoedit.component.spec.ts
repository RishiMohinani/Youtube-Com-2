import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoeditComponent } from './videoedit.component';

describe('VideoeditComponent', () => {
  let component: VideoeditComponent;
  let fixture: ComponentFixture<VideoeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoeditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VideoeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
