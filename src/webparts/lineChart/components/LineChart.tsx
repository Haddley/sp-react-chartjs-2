import * as React from 'react';
import styles from './LineChart.module.scss';
import { ILineChartProps } from './ILineChartProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

export default class LineChart extends React.Component<ILineChartProps, {}> {
  public render(): React.ReactElement<ILineChartProps> {


    return (
      <div className={styles.lineChart}>
        <div className={styles.container}>

          <div className={styles["webpart-header"]}>
            <span className={styles["view"]}>{this.props.description}</span>
          </div>

          <div className={styles.row}>
            <div className={styles.column}>

              <Line data={data} />

            </div>
          </div>
        </div>
      </div>
    );
  }
}
