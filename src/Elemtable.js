import React from 'react'
import {Paper,FormControlLabel} from '@mui/material'
import Elm from './Elements'
import { useContext } from 'react'
import Switch from '@mui/material/Switch';
import { useState } from 'react';
import { styled } from '@mui/system';


export default function Elemtable({setActive,activeProp}){


  const ElmCard=styled(Paper)(({sLeft,wLeft,sTop,wTop,type})=>({
    width: check.stat ? '30px' : '45px',
    height: check.stat ? '30px' : '45px',
    position:'absolute',
    left: check.stat ? `${wLeft}px`:`${sLeft}px`,
    top: check.stat ? `${wTop}px`:`${sTop}px`,
    backgroundColor: activeProp!==null?'#ffffff':
                     type==='Nonmetal (other)'?'#e0bc6e':
                     type==='Alkali Metal'?'#6D5A7B':
                     type==='Alkaline Earth Metal'?'#787795':
                     type==='Metalloid'?'#598E65':
                     type==='Nonmetal'?'#ACA84A':
                     type==='Noble Gas'?'#c92634':
                     type==='Halogen'?'#B98047':
                     type==='Metal'?'#5D9AA5':
                     type==='Transition Metal'?'#4B88B4':
                     type==='Lanthanide'?'#C04766':
                     type==='Actinide'?'#B6778C':
                     '#ffffff'
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
            return (<ElmCard key={indx+1} 
              sLeft={elem.sLocX} wLeft={elem.wLocX} sTop={elem.sLocY} wTop={elem.wLocY} type={elem.type} square 
              onClick={()=>setActive(indx)} 
              style={{boxShadow:activeProp===null?'':elem[activeProp]==null?'10px 10px white':''}}>

                <p style={{paddingLeft:'4px',fontSize:'12px',color:activeProp===null?'black':elem[activeProp]==null?'white':'black'}}>{indx+1}
                </p>

              </ElmCard>)           
        })}
    </div>
  )
}


