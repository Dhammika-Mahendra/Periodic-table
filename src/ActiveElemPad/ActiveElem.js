import React from 'react'
import {Typography , Stack, Toolbar, Button,Paper,IconButton,Avatar} from '@mui/material'
import Elm from '../Elements'
import { useContext } from 'react'
import melt from '../../src/Icons/melt.png'
import boil from '../../src/Icons/boil.png'
import heat from '../../src/Icons/heat.png'
import radius from '../../src/Icons/radius.png'
import dense from '../../src/Icons/dense.png'
import conduct from '../../src/Icons/conduct.png'
import fusion from '../../src/Icons/fusion.png'
import negative from '../../src/Icons/negative.png'
import vapor from '../../src/Icons/vapor.png'
import mass from '../../src/Icons/mass.png'
import affinity from '../../src/Icons/affinity.png'
import { useState } from 'react'

export default function ActiveElem({Active,activePropSet,activeProp}) {

  const {ElemList,colors}=useContext(Elm)

  const [hover,setHover]=useState(false)
  const Property=({name,value,unit,icon,col,entryname})=>{
    return(
      <div style={{display:'flex',alignItems:'center'}}>
        <Paper sx={{
          padding:'0',
          width:'30px',
          height:'30px',
          backgroundColor:activeProp==entryname?'#4b6b75':`${col}`,
          backgroundImage:`url(${icon})`,
          backgroundRepeat:'no-repeat',
          backgroundSize:'contain',
          padding:'5px',
          backgroundOrigin:'content-box',
          borderRadius:'10px',
          cursor:hover ? 'pointer':'auto'
          }} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} onClick={()=>activePropSet(entryname)}>
        </Paper>
        <div style={{paddingLeft:'10px',paddingTop:'5px'}}>
          <Typography sx={{fontSize:'12px',color:colors.Gr.mid,marginBottom:'-5px'}}>{name}</Typography>
          <Typography sx={{fontSize:'15px',color:colors.Gr.dark,fontWeight:'bold'}}>{`${value} ${unit}`}</Typography>
        </div>
      </div>
    )
  }

  return (
    <div style={{height:'100vh',backgroundColor:'#f6f6ff',display:'flex',flexDirection:'column'}}>
        <Typography variant='h5' sx={{color:colors.Gr.mid,pl:'20px',pt:'15px'}}>{ElemList[Active].name}</Typography>
        <Stack sx={{pl:'10px'}}>

          <Property name={'Melting point'} entryname={'melt'} value={ElemList[Active].melt} icon={melt} unit={'\'C'} col={'#77a9ba'}></Property>

          <Property name={'Boiling point'} entryname={'boil'} value={ElemList[Active].boil} icon={boil} unit={'\'C'} col={'#77a9ba'}></Property>

          <Property name={'Specific heat'} entryname={'specific_heat'} value={ElemList[Active].specific_heat} icon={heat} unit={'J/kg'} col={'#77a9ba'}></Property>

          <Property name={'Heat of fusion'} entryname={'fusion_heat'} value={ElemList[Active].fusion_heat} icon={fusion} unit={'J/mol'} col={'#77a9ba'}></Property>

          <Property name={'Heat of vaporization'} entryname={'vapor_heat'} value={ElemList[Active].vapor_heat} icon={vapor} unit={'J/mol'} col={'#77a9ba'}></Property>

          <Property name={'Thermal conductivity'} entryname={'thermal_cond'} value={ElemList[Active].thermal_cond} icon={conduct} unit={'W/mK'} col={'#77a9ba'}></Property>

          <Property name={'Atomic radius'} entryname={'atomic_radius'} value={ElemList[Active].atomic_radius} icon={radius} unit={'pm'} col={'#77a9ba'}></Property>

          <Property name={'Atomic mass'} entryname={'atomic_mass'} value={ElemList[Active].atomic_mass} icon={mass} unit={'amu'} col={'#77a9ba'}></Property>

          <Property name={'Density'} entryname={'density'} value={ElemList[Active].density} icon={dense} unit={'kg/m'} col={'#77a9ba'}></Property>

          <Property name={'Electrone affinity'} entryname={'e_affinity'} value={ElemList[Active].e_affinity} icon={affinity} unit={'J/mol'} col={'#77a9ba'}></Property>
          
          <Property name={'Electrone negativity'} entryname={'e_negativity'} value={ElemList[Active].e_negativity} icon={negative} unit={'P'} col={'#77a9ba'}></Property>
        </Stack>
    </div>
  )
}
