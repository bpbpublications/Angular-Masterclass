import { Component } from '@angular/core';
import { ChartConfiguration, ChartEvent } from 'chart.js';

@Component({
  selector: 'app-sales-bar-chart',
  templateUrl: './sales-bar-chart.component.html',
  styleUrls: ['./sales-bar-chart.component.css']
})
export class SalesBarChartComponent {
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'],
    datasets: [
      { data: [60, 68, 42, 51, 56, 68, 72], label: 'Apples' },
      { data: [29, 43, 23, 30, 41, 63, 95], label: 'Oranges' }
    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
  };

  public chartClicked({ event, active}: { event?: ChartEvent; active?: object[];}): void {
    console.log(event, active);
  }

  public chartHovered({event, active}: { event?: ChartEvent; active?: object[];}): void {
    console.log(event, active);
  }
}
