import React from 'react';
import { Line } from 'react-chartjs-2';
import dummyData from '../data/dummyData';

function YearlyTrends() {
  const recruitsPerYear = dummyData.reduce((acc, company) => {
    acc[company.year] = (acc[company.year] || 0) + company.recruits;
    return acc;
  }, {});

  const data = {
    labels: Object.keys(recruitsPerYear),
    datasets: [
      {
        label: 'Recruits per Year',
        data: Object.values(recruitsPerYear),
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div>
      <h2>Yearly Recruitment Trends</h2>
      <Line data={data} />
    </div>
  );
}

export default YearlyTrends;
