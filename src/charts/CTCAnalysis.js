import React from 'react';
import Plot from 'react-plotly.js';
import dummyData from '../data/dummyData';

function CTCAnalysis() {
  const sectors = [...new Set(dummyData.map(company => company.sector))];
  const boxData = sectors.map(sector => {
    const sectorCTC = dummyData.filter(company => company.sector === sector).map(company => company.ctc);
    return {
      y: sectorCTC,
      type: 'box',
      name: sector,
    };
  });

  return (
    <div>
      <h2>CTC Analysis by Sector</h2>
      <Plot
        data={boxData}
        layout={{ title: 'CTC Distribution by Sector' }}
      />
    </div>
  );
}

export default CTCAnalysis;
