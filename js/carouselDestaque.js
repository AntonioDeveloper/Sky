//Consulta a API
async function getContent(){
  try{
    const response = await fetch ('https://sky-frontend.herokuapp.com/movies');
    const destaques = await response.json();
    showDestaques(destaques);      
  } catch (error){
    console.log(error);
  }
}


function showDestaques(destaques){  
  let images = '';
  let count = 0;
  
  for(let info of destaques){    
    for(let i = 0; i <= info.items.length; i++){   
      if(count < 1){
        images += `<div class="carousel-item active"><img class="d-block w-100" alt="Destaques" src=${info.items[i].images[0].url}></div>`; 
        count++;
      } else {
        images += `<div class="carousel-item"><img class="d-block w-100" alt="Destaques" src=${info.items[i].images[0].url}></div>`;      
      }  
      document.querySelector('.carousel-inner').innerHTML = images;
    }
  }
  
}   

    getContent();
    