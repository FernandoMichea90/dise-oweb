import React from 'react'
import { Grid,Typography,Chip} from '@material-ui/core'

const Portafoliosdos = (props) => {

    const row="row"
    const rowReverse="row-reverse"
    return (
        <div>
            <Grid container direction={props.reverso==true ? row :rowReverse}>
                <Grid  xs={12} md={6}>
            
                    <div className="divPortafolioDosPrincipal">
                    <div className="divPortafolioDos">
                    <Typography  align="center" variant="h2" >
                        {props.titulo}  
                    </Typography>
                    <Typography  align="center">
                      
                        <Chip label='Pendiente'>
                      
                        </Chip>  
                    </Typography>
                    </div>
                    </div>
                        
                </Grid>    
                <Grid xs={12} md={6} >
                <Typography  align="center">

                    <img className="imagenPortafolio"  src={props.imagen}>
                    </img>  
                    
                  </Typography>
                </Grid>    


            </Grid>
            
        </div>
    )
}

export default Portafoliosdos
