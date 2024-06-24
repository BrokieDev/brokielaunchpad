'use client';
import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';

const Chart = () => {
  return (
    <div>
      <PieChart
        data={[
          { title: 'One', value: 23, color: '#333399' },
          { title: 'Two', value: 10, color: '#FF5F6D' },
          { title: 'Three', value: 22, color: '#FC00FF' },
          { title: 'Three', value: 30, color: '#FFB75E' },
        ]}
        label={({ dataEntry }) => `${Math.round(dataEntry.percentage)}%`}
        labelStyle={{
          fontSize: '5px',
          color: 'white',
          fontWeight: '800',
        }}
        labelPosition={60}
      />
      ;
    </div>
  );
};

export default Chart;
