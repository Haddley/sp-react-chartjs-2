import * as React from 'react';
import styles from './BarChart.module.scss';
import { IBarChartProps } from './IBarChartProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { Bar } from 'react-chartjs-2';

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


export default class BarChart extends React.Component<IBarChartProps, {}> {
  public render(): React.ReactElement<IBarChartProps> {
    return (
      <div className={styles.barChart}>
        <div className={styles.container}>

          <div className={styles["webpart-header"]}>
            <span className={styles["view"]}>{this.props.description}</span>
          </div>

          <div className={styles.row}>
            <div className={styles.column}>

              <Bar
                data={data}
                width={100}
                height={100}
                options={{
                  maintainAspectRatio: false
                }}
              />

            </div>
          </div>
        </div>
      </div>
    );
  }
}
