import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VotingComponent } from './components/voting/voting.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import {routing} from "./voting.routing";

@NgModule({
  declarations: [VotingComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgApexchartsModule, routing],
  exports: [VotingComponent],
})
export class VotingModule {}
