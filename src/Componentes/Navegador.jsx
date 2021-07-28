import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import{Hidden} from '@material-ui/core'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-scroll'

import {animateScroll as scroll} from 'react-scroll'




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

    '& .divLink':{
        cursor:"pointer", 
        padding: "21px",
      
    },
   
      '&  .MuiIconButton-root:hover':{ 
        
      backgroundColor: "rgb(0 0 0 / 63%)",
      color: "#ffffff"
    }
    ,
    '& button:focus':{
      backgroundColor: "rgb(0 0 0 / 63%)",
      color: "#ffffff"

    },




    '& .divLink:hover':{

        background: "rgb(0 0 0 / 12%)",
        padding: "21px",
        color: "#000000"
    },
    
    '& .MuiToolbar-gutters': {

        paddingRight:"0px"
    },
    '& .MuiButton-root:hover	': {
      background:"#FFFFFF!important",
      color:"#ed95d5"
      },
      [theme.breakpoints.only("xs")]:{
        '& .MuiButton-root': {
        fontSize:"0.675rem"
      }
      }

      
  ,

  },
  menuButton: {
    marginRight: theme.spacing(2),
    textTransform:"uppercase",
    fontFamily:"Oswald",
    paddingRight: '12px',
    marginLeft: '2px',
    color:"#000000",
    background:"#00000000",
    [theme.breakpoints.down('sm')]: {
      marginRight:'0px',
  
    paddingRight: '12px',
    marginLeft: '0px',}
},
  menuButtonB: {
    marginRight: theme.spacing(2),
    textTransform:"uppercase",
    fontFamily:"Oswald",
    paddingRight: '12px',
    marginLeft: '2px',
    color:"#434343",
    background:"#00000000",
    [theme.breakpoints.down('sm')]: {
      marginRight:'0px',
    paddingRight: '12px',
    marginLeft: '0px',}
},
  menuButtonDos: {
    marginRight: theme.spacing(2),
    textTransform:"uppercase",
    fontFamily:"Oswald",
    paddingRight: '12px',
    marginLeft: '2px',
    color:"#ffffff",  
    background:"#000000",  
    [theme.breakpoints.down('sm')]: {
      marginRight:'0px',
  
    paddingRight: '12px',
    marginLeft: '0px',}
},

  menuButtonDosB: {
    marginRight: theme.spacing(2),
    textTransform:"uppercase",
    fontFamily:"Oswald",
    paddingRight: '12px',
    marginLeft: '2px',
    color:"#434343",    
   
    [theme.breakpoints.down('sm')]: {
      marginRight:'0px',
  
    paddingRight: '12px',
    marginLeft: '0px',}
},
      barra:{
        background:"#43434300",
        color:"#434343",
        boxShadow:"none",
        [theme.breakpoints.down('md')]:{
            background:"#FFFFFF00",
        }

       
      }

  ,
  barrados:{
    background:"#FFFFFF",
    boxShadow:"none",
    marginTop:"0px",
    [theme.breakpoints.down('md')]:{ 
        background:"#FFFFFF00",

    }
   
  }
,
  title: {
    flexGrow: 1,
  },
  logo:{
    maxHeight:'45px',
      [theme.breakpoints.down('sm')]: {
        height:"5vh",
        minHeight:"34px"
},
  },
  titleLogo:{
    textTransform:"uppercase",
    fontFamily:"Oswald",
  },
  aLink:{
    textTransform:"uppercase",
    fontFamily:"Oswald",
    color:"#000000"

},
aLinkDos:{
    textTransform:"uppercase",
    fontFamily:"Oswald",
    color:"#000000"

},

divLink:{
    background: "rgb(0 0 0 / 12%)",
    padding: "21px",
    color: "#000000"
},

  boton:{
      background:"#ed95d5",
      color:"#FFFFFF",
      borderRadius:"5px",
      
      fontFamily: 'Lato',
      fontWeight: "bold",
      
      
      [theme.breakpoints.down('sm')]: {
        marginRight:'vw'



     }},

    
     

 
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();

  // state Scroll
  const [scrollapp,setscrollapp]=useState(false)

  // listener scroll pantalla 

  





  const cambiarAppbar=()=>{
   

    if(window.scrollY>=721){

      setscrollapp(true)
      
    }else{

      setscrollapp(false)
    

    }


  }

  window.addEventListener('scroll',cambiarAppbar)

  return (
    <div className={classes.root} >
      <AppBar position="fixed" className={scrollapp ? classes.barrados:classes.barra}>
        <Toolbar>
        <Hidden lgUp> 
          <IconButton edge="start" className={ scrollapp ? classes.menuButtonB:classes.menuButton } color="inherit" aria-label="menu"
          onClick={()=>props.accionAbrir()}
          >
            
            <MenuIcon  />   
          
          </IconButton>
          </Hidden>
          <Hidden mdDown>
          <IconButton onClick={()=>scroll.scrollToTop({
            duration:0,delay:0
          })} edge="start" className={scrollapp ?classes.menuButtonDosB:classes.menuButtonDos} color="inherit" aria-label="menu">
            fm
          </IconButton>
          <Typography variant="h6" className={classes.title} >
          
          </Typography>
          <Link to="nosotros">
          <div className="divLink" >
              <a className={scrollapp ? classes.aLink:classes.aLinkDos}   >
              sobre mi
              </a>
            </div>
            </Link>

         <Link to="servicios">   
          <div className="divLink" >
              <a  className={scrollapp ? classes.aLink:classes.aLinkDos}>
              Servicios
              </a>
            </div>

          </Link>
          <Link to="portafolio">
          <div className="divLink" >
              <a  className={scrollapp ? classes.aLink:classes.aLinkDos}>
              Portafolio
              </a>
              </div>
              </Link>
              <Link to="contacto">
          <div className="divLink" >
              <a  className={scrollapp ? classes.aLink:classes.aLinkDos}>
              Contacto
              </a>
              </div>
              </Link>
              </Hidden> 
        </Toolbar>
      </AppBar>
    </div>
  );
}
