//Arreglo de imagenes
let pictures = [
    'https://www.cancunairporttransportations.com/src/tours/chichen-itza-ek-balam-ik-il-private-tour-5.jpg',
    'https://cdn-enterprise.discourse.org/helloforos/uploads/default/original/3X/8/0/8001682ef1c71e3fa4f87c02e0226812a0bb8988.png',
    'https://mott.pe/noticias/wp-content/uploads/2016/11/Janette-Asche.jpg',
    'http://www.foretica.org/wp-content/uploads/2016/01/Vida_sostenible_600.png',
    'http://www.quo.es/var/quo/storage/images/tecnologia/tendencias/ciudades_del_futuro/04_ciudades_futuristas_quo_188/355001-1-esl-ES/04_ciudades_futuristas_quo_188_full_landscape.jpg',
    'https://blog.expedia.mx/wp-content/uploads/Ciudades-Mas-Bonitas-de-Mexico.jpg'
  ];
  let contador = 0;
  
  function carrusel(contenedor){
    contenedor.addEventListener('click',e =>   {
      let atras = contenedor.querySelector('.atras'),
          adelante = contenedor.querySelector('.adelante'),
          img = contenedor.querySelector('img'),
          tgt = e.target;//Identificar elemento que hace click
      console.log(tgt);
      if(tgt==atras){
         if(contador>0){
           img.src = pictures[contador -1];
           contador--;
         }else{
           img.src = pictures[pictures.length - 1];
           contador = pictures.length - 1;
         }
           
      }else if(tgt==adelante){
          if(contador < pictures.length - 1){
           img.src = pictures[contador + 1];
           contador++;
         }else{
           img.src = pictures[0];
           contador = 0;
         }     
      }
      
    });
  }
  
  
    document.addEventListener("DOMContentLoaded", ()=>{
    let  contenedor = document.querySelector('.carrusel');
    carrusel(contenedor);
    });
  