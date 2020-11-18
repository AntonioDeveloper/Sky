$(document).ready(function(){

  $('#recomendacoes').slick({
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
    ]
      });

  $('#novidades').slick({
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
    ]
      });

  $('#recomendacoes2').slick({
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
    ]
      });

  $('#marvel').slick({
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
      $('#recomendacoes').append(imagesCat);
      $('#recomendacoes')[0].slick.refresh();   
      $('#novidades').append(imagesCat);
      $('#novidades')[0].slick.refresh();   
      $('#recomendacoes2').append(imagesCat);
      $('#recomendacoes2')[0].slick.refresh();
      $('#marvel').append(imagesCat);
      $('#marvel')[0].slick.refresh();
          }
        }
      
  getContent();
    