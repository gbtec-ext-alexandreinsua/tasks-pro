import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BoardComponent } from './board.component';

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load te create task button', async () => {
    const createTaskButton = fixture.debugElement.query(By.css('.create-task-button'))?.nativeElement;
    expect(createTaskButton).toBeTruthy();
  });

  it('should call showTaskDialog when create task button clicked', async () => {
    const showTaskDialogSpy = jest.spyOn(component, 'showTaskDialog');
    const createTaskButton = fixture.debugElement.query(By.css('.create-task-button'))?.nativeElement;
    expect(createTaskButton).toBeTruthy();

    createTaskButton.click();

    expect(showTaskDialogSpy).toHaveBeenCalled();
  });
});
