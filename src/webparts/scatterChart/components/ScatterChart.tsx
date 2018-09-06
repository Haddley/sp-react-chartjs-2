import * as React from 'react';
import styles from './ScatterChart.module.scss';
import { IScatterChartProps } from './IScatterChartProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { Scatter } from 'react-chartjs-2';

const data = {
  labels: ['Scatter'],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      backgroundColor: 'rgba(75,192,192,0.4)',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [
        { x: 65, y: 75 },
        { x: 59, y: 49 },
        { x: 80, y: 90 },
        { x: 81, y: 29 },
        { x: 56, y: 36 },
        { x: 55, y: 25 },
        { x: 40, y: 18 },
      ]
    }
  ]
};


export default class ScatterChart extends React.Component<IScatterChartProps, {}> {
  public render(): React.ReactElement<IScatterChartProps> {
    return (
      <div className={styles.scatterChart}>
        <div className={styles.container}>

          <div className={styles["webpart-header"]}>
            <span className={styles["view"]}>{this.props.description}</span>
          </div>

          <div className={styles.row}>
            <div className={styles.column}>

              <Scatter data={data} />

            </div>
          </div>
        </div>
      </div>
    );
  }
}
