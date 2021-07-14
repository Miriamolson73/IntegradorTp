import React, { Fragment } from "react";
import '../index.css';


const Frase = ({actualizarStatePreparacion,strMeasure1,strMeasure2,strMeasure3,strInstructionsDE,strInstructions,strInstructionsIT,strDrinkThumb,strDrink,strIngredient1,strIngredient2,strIngredient3,id,key,cargarPreparacion,italia,alemania,inglaterra }) => {
  
   // console.log(frase);
   
   const  elegido = props => {
    cargarPreparacion(props)
    actualizarStatePreparacion(true)
    
  }
 
    

 

    return ( 
  <Fragment >
  

   
    <div className=" grid grid-cols-1 gap-1 md:grid-cols-2 md:gap-2 lg:grid-cols-3 lg:gap-2 py-8 px-8 max-w-sm bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 mx-5 mt-2">
      
       <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0" src={strDrinkThumb} alt="Woman's Face"/>
       <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">
              {strDrink}
              
            </p>
            <p className="text-xs text-black font-semibold"> Ingredientes  
            <ul>
              <li>{strMeasure1}--{strIngredient1}</li>
              <li>{strMeasure2}--{strIngredient2}</li> 
              <li>{strMeasure3}--{strIngredient3}</li>
              </ul>   
            </p>
          </div>
          <div className="px-4 py-1 text-xs text-gray-900 font-semibold rounded-full border-2 border-gray-600 hover:text-white hover:bg-gray-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-green-400  focus:ring-offset-2">
          {/* <button  className="px-4 py-1 text-sm text-gray-900 font-semibold rounded-full border-2 border-gray-600 hover:text-white hover:bg-gray-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-green-400  focus:ring-offset-2" */}
           {/* >Preparación Seleccione Bandera</button> */}
           <p className="text-center">Preparación Seleccione Idioma</p>
           <div className="flex grid-rows gap-8 ">
           <img className ="border-2 border-gray-400 hover:border-gray-800  "onClick= { () => elegido(strInstructionsIT)} alt=""width="30" height="20" src={italia}/>
           <img className ="border-2 border-gray-400 hover:border-gray-800  "onClick= { () => elegido(strInstructionsDE)} alt=""width="30" height="20" src={alemania}/>
           <img className ="border-2 border-gray-400 hover:border-gray-800  " onClick= { () => elegido(strInstructions)} alt=""width="30" height="20" src={inglaterra}/>
           </div></div>
        </div></div>
       

 
 
   
    

    
   
   
    </Fragment>
  
     
         
            
  
     
     );
}
 
export default Frase;