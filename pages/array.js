import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { Container } from 'react-bootstrap'
import Cabecalho from '../components/cabecalho'
import Pagina from '../components/Pagina';

const Array = () => {
  const carros =['civic', 'tucson', 'celta','tempra', 'marea', 'dublo']
  



  

  // string
  //number
  //boolean
  //objets
  //float
  //array

  return (
    <>
    <Pagina titulo= "array">
      <Container>
        
        <h1>Lista ordenada</h1>
        <ol> 
        {carros.map(item => (
         
          
            <li>{item}</li>
           
        ))}
         </ol>
         
      </Container>

    </Pagina>
     
    </>
    
  )

}

export default Array