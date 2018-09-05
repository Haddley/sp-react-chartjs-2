import * as React from 'react';
import styles from './HorizontalBarChart.module.scss';
import { IHorizontalBarChartProps } from './IHorizontalBarChartProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { HorizontalBar } from 'react-chartjs-2';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};


export default class HorizontalBarChart extends React.Component<IHorizontalBarChartProps, {}> {
  public render(): React.ReactElement<IHorizontalBarChartProps> {
    return (
      <div className={styles.horizontalBarChart}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>

              <HorizontalBar data={data} />

            </div>
          </div>
        </div>
      </div>
    );
  }
}
