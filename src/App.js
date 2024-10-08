import React from 'react';
import SectorChart from './charts/SectorChart';
import YearlyTrends from './charts/YearlyTrends';
import CTCAnalysis from './charts/CTCAnalysis';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Recruitment Data Visualization</h1>
      <div className="charts-container">
        <SectorChart />
        <YearlyTrends />
        <CTCAnalysis />
      </div>
    </div>
  );
}

export default App;
