import Grid from '@mui/material/Grid';
import { Elements } from './Elements';
import Elemtable from './Elemtable';
import ActiveElem from '../src/ActiveElemPad/ActiveElem';
import { useState } from 'react';

function App() {

  const [Active,setActive]=useState(1)
  const [activeProp,setActiveProp]=useState(null)

  const activePropSet=(x)=>{
    if(activeProp===null){setActiveProp(x)}else if(x==activeProp){setActiveProp(null)}else{return}
  }

  return (
    <>
    <Elements>
      <Grid container>
        <Grid item xs={2}>
          <ActiveElem Active={Active} activePropSet={activePropSet} activeProp={activeProp}></ActiveElem>
        </Grid>
        <Grid item xs={10}>
          <Elemtable setActive={setActive} activeProp={activeProp}></Elemtable>
        </Grid>
      </Grid>
    </Elements>
    </>
  );
}

export default App;
