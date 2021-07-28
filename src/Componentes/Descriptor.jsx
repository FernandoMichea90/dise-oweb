import { makeStyles ,Typography,Grid} from '@material-ui/core'
import React from 'react'


const estilos =makeStyles((theme) => ({

    root:{
            position: 'absolute',
            top: '100px',
    right: '0px',
    zIndex:'1',
    width:"100vw",
    [theme.breakpoints.down('md')]:{
        width:"100vw",
        top: '100px',

    }



          
    }



}))



const Descriptor = () => {
    const clases=estilos()
    
    return (
        <div className={clases.root}>
            <Grid container     direction="column-reverse"
    >

            <Grid xs={12} md={12}>
            <div className="Caraperfil" >
                
            </div>
            </Grid>
            <Grid xs={12} md={12}>
            <Typography  align="center" variant='h2'>
                Fernando Michea
            </Typography>
            <Typography  align="center" variant='h4'>
                Desarrollador web
            </Typography> 
            </Grid>
            </Grid>
        </div>
    )
}

export default Descriptor



