import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChanneldesignComponent } from './channeldesign.component';

describe('ChanneldesignComponent', () => {
  let component: ChanneldesignComponent;
  let fixture: ComponentFixture<ChanneldesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChanneldesignComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChanneldesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

function beforeEach(arg0: () => Promise<void>) {
  throw new Error('Function not implemented.');
}

