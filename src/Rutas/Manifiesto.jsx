import React from 'react'
import construccion from "./imagenes/manifiesto.png"
import "./Estilos.css"
import { LinearProgress, TableContainer } from '@material-ui/core'
import { Paper } from '@material-ui/core'

const Manifiesto = () => {
    return (
        <TableContainer component={Paper}>
 
            <LinearProgress style={{ backgroundColor: "gold" }} />
            <div className='columna'>
        <img src={construccion} alt="construccion"/>
    </div>
                 
        </TableContainer>
        
    )
}

export default Manifiesto
