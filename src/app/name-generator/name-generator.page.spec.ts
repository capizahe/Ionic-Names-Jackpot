import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameGeneratorPage } from './name-generator.page';

describe('NameGeneratorPage', () => {
  let component: NameGeneratorPage;
  let fixture: ComponentFixture<NameGeneratorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameGeneratorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameGeneratorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
