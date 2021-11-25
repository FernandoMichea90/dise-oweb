import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook'; 
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { Typography, makeStyles , Grid,IconButton} from '@material-ui/core'

import RoomIcon from '@material-ui/icons/Room';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';


const useStyle=makeStyles((theme)=>({
        fondo:{
            color:"#ffffff",
            position:"relative",

            "& .MuiIconButton-root":{
                color:"#ffffff",
                padding:"20px",
                border:"1px solid #ffffff",
                marginBottom:"20px"

            },
            "& .MuiIconButton-root:hover":{
                color:"#000000",
                background:"#fbfbfb"

            },
           
          

        },
        icono:{
            width:"190px",
            margin:"30px 0px 30px 20px"
        },
        iconoDos:{
            height:"6vh",
            margin:"0px 20px 10px 20px"
        }

,divRedesSociales:{
           display:"block",
           margin:"auto",
           width:"235px",
            margin:"10px auto 10px auto"

        },

        divIcono:{
                height: "60px",
                width: "60px",
                border: "1px solid",
                borderRadius: "30px",
                margin:"auto",
               
        }








}))




const Footer = () => {

        const clases=useStyle()

    return (
        <div name="contacto" className={clases.fondo}>
            
            <Grid container>

                <Grid xs={12}>
                    <Typography align="center">
                   
                    </Typography>
                </Grid>
                <Grid xs={12} sm={4}>
                    <Typography align="center">  
                    <IconButton href="mailto:fmicheam@gmail.com"  target="_blank" aria-label="delete">
                        <MailIcon />
                    </IconButton>
                    </Typography>
                    <Typography align="center" style={{marginBottom:"20px"}} >
                        fmicheam@gmail.com 
                    </Typography>
                </Grid>
                <Grid xs={12} sm={4}>
                    <Typography  align="center" >    
                    <IconButton href="https://www.google.com/maps/place/Paseo+Dimalow+231,+Valpara%C3%ADso/@-33.043651,-71.6297044,17z/data=!3m1!4b1!4m5!3m4!1s0x9689e12ee105a8ad:0x8beb6dcc11cf53e!8m2!3d-33.0436555!4d-71.6275157" target="_blank" aria-label="delete">
                        <RoomIcon />
                    </IconButton>
                    </Typography>
                    <Typography   align="center" style={{marginBottom:"20px"}} >    
                   
                            Dimalow 231, Cerro alegre,Valparaiso
                    </Typography>
                </Grid>
                <Grid xs={12} sm={4}>
                    <Typography  align="center">  
                    <IconButton href="tel:+56-9-7622-6068" target="_blank" aria-label="delete">
                        <PhoneIcon />
                    </IconButton>
                    </Typography>
                    <Typography align="center"  style={{marginBottom:"20px"}}>
                        (56) 9 7622 6068
                    </Typography>
                </Grid>

                <Grid xs={12}>
                  
                    <div className={clases.divRedesSociales}>
                                
                            <Grid container>
                                <Grid xs={4}>    
                                <Typography  align="center">  
                                    <IconButton   href="https://www.instagram.com/micheafernando/" target="_blank" aria-label="delete">
                                        <InstagramIcon />
                                    </IconButton>
                                 </Typography>  
                                </Grid>
                                <Grid xs={4}>    
                                <Typography  align="center">  
                                     <IconButton href="https://www.facebook.com/clinicaalmendral" target="_blank" aria-label="delete">
                                        <FacebookIcon />
                                     </IconButton>
                                 </Typography>   
                                 </Grid>
                                 <Grid xs={4}>
                                 <Typography  align="center">  
                                 <IconButton href="https://api.whatsapp.com/send?phone=56976226068&text=Hola me gustaria hacer una consulta" target="_blank" aria-label="delete">
                                        <WhatsAppIcon />
                                    </IconButton>
                                 </Typography>  
                                 </Grid>
                            </Grid>
                    </div>
                </Grid>
                <Grid xs={12}>
                <Typography align="center" style={{margin:"20px 0px 80px 0px"}}>
                {/* Horarios : Lunes a viernes | 09:30 a 13:45 |16:00 a 21:00| Sabado | 9:30 a 13:45 */}
                </Typography>
                </Grid>
            </Grid>
    

            



        </div>
    )
}

export default Footer
