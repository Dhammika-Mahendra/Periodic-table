import React from 'react'
import {Typography , Paper} from '@mui/material'

export default function ActiveElem({Active}) {
  return (
    <Paper sx={{height:'100vh'}} square>
        <Typography variant='h3'>{Active }</Typography>
    </Paper>
  )
}
