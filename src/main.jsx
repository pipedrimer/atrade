import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import * as $ from 'jquery';
import App from './App.jsx';
import "./bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css'; 





createRoot(document.getElementById('root')).render(
  <StrictMode>

    <App />
   
  </StrictMode>,
)
