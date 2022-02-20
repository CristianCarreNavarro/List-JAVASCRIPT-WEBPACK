import "../css/componentes.css";
import webpacklogo from "../assets/img/webpack-logo.png";

export const saludar = (nombre) => {
  console.log("Creando etiqueta h1");

  const titulo01 = document.createElement("h1");
  titulo01.innerText = `Te quiero, ${nombre}!!!`;

  document.body.append(titulo01);

  //Img
  const img = document.createElement("img");
  img.src = webpacklogo;
  document.body.append(img);
  console.log(img);
};
