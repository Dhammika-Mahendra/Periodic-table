import React from 'react'
import {Paper,FormControlLabel} from '@mui/material'
import Elm from './Elements'
import { useContext } from 'react'
import Switch from '@mui/material/Switch';
import { useState } from 'react';
import { styled } from '@mui/system';


export default function Elemtable({setActive}){
  const ElmCard=styled(Paper)(({theme,sLeft,wLeft,sTop,wTop,type})=>({
    width: check.stat ? '30px' : '45px',
    height: check.stat ? '30px' : '45px',
    position:'absolute',
    left: check.stat ? `${wLeft}px`:`${sLeft}px`,
    top: check.stat ? `${wTop}px`:`${sTop}px`,
    backgroundColor: type==='Nonmetal (other)'?'#ffaaaa':
                     type==='Alkali Metal'?'#ffaaaa':
                     type==='Alkaline Earth Metal'?'#ffaaaa':
                     type==='Metalloid'?'#ffaaaa':
                     type==='Nonmetal'?'#ffaaaa':
                     type==='Noble Gas'?'#ffaaaa':
                     type==='Halogen'?'#ffaaaa':
                     type==='Metal'?'#ffaaaa':
                     type==='Transition Metal'?'#ffaaaa':
                     type==='Lanthenide'?'#ffaaaa':
                     '#ffaaaa'
  }))

  const {ElemList}=useContext(Elm)
  const [check,setCheck]=useState({stat:false,width:'900px',left:'100px'})
  const onHandleChange=()=>{
    if(check.stat){
        setCheck({...check,stat:false,width:'900px',left:'100px'})
    }else{
        setCheck({...check,stat:true,width:'1024px',left:'10px'})
    }
  }

  return (
    <div style={{width:`${check.width}`,height:'500px',position:'relative',left:`${check.left}`,marginTop:'40px'}}>
        <FormControlLabel sx={{position:'absolute',top:'-35px',left:'90%'}} control={<Switch onChange={onHandleChange} />} label="Widen" />
        {ElemList.map((elem,indx)=> {
            return (<ElmCard key={indx+1} sLeft={elem.sLocX} wLeft={elem.wLocX} sTop={elem.sLocY} wTop={elem.wLocY} type={elem.type} square onClick={()=>setActive(indx)} ><p>{indx+1}</p></ElmCard>)           
        })}
    </div>
  )
}


