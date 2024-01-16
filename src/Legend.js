import React from 'react'
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { useRef } from 'react';

export default function Legend({activeTypeset}) {

    const typeHoverRef=useRef(false)
    const hoverFunction=()=>{
        typeHoverRef.current=!typeHoverRef.current
    }

    const style={
        display: 'flex',
        alignItems: 'center',
        borderColor: 'divider',
        bgcolor: 'background.paper',
        color: 'text.secondary',
        margin:'2px',
        cursor:typeHoverRef.current?'pointer':'auto'
      }

      
  return (
    <div style={{display:'flex',width:'300px',position:'absolute',top:'40px',left:'35%',zIndex:'10'}}>

        <div style={{display:'flex',flexDirection:'column',width:'150px',alignItems:'flex-end'}}>

        <Box sx={style} onClick={()=>activeTypeset('Alkali Metal')} onMouseEnter={()=>hoverFunction()} onMouseLeave={()=>hoverFunction()}>
          <Typography sx={{fontSize:'12px',pl:'2px',pr:'2px'}}>Alkali metals</Typography>
          <Divider orientation="vertical" variant="full" flexItem />
          <Typography sx={{fontSize:'14px',fontWeight:'bold',pl:'2px',pr:'2px',color:'#6D5A7B'}}>06</Typography>
        </Box>
        <Box sx={style} onClick={()=>activeTypeset('Alkaline Earth Metal')} onMouseEnter={()=>hoverFunction()} onMouseLeave={()=>hoverFunction()}>
          <Typography sx={{fontSize:'12px',pl:'2px',pr:'2px'}}>Alkaline Earth metals</Typography>
          <Divider orientation="vertical" variant="full" flexItem />
          <Typography sx={{fontSize:'14px',fontWeight:'bold',pl:'2px',pr:'2px',color:'#787795'}}>06</Typography>
        </Box>
        <Box sx={style} onClick={()=>activeTypeset('Actinide')} onMouseEnter={()=>hoverFunction()} onMouseLeave={()=>hoverFunction()}>
          <Typography sx={{fontSize:'12px',pl:'2px',pr:'2px'}}>Actinide</Typography>
          <Divider orientation="vertical" variant="full" flexItem />
          <Typography sx={{fontSize:'14px',fontWeight:'bold',pl:'2px',pr:'2px',color:'#B6778C'}}>15</Typography>
        </Box>
        <Box sx={style} onClick={()=>activeTypeset('Halogen')} onMouseEnter={()=>hoverFunction()} onMouseLeave={()=>hoverFunction()}>
          <Typography sx={{fontSize:'12px',pl:'2px',pr:'2px'}}>Halogen</Typography>
          <Divider orientation="vertical" variant="full" flexItem />
          <Typography sx={{fontSize:'14px',fontWeight:'bold',pl:'2px',pr:'2px',color:'#B98047'}}>06</Typography>
        </Box>
        <Box sx={style} onClick={()=>activeTypeset('Nonmetal')} onMouseEnter={()=>hoverFunction()} onMouseLeave={()=>hoverFunction()}>
          <Typography sx={{fontSize:'12px',pl:'2px',pr:'2px'}}>Other nonmetal</Typography>
          <Divider orientation="vertical" variant="full" flexItem />
          <Typography sx={{fontSize:'14px',fontWeight:'bold',pl:'2px',pr:'2px',color:'#ACA84A'}}>07</Typography>
        </Box>

        </div>



        <div style={{display:'flex',flexDirection:'column',width:'150px',marginLeft:'5px'}}>

        <Box sx={style} onClick={()=>activeTypeset('Transition Metal')} onMouseEnter={()=>hoverFunction()} onMouseLeave={()=>hoverFunction()}>
          <Typography sx={{fontSize:'14px',fontWeight:'bold',pl:'2px',pr:'2px',color:'#4B88B4'}}>38</Typography>
          <Divider orientation="vertical" variant="full" flexItem />
          <Typography sx={{fontSize:'12px',pl:'2px',pr:'2px'}}>Transition metals</Typography>
        </Box>
        <Box sx={style} onClick={()=>activeTypeset('Metal')} onMouseEnter={()=>hoverFunction()} onMouseLeave={()=>hoverFunction()}>
          <Typography sx={{fontSize:'14px',fontWeight:'bold',pl:'2px',pr:'2px',color:'#5D9AA5'}}>11</Typography>
          <Divider orientation="vertical" variant="full" flexItem />
          <Typography sx={{fontSize:'12px',pl:'2px',pr:'2px'}}>Other metals</Typography>
        </Box>
        <Box sx={style} onClick={()=>activeTypeset('Lanthanide')} onMouseEnter={()=>hoverFunction()} onMouseLeave={()=>hoverFunction()}>
          <Typography sx={{fontSize:'14px',fontWeight:'bold',pl:'2px',pr:'2px',color:'#C04766'}}>15</Typography>
          <Divider orientation="vertical" variant="full" flexItem />
          <Typography sx={{fontSize:'12px',pl:'2px',pr:'2px'}}>Lanthanide</Typography>
        </Box>
        <Box sx={style} onClick={()=>activeTypeset('Noble Gas')} onMouseEnter={()=>hoverFunction()} onMouseLeave={()=>hoverFunction()}>
          <Typography sx={{fontSize:'14px',fontWeight:'bold',pl:'2px',pr:'2px',color:'#c92634'}}>07</Typography>
          <Divider orientation="vertical" variant="full" flexItem />
          <Typography sx={{fontSize:'12px',pl:'2px',pr:'2px'}}>Noble gas</Typography>
        </Box>
        <Box sx={style} onClick={()=>activeTypeset('Metalloid')} onMouseEnter={()=>hoverFunction()} onMouseLeave={()=>hoverFunction()}>
          <Typography sx={{fontSize:'14px',fontWeight:'bold',pl:'2px',pr:'2px',color:'#598E65'}}>07</Typography>
          <Divider orientation="vertical" variant="full" flexItem />
          <Typography sx={{fontSize:'12px',pl:'2px',pr:'2px'}}>Metalloid</Typography>
        </Box>

        </div>
 
    </div>
  )
}
