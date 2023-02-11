import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VotingComponent } from './components/voting/voting.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [VotingComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgApexchartsModule],
  exports: [VotingComponent],
})
export class VotingModule {}
