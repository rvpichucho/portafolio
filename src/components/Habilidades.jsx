import "../styles/habilidades.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container,Card} from "react-bootstrap";
import angular from '../assets/angular.png';
import laravel from '../assets/laravel.png';
import reactjs from '../assets/reactjs.png';
import reactnt from '../assets/reactnt.png';
import flask from '../assets/flask.png';
import pytorch from '../assets/pytorch.png';
import sklear from '../assets/sklearn.png';
import flutter from '../assets/flutter.png';
import fast from '../assets/fast.png';
import node from '../assets/nodejs-removebg-preview.png';
import html from '../assets/html.png';
import css from '../assets/CSS.png';
import dart from '../assets/dart.png';
import numpy from '../assets/numpy.png';
import opencv from '../assets/opencv.png';
import axios from '../assets/axios.png';
function Habilidades() {
  return (
    <Container fluid className="p-4" id="Habilidades">
        <Card className="container_card">
          <Card.Body>
          <Card.Title className="style_title"> Mis habilidades</Card.Title>  
          <div className="icon_container_habi">
          <Card.Text className="color_text_habi">Back-End</Card.Text>
          <Card.Img className="style_img_habi mx-auto d-block" src={laravel} />
          <Card.Img className="style_img_habi mx-auto d-block" src={node} />
          <Card.Img className="style_img_habi mx-auto d-block" src={fast} />
          <Card.Img className="style_img_habi mx-auto d-block" src={flask} />
          </div>
          <div className="icon_container_habi">
          <Card.Text className="color_text_habi">Front-End</Card.Text>
          <Card.Img className="style_img_habi mx-auto d-block" src={angular} />
          <Card.Img className="style_img_habi mx-auto d-block" src={reactjs} />
          <Card.Img className="style_img_habi mx-auto d-block" src={html} />
          <Card.Img className="style_img_habi mx-auto d-block hidden-image" src={css} />
          </div>
          <div className="icon_container_habi">
            
          <Card.Text className="color_text_habi">App-Movil</Card.Text>
          <Card.Img className="style_img_habi mx-auto d-block" src={reactnt} />
          <Card.Img className="style_img_habi mx-auto d-block" src={flutter} />
          <Card.Img className="style_img_habi mx-auto d-block" src={dart} />
          <Card.Img className="style_img_habi mx-auto d-block" src={axios} />
          </div>
          <div className="icon_container_habi">
          <Card.Text className="color_text_habi">Inteligencia</Card.Text>
          <Card.Img className="style_img_habi mx-auto d-block" src={sklear} />
          <Card.Img className="style_img_habi mx-auto d-block" src={pytorch} />
          <Card.Img className="style_img_habi mx-auto d-block" src={numpy} />
          <Card.Img className="style_img_habi mx-auto d-block" src={opencv} />
          
       
          </div>
          </Card.Body>
        </Card>      
      
    </Container>
  );
}
export default Habilidades;
