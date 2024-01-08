import Grid from '@mui/material/Grid';
import { Elements } from './Elements';
import Elemtable from './Elemtable';
import ActiveElem from './ActiveElem';
import { useState } from 'react';

function App() {

  const [Active,setActive]=useState(1)

  return (
    <>
    <Elements>
      <Grid container>
        <Grid item xs={2}>
          <ActiveElem Active={Active}></ActiveElem>
        </Grid>
        <Grid item xs={10}>
          <Elemtable setActive={setActive}></Elemtable>
        </Grid>
      </Grid>
    </Elements>
    </>
  );
}

export default App;
