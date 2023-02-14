import { RouterModule, Routes } from '@angular/router';
import {VotingComponent} from "./components/voting/voting.component";

const routes: Routes = [{ path: '', component: VotingComponent }];

export const routing = RouterModule.forChild(routes);
