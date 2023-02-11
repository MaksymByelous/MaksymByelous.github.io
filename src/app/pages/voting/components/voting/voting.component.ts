import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {
  ApexChart,
  ChartComponent,
  ApexAxisChartSeries,
  ApexXAxis,
  ApexTitleSubtitle,
} from 'ng-apexcharts';

@Component({
  selector: 'voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.scss'],
})
export class VotingComponent implements OnInit {
  @ViewChild(ChartComponent, { static: false }) chart: ChartComponent;
  chartXaxis: ApexXAxis;
  chartSeries: ApexAxisChartSeries;
  chartChart: ApexChart;
  chartTitle: ApexTitleSubtitle;

  newOptionControl: FormControl;
  questionControl: FormControl;
  answerControl: FormControl;
  questionsFormArr: FormArray;

  totalVotes: number = 0;

  constructor(private ref: ChangeDetectorRef, private fb: FormBuilder) {
    this.questionsFormArr = this.fb.array([]);
    this.newOptionControl = this.fb.control('');
    this.questionControl = this.fb.control('');
    this.answerControl = this.fb.control('');

    this.chartTitle = {
      text: '',
    };
    this.chartSeries = [];
    this.chartXaxis = {
      categories: [],
    };
    this.chartChart = {
      height: '300px',
      type: 'bar',
    };
  }

  ngOnInit() {
    this.questionsFormArr.valueChanges.subscribe((newValue) => {
      const xData = [];
      const yData = [];
      this.totalVotes = 0;
      for (let i = 0; i < newValue.length; i++) {
        xData.push(newValue[i].text);
        yData.push(newValue[i].counter);
        this.totalVotes += newValue[i].counter;
      }
      this.chartXaxis = {
        categories: xData,
      };
      this.chartSeries = [{ data: yData }];

      this.chart?.render();
    });

    this.questionControl.valueChanges.subscribe((newValue) => {
      this.chartTitle = {
        text: newValue,
      };
      this.chart?.render();
      if (!this.questionControl.value.length) {
        this.clearOptions();
      }
    });
  }

  get arrFormGroups() {
    return this.questionsFormArr.controls as FormGroup[];
  }

  deleteOption(optionIndex: number): void {
    this.questionsFormArr.removeAt(optionIndex);
    this.answerControl.reset('');
  }

  addOption(): void {
    if (this.questionsFormArr.value.length > 9) {
      return;
    }

    this.questionsFormArr.push(
      this.newFormArrayItem(this.newOptionControl.value, 0)
    );

    this.newOptionControl.reset('');
  }

  clearOptions(): void {
    this.questionsFormArr.clear();
    this.answerControl.reset('');
    this.questionControl.reset('');
  }

  voteForOption(): void {
    const answer = this.answerControl.value;
    const counter = this.questionsFormArr.at(answer)?.get('counter');

    if (counter) {
      counter?.setValue(counter?.value + 1);
    }
  }

  newFormArrayItem(text: string, counter: number): FormGroup {
    return this.fb.group({
      text,
      counter,
    });
  }
}
