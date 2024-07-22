import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatToolbarHarness } from '@angular/material/toolbar/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let loader: HarnessLoader;

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should find all toolbars', async () => {
    const toolbars = await loader.getAllHarnesses(MatToolbarHarness);
    expect(toolbars.length).toBe(1);
  });

  it('should find toolbar with text', async () => {
    const toolbars = await loader.getAllHarnesses(MatToolbarHarness.with({ text: 'Tasks Pro' }));
    expect(toolbars.length).toBe(1);
    expect(await toolbars[0].hasMultipleRows()).toBeFalsy();
  });
});
