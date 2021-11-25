import React from 'react'
import { Grid,Typography,Chip,Button,makeStyles} from '@material-ui/core'
import Ojo from '@material-ui/icons/Visibility';
const estilos=makeStyles((theme) => ({
 botonVer:{
     margin:'15px 0px',
     '&:focus':{
        backgroundColor:"#e0e0e0 !important"
     }
 }
}))
const Portafoliosdos = (props) => {
    const clases=estilos()
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
                    <Typography  align="center">
                      
                      <Button className={clases.botonVer}
                      startIcon={ <Ojo></Ojo> }
                      onClick ={()=>window.open(props.url,'blank')}
                      >
                        Ver pagina web
                      </Button>  
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
