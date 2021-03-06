import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LineChartComponent} from '../line-chart/line-chart.component';
import {TttComponent} from '../ttt/ttt.component';
import {LobbyComponent} from '../lobby/lobby.component';

const routes: Routes = [
  {path: 'lobby', component: LobbyComponent },
  {path: 'lineChart', component: LineChartComponent },
  {path: 'ttt/:roomNumber', component: TttComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartRoutingModule { }
