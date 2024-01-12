import React from 'react'
import K from '../../src/img/K.jpg'

export default function ElemPic() {
  return (
    <div style={{
        width:'100px',
        height:'50vh',
        backgroundImage:`url(${K})`,
        backgroundRepeat:'no-repeat',
        backgroundSize:'contain',
        marginLeft:'auto',
        marginRight: 'auto'
        }}>
    </div>
  )
}
