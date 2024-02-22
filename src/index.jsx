import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ImageModule,ImageCard } from './components';
import reportWebVitals from './reportWebVitals';




try {
  ReactDOM.render(
    <ImageModule>
        <ImageCard image={'eltoro.jpg'} />
        <ImageCard image={'cert.png'} />
    </ImageModule>,
    document.getElementById('imageModule')
  );
} catch (error) {
  console.error("",error);
}



reportWebVitals();
