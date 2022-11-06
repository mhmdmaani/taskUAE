
import './App.css';
import React from 'react';

import Solutions from './sections/solutionsSection/Solutions';
import HowWorks from './sections/howWroks/HowWorks';
import OurProcess from './sections/ourProcessSection/OurProcess';
import { Slider } from '@mui/material';
function App() {
  return (
    <div className='App' style={{ paddingTop: '6rem',paddingBottom:'6rem'  }}>
      <Solutions />
      <HowWorks />
      <OurProcess />
      <div style={{padding:'5rem'}} ></div>
    </div>
  );
}

export default App;
