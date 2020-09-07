import React, {useEffect,useState}from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import  M  from  'materialize-css'
import '../src/css/principal.css'
import perfil from '../src/iconos/team-1.png'
import clienteAxios from './config/axios'
import Swal from 'sweetalert2'

function App() {

//Actualizar State


const [contacto,guardarContacto]=useState({})

const actualizarState=e=>
{

    guardarContacto({

      ...contacto,[e.target.name]:e.target.value
    })


}


    var cerrado=true

    function menu()
    {

          if(cerrado){

            cerrado=false;
            document.getElementById("nave-gador").className = "navegador navegadorResponsive-open";
            console.log("esta abierto");
            
          }else
          {
            document.getElementById("nave-gador").className = "navegador navegadorResponsive-close";
            cerrado=true
            console.log("esta cerrado");
            
          }

    }



  window.onscroll = function() {
    var y = window.scrollY;
    if(y>740)
    {
        document.getElementById("nave").className = "navbar-fixed";
    }else
    {
        document.getElementById("nave").classList.remove('navbar-fixed');
    
    }
    };



const imagen =
"https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940 "

 
const mandarCorreo=async e=>
{
    e.preventDefault();



    try {



        console.log("mostar contacto"+contacto);
        console.log(contacto);
        
        const respuesta=await clienteAxios.post('/gmail',contacto)
        console.log(respuesta);
        Swal.fire(
            'Exito!',
            'Correo enviado',
            'success'
    
        )
        
    } catch (error) {
        
        Swal.fire(
            'Error!',
            'Correo no enviado',
            'success'
    
        )
        console.log(error);
        
    }

    


}





useEffect(() => {
  
  document.title="Puerto Digital"


  var elems=document.querySelectorAll('.sidenav');
  M.Sidenav.init(elems,{})
  //Carrusel init 

 
    var elems = document.querySelectorAll('.carousel');
    M.Carousel.init(elems, {
      fullWidth: true,
      indicators: true
    });
  


    var para = document.querySelectorAll('.parallax');
     M.Parallax.init(para, {});
}, [])


  return (
    <div >
        <ul class="sidenav" id="mobile-demo">
    <li><a href="sass.html">Sass</a></li>
    <li><a href="badges.html">Components</a></li>
    <li><a href="collapsible.html">Javascript</a></li>
    <li><a href="mobile.html">Mobile</a></li>
  </ul>


  <div class="carousel todaPantalla  carousel-slider center">
    <div class="carousel-fixed-item center">
    </div>
    <div class="carousel-item divImagen textoTitulo white-text" href="#one!">
      <div className="intro-linedos"  />
      <div >
      <h2 className="txt70">Bienvenido</h2>
      <h2 className="txt70"> a Puerto Web</h2>
      </div>  
      <div className="intro-line"  />

      <p className="parrafoPrinc">


        Tu Pagina Web  al mejor precio 

      </p>
      <a>

    <ul className="ulLista">
      <li>
        <a href="#" style={{color:' #4d6ba2'}}>
        <i class="fab fa-facebook-square"></i>
        </a>
      </li>
      <li>
        <a href="#" style={{color:'#77e878'}}>
        <i class="fab fa-whatsapp-square"></i>
        </a>
      </li>
      <li>
        <a href="#" style={{color:'#f73187'}}  >
        <i class="fab fa-instagram-square"></i>
        </a>
      </li>
    </ul>


      


      </a>
    </div>
   
  </div>
        

<div id="nave">
  <nav id="nave-gador" className="navegador navegadorResponsive-close">
    <div class="nav-wrapper">
      <a href="#!" style={{color:'#d6d6d6!important'}} class="brand-logo logo">Logo</a>
      <a  onClick={()=>menu()}  class="sidenav-trigger"><i class="material-icons">menu</i></a>
      <ul class="right hide-on-med-and-down">
      
        <li><a href="#portafolio">Portafolio</a></li>
        <li><a href="#servicio">Servicio</a></li>
        <li><a href="#contacto">Contacto</a></li>
        <li><a href="#trabajo">Nosotros</a></li>
      </ul>
    </div>
    
  </nav>
  </div>








<div id="trabajo" className="container ">

<h1 className="tituloCentro tituloNegro espacioSuperiorDiv espacioInferiorDiv">
 <span className="headline-lines">
  Nuestro Trabajo
  </span>
</h1>

<div className="row">
    <div className="col s12 m6 l6">
      <p className="parrafoSecund">

        Puerto web, es un equipo de trabajo que busca encontra la mejor solucion 
        para tu emprenidmiento en cuanto  a tu diseño web,  incorpora un diseño responsive 
        Para poder ser visto en cualquier Dispositivo 


      </p>
    </div>
    <div className="col s12 m6 l6">
      <p className="parrafoSecund">
        Enfocados en brindarte el mejor servicio y de acuerdo a tus necesidades 
        Comunicate con nosotros y lleva a tu pyme a otro nivel!

      </p>
    </div>

</div>

<div className="container">
<div class="carousel carousel-slider center">
    <div class="carousel-fixed-item center">
      <a class="btn waves-effect white grey-text darken-text-2">Contacto</a>
    </div>
    <div class="carousel-item red white-text imgCaruselDos  " href="#one!">
      <div class="single">
      <h2>Single Page</h2>
      </div>

      <div className="single singledos">
      <p> a partir desde los </p>
      <p className="precioTitulo"> $ 50.000 CLP </p>
      </div> 
    </div>
    <div class="carousel-item amber white-text imgCaruselDos" href="#two!">
      <h2>Second Panel</h2>
      <p class="white-text">$ 50.000 CLP</p>
    </div>
    
  </div>
  </div>      




</div>




<div id="portafolio" className="container">
<h1 className="tituloCentro tituloNegro espacioSuperiorDiv espacioInferiorDiv">
 <span className="headline-lines">
  Portafolio
  </span>
</h1>

<div className="row">
      <div className="col s12 m6 l4">  
        <div className="divImage">
          
        </div>
        
        <p className="tituloCentro tituloProyecto">Titulo de Proyecto</p>
        <hr></hr> 
        <p className="tituloCentro">I'm surprised you had the courage to take the responsibility yourself.</p >
      </div>

     



</div>



</div>

<div class="parallax-container">
      <div class="parallax"><img src={imagen}/></div>
    </div>
<div className="divContacto" id="servicio">

<h1 className="tituloCentro tituloNegro white-text espacioSuperiorDiv espacioInferiorDiv margenCero">
 <span className="headline-lines">
  Servicios
  </span>
</h1>


      <div className="row">



        

        <div className="col l6 m6 s12 white-text textoLeft" >
        </div>

        <div className="col l6 m6 s12 white-text textoLeft">
        </div>

        </div>
        <div className="row">
        <div className="margenCuarenta">

        <div className="col l4 m4 s12 txtBlanco">

          <h3 className="textoH4">
            Diseño Web
          </h3>

          <div className="divRedondo"  >
              
              <i className="fa fa-magic redondoIcono">
             
              </i>
          </div>

          <div className="txtBlanco" >

            Diseño Web a la medida de tu empresa



        </div>


        </div>

        <div   className="col l4 m4 s12 txtBlanco">

          <h3 className="textoH4">
            Responsive 
          </h3>

          <div className="divRedondo"  >
              
              <span className="material-icons redondoIcono">
             devices
              </span>
          </div>


          <div className="txtBlanco" >

         Accesible desde cualquier dispositivo

        </div>


        </div>

        <div className="col l4 m4 s12 txtBlanco">

          <h3 className="textoH4">
            Development
          </h3>

          <div className="divRedondo"  >
              
              <i className="fa fa-cogs redondoIcono">
             
              </i>
          </div>


          <div className="txtBlanco" >

         Paginas web   rapidas y eficientes

        </div>

        </div>


        </div>

      </div>



      <div className="row">
        <div className="margenCuarenta">

        <div className="col l4 m4 s12 txtBlanco">

          <h3 className="textoH4">
          SEO
          </h3>

          <div className="divRedondo"  >
              
              <span className="material-icons redondoIcono">
              language
              </span>
          </div>

          <div className="txtBlanco" >

            Posicionamiento Web 



        </div>


        </div>

        <div   className="col l4 m4 s12 txtBlanco">

          <h3 className="textoH4">
            Ilustracion
          </h3>

          <div className="divRedondo"  >
              
              <i className="fa fa-paint-brush redondoIcono">
             
              </i>
          </div>


          <div className="txtBlanco" >

          Diseño y paleta de colores adecuado a la imagen de tu empresa


        </div>


        </div>

        <div  className="col l4 m4 s12 txtBlanco">

          <h3 className="textoH4">
            Contacto 
          </h3>

          <div className="divRedondo"  >
              
              <span className="material-icons redondoIcono">
             email
              </span>
          </div>


          <div className="txtBlanco" >

          Formulario de contacto y mensajeria instantanea para una rapida comunicacion con tus clientes 

        </div>

        </div>


        </div>

      </div>




      <div className="caja">
      <hr className="margenCien"></hr> 
      </div>    

</div>
<div class="parallax-container">
      <div class="parallax"><img src={imagen}/></div>
    </div>



    <div className="container">



</div>

<div  id="contacto" className="divContacto  pruebaContacto page-footer">
<h1 className="tituloCentro tituloNegro white-text espacioSuperiorDiv espacioInferiorDiv margenCero">
 <span className="headline-lines">
  Contacto
  </span>
</h1>

<div className="container">
    <div className="row">



    <div class="col s12 m6 l6 textoLeft">


<p>

</p>

</div>


    <div class="col s12 m6 l6 textoLeft">


      <p>
      </p>

    </div>
  </div>
    <div className="row">
         <div class="col s12 m6 l6">
           <form onSubmit={mandarCorreo}>
          <input placeholder="Nombre" name="nombre" onChange={actualizarState} >
          </input>
          <input placeholder="Correo" name="correo" onChange={actualizarState} >
          </input>
          <textarea name="consulta" onChange={actualizarState} placeholder="Mensaje" cols="45" ></textarea>  
          
          <button className="botonEnviar">
            Enviar
          </button>

          </form>
          </div>
          


         <div class="col s12 m6 l6 textoLeft  marginTop20">
           <span>

           <i class="fa fa-phone iconoContacto"></i>

             +56 9 7622 6069
           </span>
           <p>
           <i class="fa fa-envelope iconoContacto"></i>
             fmicheam@gmail.com
           </p>
           <p>
           <i class="fa fa-home iconoContacto"></i>
             Dimalow 231 , Cerro alegre , Valparaiso
           </p>

           <ul class=" list-inline font14">
					<li><a href="#"><i class="fab fa-facebook-square"></i></a></li>
					<li><a href="#"><i class="fab fa-twitter-square"></i></a></li>
					<li><a href="#"><i class="fab fa-linkedin"></i></a></li>
					<li><a href="#"><i className="fab fa-instagram"></i></a></li>
				</ul>




           
         </div>

    </div>
    </div>



    <div class="row bottomCero">
			<div class="col s12">
				<div class="copyright">
					<hr></hr>
					© 2020 All Rights Reserved
				</div> 
			</div> 
		</div>
</div>
    </div>
  );
}

export default App;
