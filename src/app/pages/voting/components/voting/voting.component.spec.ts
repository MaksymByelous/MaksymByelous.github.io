import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotingComponent } from './voting.component';
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import SpyObj = jasmine.SpyObj;

describe('VotingComponent', () => {
  let component: VotingComponent;
  let fixture: ComponentFixture<VotingComponent>;
  let formBuilder: SpyObj<FormBuilder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VotingComponent ],
      imports: [ReactiveFormsModule],
      providers: [FormBuilder]
    })
    .compileComponents();

    formBuilder = TestBed.get(FormBuilder);
    fixture = TestBed.createComponent(VotingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add answer option', () => {
    const initArrLength = component.questionsFormArr.value.length;
    component.newOptionControl.setValue('some text')
    component.addOption()
    expect(component.questionsFormArr.value.length).toEqual(initArrLength + 1);
  });

  it('should delete answer option', () => {
    component.questionsFormArr.push(
        formBuilder.group({
          text: 'some text',
          counter: 0,
        })
    );

    component.deleteOption(0)
    expect(component.questionsFormArr.value.length).toEqual(0);
  });

  it('should add a vote', () => {
    const itemCheckIndex = 1;
    component.questionsFormArr.push(
        formBuilder.group({
          text: 'some text',
          counter: 0,
        })
    );
    component.questionsFormArr.push(
        formBuilder.group({
          text: 'other option',
          counter: 0,
        })
    );
    component.answerControl.setValue(itemCheckIndex)

    component.voteForOption()
    expect(component.questionsFormArr.value[itemCheckIndex].counter).toEqual(1);
  });

  it('should reset all forms', () => {
    component.questionsFormArr.push(
        formBuilder.group({
          text: 'some text',
          counter: 0,
        })
    );
    component.answerControl.setValue(0)
    component.questionControl.setValue('this is a question')
    component.clearOptions();

    expect(component.questionsFormArr.value.length).toEqual(0);
    expect(component.answerControl.value).toEqual('');
    expect(component.questionControl.value).toEqual('');
  });
});
