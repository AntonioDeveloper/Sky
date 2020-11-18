$(document).ready(function(){

  $('.responsive').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 8,
    slidesToScroll: 8,
    arrow: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
      });
      });
  
  
      //Consulta a API
  async function getContent(){
    try{
      const response = await fetch ('https://sky-frontend.herokuapp.com/movies');
      const destaques = await response.json();
      showCatalogo(destaques);       
    } catch (error){
      console.log(error);
    }
  }  
  
  //Carrossel de catálogo
  function showCatalogo(destaques){
    let imagesCat = '';
    
    for(let j= 0; j <= destaques[2].movies.length; j++){
      imagesCat += `<div><img alt="Catálogo" src=${destaques[2].movies[j].images[0].url}></div>`;
      $('.responsive').append(imagesCat);
      $('.responsive')[0].slick.refresh();   
      
          }
        }
      
  getContent();
    