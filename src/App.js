
import './App.css';
import React from 'react';

import Solutions from './sections/solutionsSection/Solutions';
import HowWorks from './sections/howWroks/HowWorks';
import OurProcess from './sections/ourProcessSection/OurProcess';
function App() {
  return (
    <div className='App' style={{ padding: 20 }}>
      <Solutions />
      <HowWorks />
      <OurProcess />
    </div>
  );
}

export default App;
