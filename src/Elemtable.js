import React from 'react'
import {Paper} from '@mui/material'
import Elm from './Elements'
import { useContext } from 'react'

export default function Elemtable({setActive}) {

  const {ElemList}=useContext(Elm)

  return (
    <div style={{width:'900px',height:'500px',backgroundColor:'yellow',position:'relative',left:'100px'}}>
        {ElemList.map((elem,indx)=> {
            return (<Paper key={indx+1} sx={{width:'45px',height:'45px',position:'absolute',left:`${elem.locX}px`,top:`${elem.locY}px`}} square onClick={()=>setActive(indx+1)}></Paper>)           
        })}
    </div>
  )
}


