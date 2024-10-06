"use client";

import React, { useEffect } from 'react';
import * as echarts from 'echarts';

// const data = [
//   { name: '1998-03-31', value: 368.66125 },
//   { name: '1998-04-30', value: 369.21500000000003 },
//   { name: '1998-05-31', value: 367.605 },
//   { name: '1998-08-31', value: 365.78374999999994 },
//   { name: '1998-09-30', value: 365.94 },
//   { name: '1998-10-31', value: 365.4683333333333 },
//   { name: '1998-11-30', value: 365.15999999999997 },
//   { name: '1998-12-31', value: 365.39250000000004 },
//   { name: '1999-01-31', value: 368.4133333333334 },
//   { name: '1999-02-28', value: 369.93 },
//   { name: '1999-03-31', value: 370.847 },
//   { name: '1999-04-30', value: 369.495 },
//   { name: '1999-05-31', value: 367.2666666666667 },
//   { name: '1999-06-30', value: 367.355 },
//   { name: '1999-07-31', value: 367.16 },
// ];

const data = [
  { name: '2005-01-31', value: 381.46125 },
  { name: '2005-02-28', value: 382.34749999999997 },
  { name: '2005-03-31', value: 383.21400000000006 },
  { name: '2005-04-30', value: 383.62 },
  { name: '2005-05-31', value: 383.8525 },
  { name: '2005-06-30', value: 381.38 },
  { name: '2005-07-31', value: 379.62375 },
  { name: '2005-08-31', value: 373.85 },
  { name: '2005-09-30', value: 374.46375 },
  { name: '2005-10-31', value: 377.36 },
  { name: '2005-11-30', value: 379.69111111111107 },
  { name: '2005-12-31', value: 380.3825 },
];

const CH4Chart = () => {

  useEffect(() => {
    const chartDom = document.getElementById('main') as HTMLElement;
    const myChart = echarts.init(chartDom);
    const option: echarts.EChartsOption = {
      title: {
        text: 'Monthly Average Time Series of CO2 Concentration',

      },
      tooltip: {
        trigger: 'axis',
      },
      xAxis: {
        data: data.map((item) => item.name),
      },
      yAxis: {},
      series: [
        {
          type: 'bar',
          data: data.map((item) => item.value),
        },
      ],
    };

    myChart.setOption(option);

    const resizeChart = () => {
      myChart.resize();
    };

    window.addEventListener('resize', resizeChart);

    return () => {
      myChart.dispose();
      window.removeEventListener('resize', resizeChart);
    };
  }, []);

  return (
    <div
      id="main"
      className="w-full h-full text-white "
    ></div>
  );
};

export default CH4Chart;
