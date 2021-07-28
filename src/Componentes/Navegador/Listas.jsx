import React from 'react'
import { List, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core'
import {Room,Home,RoomService,Comment,Hotel,Mail} from '@material-ui/icons'
import {Link} from 'react-scroll'
import FacebookIcon from '@material-ui/icons/Facebook';
import Photo from '@material-ui/icons/PhotoCamera';
import Servicio from '@material-ui/icons/Assignment';
import Equipo from '@material-ui/icons/Group';
import Convenio from '@material-ui/icons/Redeem';
const useStyles=makeStyles((theme)=>({

    root:{

     "& a":{
            color:"#000000",

     } ,  

     "& .MuiListItemIcon-root":{
         
        color:"#000000"

     }   
     ,
     "& .MuiListItem-root:hover > .MuiListItemIcon-root,.MuiListItem-root:hover > .MuiListItemText-root":{
       color:"#ffffff", 
       
     },
     "& .MuiListItem-root:hover, .MuiListItemIcon-root:hover":{
       

    }, "& .MuiListItem-button:hover":{
        textDecoration: "none",
        backgroundColor: "rgba(0,0,0,0.5)"
    } ,
    '&  .MuiTypography-displayBlock':{
        
            display: "block",
            fontFamily: 'Oswald',
            fontWeight: "500"

    }
  
    },
    colico:{
    }


}))



const Listas = (props) => {

    const clases=useStyles()
      
    return (
        <div className={clases.root}>
            <List className="nav">

               

              
                <Link to="nosotros" smooth={true} duration={0} onClick={props.onClose} >

                <ListItem button >
                    
                    <ListItemIcon>
                        <Home className={clases.colico}>

                        </Home>
                    </ListItemIcon>
                    <ListItemText>
                        Nosotros 
                       
                    </ListItemText>
                  
                </ListItem> 
                </Link>
                <Link to="portafolio" smooth={true} duration={0} onClick={props.onClose} >

                <ListItem  button>
                    <ListItemIcon>
                        <Servicio className={clases.colico}></Servicio>
                    </ListItemIcon>
                    <ListItemText>
                        Portafolio            
                    </ListItemText>
                </ListItem>
                </Link>
                <Link to="servicios" smooth={true} duration={0} onClick={props.onClose} >
                <ListItem  button>
                    <ListItemIcon>
                      <Equipo className={clases.colico}></Equipo>
                    </ListItemIcon>
                    <ListItemText>
                        Servicios
                        
                    </ListItemText>
                </ListItem>
                </Link>
                <Link to="contacto" smooth={true} duration={0} onClick={props.onClose} >
                <ListItem  button>
                    <ListItemIcon>
                        <Mail className={clases.colico}></Mail>
                    </ListItemIcon>
                    <ListItemText>
                        Contacto                                                        
                     
                    </ListItemText>
                </ListItem>
                </Link>
       
            </List>

        </div>
    )
}

export default Listas
