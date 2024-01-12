import React from 'react'
import {Typography , Stack} from '@mui/material'
import ElemPic from './ElemPic'


export default function ActiveElem({Active}) {
  return (
    <div style={{height:'100vh',backgroundColor:'yelow',display:'flex',flexDirection:'column'}}>
        <ElemPic></ElemPic>
        <Typography variant='h3'>{Active}</Typography>
    </div>
  )
}
