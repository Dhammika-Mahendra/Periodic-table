import React from 'react'
import {Typography , Stack, Toolbar, Button,Paper,IconButton,Avatar} from '@mui/material'
import Elm from '../Elements'
import { useContext } from 'react'
import melt from '../../src/Icons/melt.png'
import boil from '../../src/Icons/boil.png'
import heat from '../../src/Icons/heat.png'
import radius from '../../src/Icons/radius.png'
import dense from '../../src/Icons/dense.png'
import { useState } from 'react'

export default function ActiveElem({Active}) {

  const {ElemList,colors}=useContext(Elm)

  const [hover,setHover]=useState(false)
  const Property=({name,value,unit,icon,col})=>{
    return(
      <div style={{display:'flex',alignItems:'center'}}>
        <Paper sx={{
          padding:'0',
          width:'30px',
          height:'30px',
          backgroundColor:`${col}`,
          backgroundImage:`url(${icon})`,
          backgroundRepeat:'no-repeat',
          backgroundSize:'contain',
          padding:'5px',
          backgroundOrigin:'content-box',
          borderRadius:'10px',
          cursor:hover ? 'pointer':'auto'
          }} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
        </Paper>
        <div style={{paddingLeft:'10px',paddingTop:'5px'}}>
          <Typography sx={{fontSize:'12px',fontWeight:'bold',color:'black',marginBottom:'-5px'}}>{name}</Typography>
          <Typography sx={{fontSize:'15px',color:colors.Gr.mid}}>{`${value} ${unit}`}</Typography>
        </div>
      </div>
    )
  }

  return (
    <div style={{height:'100vh',backgroundColor:'#f6f6ff',display:'flex',flexDirection:'column'}}>
        <Typography variant='h5' sx={{color:colors.Gr.mid,pl:'20px',pt:'15px'}}>{ElemList[Active].name}</Typography>
        <Stack sx={{pl:'10px'}}>
          <Property name={'Melting point'} value={ElemList[Active].melt} icon={melt} unit={'\'C'} col={'#77a9ba'}></Property>
          <Property name={'Boiling point'} value={ElemList[Active].boil} icon={boil} unit={'\'C'} col={'#77a9ba'}></Property>
          <Property name={'Specific heat'} value={ElemList[Active].specific_heat} icon={heat} unit={'J/kg'} col={'#77a9ba'}></Property>
          <Property name={'Heat of fusion'} value={ElemList[Active].fusion_heat} icon={boil} unit={'J/kg'} col={'#77a9ba'}></Property>
          <Property name={'Heat of vaporization'} value={ElemList[Active].vapor_heat} icon={boil} unit={'J/kg'} col={'#77a9ba'}></Property>
          <Property name={'Thermal conductivity'} value={ElemList[Active].thermal_cond} icon={boil} unit={'J/m'} col={'#77a9ba'}></Property>
          <Property name={'Atomic radius'} value={ElemList[Active].atomic_radius} icon={radius} unit={'nm'} col={'#77a9ba'}></Property>
          <Property name={'Atomic mass'} value={ElemList[Active].atomic_mass} icon={boil} unit={'amu'} col={'#77a9ba'}></Property>
          <Property name={'Density'} value={ElemList[Active].density} icon={dense} unit={'kg/m'} col={'#77a9ba'}></Property>
          <Property name={'Electrone affinity'} value={ElemList[Active].e_affinity} icon={boil} unit={'J/kg'} col={'#77a9ba'}></Property>
          <Property name={'Electrone negativity'} value={ElemList[Active].e_negativity} icon={boil} unit={'P'} col={'#77a9ba'}></Property>
        </Stack>
    </div>
  )
}
