import React, {useEffect,useState}from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import  M  from  'materialize-css'
import '../src/css/principal.css'
import clienteAxios from './config/axios'
import Swal from 'sweetalert2'
import Whatsapp from './Componentes/Whatsapp';
import Portafoliosdos from './Componentes/Portafoliosdos';
import Navegador from './Componentes/Navegador';
import Contacto from './Componentes/Contacto'
import theme  from "./Provedor/Tema"
import Cajon from './Componentes/Navegador/Cajon'
import Descriptor from './Componentes/Descriptor';
import { ThemeProvider } from '@material-ui/core';
import pc from '../src/imagen/pc.png'
import Blanco from '../src/imagen/blanco.svg'
import hotel from '../src/imagen/hotelecomusic.png'
import Papercris from '../src/imagen/papercris.png'
import almendral from '../src/imagen/clinica.png'

function App() {

//Actualizar State


const [contacto,guardarContacto]=useState({})
const [error,setError]=useState({
    consulta:'',
  nombre:'',
  correo:''

});

//state para abrir el menu
const [abrir, setabrir] = useState(false)

const accionAbrir=()=>{
    setabrir(!abrir)
}



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



  // window.onscroll = function() {
  //   var y = window.scrollY;
  //   if(y>740)
  //   {
  //       document.getElementById("nave").className = "navbar-fixed";
  //   }else
  //   {
  //       document.getElementById("nave").classList.remove('navbar-fixed');

  //   }
  //   };



const imagen ='https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
//"https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940 "

 // envio del correo
const mandarCorreo=async e=>
{
    e.preventDefault();

  let  prueba=true;

    try {







       console.log(contacto.nombre);
       console.log(error);




      if(!contacto.nombre){


        error.nombre="<p>ingrese el nombre</p>"

        console.log("paso por el nombre");

       // setError(error)
        prueba=false;


      }else{
        prueba=true
        error.nombre=""
      }

      if(!contacto.consulta){


        error.consulta="<p>ingrese la consulta</p>"




        //setError(error.asunto)
        prueba=false;


      }else{
        prueba=true
        error.consulta=""
      }


      if(!contacto.correo){


        error.correo="<p>ingrese el correo</p>"


        setError(error)
        prueba=false;


      }else{
        prueba=true
        error.correo=""
      }

      if(!prueba){
      setError
      ({
        consulta:error.consulta,
        nombre:error.nombre,
        correo:error.correo
      })
    }


      let mensaje=error.consulta+error.nombre+error.correo;






      console.log("es el error");
      console.log(error);




        if(error.nombre==="" && error.consulta==="" &&error.correo===""){
          const respuesta=await clienteAxios.post('/gmail',contacto)

        Swal.fire(
            'Exito!',
            'Correo enviado',
            'success'

        )



         guardarContacto({
          nombre:'',correo:'',consulta:''
        })


        }else
        {
          Swal.fire(
            '',
            `${mensaje}`,
            'info'

        )
        }


    } catch (error) {

        Swal.fire(
            'Error!',
            'Correo no enviado',
            'success'

        )


    }



}





useEffect(() => {







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
}, [error])


  return (
    <ThemeProvider theme={theme}>
    


            <div class='divPantalla'>
                        <div class="todaPantalla">
                                <Descriptor></Descriptor>
                        </div>
                        <div className="divBlanco">
                     
                        </div>
                
              

            </div>
<Navegador  accionAbrir={accionAbrir}  ></Navegador>













  <div id="nosotros" name="nosotros" className="container ">
  <h1 className="tituloCentro tituloNegro espacioSuperiorDiv espacioInferiorDiv">
 <span className="headline-lines">
   sobre mi
  </span>
</h1>

      <div>
      <p className="parrafoTer">
      Mi objetivo es ayudar a pequeños y medianos emprendimientos a tener presencia online.
Y qué en conjunto podamos diseñar un lugar en el que las personas se sientan invitadas a revisitar
      </p>
      </div>
      <p className="parrafoSecund">
        <img className="imgInicio" src={pc}
        ></img>
      


      </p>











</div>








<div id="portafolio" name="portafolio" className="container">
<h1 className="tituloCentro tituloNegro espacioSuperiorDiv espacioInferiorDiv">
 <span className="headline-lines">
  Portafolio
  </span>
</h1>



    <Portafoliosdos  titulo='Clinica Almendral' reverso={false} imagen={almendral}>

    </Portafoliosdos>

    <Portafoliosdos   titulo='Planet Colab'  reverso={true} imagen={Papercris}>

    </Portafoliosdos>
    <Portafoliosdos  titulo='Hotel Ecomusic' reverso={false} imagen={hotel}>

    </Portafoliosdos>







</div>

<div class="parallax-container">
      <div class="parallax"><img src="https://www.aqusagtechnologies.com/wp-content/uploads/2017/11/Web-design.jpg"/></div>
 </div>
<div className="divContacto" name="servicios" id="servicios">

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

    <Contacto>

    </Contacto>



    <Whatsapp></Whatsapp>
    <Cajon   variant="temporary" open={abrir} onClose={accionAbrir}></Cajon>

    <div class="row bottomCero">
			<div class="col s12">
				<div class="copyright">
					<hr></hr>
					© 2021 All Rights Reserved
				</div>
			</div>
		</div>
</div>
   
    </ThemeProvider>
  );
}

export default App;
