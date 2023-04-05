import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Cabecalho from "../components/Cabecalho";
import Pagina from '../components/Pagina';

export default function Home() {
  return (

   <>
   <Pagina titulo= "pagina 1 " >
      <Container>
      <h1>Hello world</h1>
      <p>paragrafo 1</p>
      <p>paragrafo 2</p>
      <p>paragrafo 3</p>
     </Container>
     </Pagina>

      
  
   </>
  )
}
