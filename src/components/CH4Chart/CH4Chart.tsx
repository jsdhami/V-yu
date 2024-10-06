"use client";

import React, { useEffect } from 'react';
import * as echarts from 'echarts';

const CH4Chart = () => {

  useEffect(() => {
    const chartDom = document.getElementById('main') as HTMLElement;
    const myChart = echarts.init(chartDom);
    const option: echarts.EChartsOption = {
      // title: {
      //   text: 'ECharts Example',
      // },
      tooltip: {},
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
    
      series: [
        {
          type: 'line',
          data: [120, 200, 150, 80, 70, 110, 130],
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
      className="w-full h-full "
    ></div>
  );
};

export default CH4Chart;
