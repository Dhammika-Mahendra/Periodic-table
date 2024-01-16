import React from 'react'
import {Paper,FormControlLabel, Typography} from '@mui/material'
import Elm from './Elements'
import { useContext } from 'react'
import Switch from '@mui/material/Switch';
import { useState } from 'react';
import { styled } from '@mui/system';
import Legend from './Legend';


export default function Elemtable({setActive,activeProp}){

  const [activeType,setActiveType]=useState(null)

  const activeTypeset=(t)=>{
    if(activeType==null){setActiveType(t)}else if(activeType==t){setActiveType(null)}else{setActiveType(t)}
  }

  const ElmCard=styled(Paper)(({sLeft,wLeft,sTop,wTop,type})=>({
    width: wide ? '30px' : '45px',
    height: wide ? '30px' : '45px',
    position:'absolute',
    left: wide ? `${wLeft}px`:`${sLeft}px`,
    top: wide ? `${wTop}px`:`${sTop}px`,
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

  const[wide,setWide]=useState(false)

  return (
    <>
    <Legend activeType={activeType} activeTypeset={activeTypeset}></Legend>
      <div style={{width:wide?'1024px':'900px',height:wide?'250px':'500px',position:'relative',left:wide?'10px':'100px',marginTop:wide?'150px':'40px'}}>
          <FormControlLabel sx={{position:'fixed',top:'30px',left:'60%'}} control={<Switch onChange={()=>setWide(!wide)} />} label="Widen" />
          
          {ElemList.map((elem,indx)=> {
              return (<ElmCard key={indx+1} 
                sLeft={elem.sLocX} wLeft={elem.wLocX} sTop={elem.sLocY} wTop={elem.wLocY} type={elem.type} square 
                onClick={()=>setActive(indx)} 
                style={{boxShadow:activeProp===null?'':elem[activeProp]==null?'10px 10px white':'',
                border:activeType==null?'':elem.type==activeType?'2px solid blue':''}}>
  
                  <p style={{paddingLeft:'4px',fontSize:wide?'8px':'12px',color:activeProp===null?'black':elem[activeProp]==null?'white':'black',margin:'0'}}>{indx+1}
                  </p>
  
                  <Typography variant='h6' sx={{pl:'5px',color:activeProp===null?'white':elem[activeProp]==null?'white':'black',fontSize:wide?'14px':'20px'}}>{elem.symbol}</Typography>
  
                </ElmCard>)           
          })}
      </div>
    </>
  )
}


