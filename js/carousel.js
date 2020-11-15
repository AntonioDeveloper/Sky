$(document).ready(function () {
  var itemsMainDiv = ('.MultiCarousel');
  var itemsDiv = ('.MultiCarousel-inner');
  var itemWidth = "";

  $('.leftLst, .rightLst').click(function () {
      var condition = $(this).hasClass("leftLst");
      if (condition)
          click(0, this);
      else
          click(1, this)
  });

  ResCarouselSize();




  $(window).resize(function () {
      ResCarouselSize();
  });

  //this function define the size of the items
  function ResCarouselSize() {
      var incno = 0;
      var dataItems = ("data-items");
      var itemClass = ('.item');
      var id = 0;
      var btnParentSb = '';
      var itemsSplit = '';
      var sampwidth = $(itemsMainDiv).width();
      var bodyWidth = $('body').width();
      $(itemsDiv).each(function () {
          id = id + 1;
          var itemNumbers = $(this).find(itemClass).length;
          btnParentSb = $(this).parent().attr(dataItems);
          itemsSplit = btnParentSb.split(',');
          $(this).parent().attr("id", "MultiCarousel" + id);


          if (bodyWidth >= 1200) {
              incno = itemsSplit[3];
              itemWidth = sampwidth / incno;
          }
          else if (bodyWidth >= 992) {
              incno = itemsSplit[2];
              itemWidth = sampwidth / incno;
          }
          else if (bodyWidth >= 768) {
              incno = itemsSplit[1];
              itemWidth = sampwidth / incno;
          }
          else {
              incno = itemsSplit[0];
              itemWidth = sampwidth / incno;
          }
          $(this).css({ 'transform': 'translateX(0px)', 'width': itemWidth * itemNumbers });
          $(this).find(itemClass).each(function () {
              $(this).outerWidth(itemWidth);
          });

          $(".leftLst").addClass("over");
          $(".rightLst").removeClass("over");

      });
  }


  //this function used to move the items
  function ResCarousel(e, el, s) {
      var leftBtn = ('.leftLst');
      var rightBtn = ('.rightLst');
      var translateXval = '';
      var divStyle = $(el + ' ' + itemsDiv).css('transform');
      var values = divStyle.match(/-?[\d\.]+/g);
      var xds = Math.abs(values[4]);
      if (e == 0) {
          translateXval = parseInt(xds) - parseInt(itemWidth * s);
          $(el + ' ' + rightBtn).removeClass("over");

          if (translateXval <= itemWidth / 2) {
              translateXval = 0;
              $(el + ' ' + leftBtn).addClass("over");
          }
      }
      else if (e == 1) {
          var itemsCondition = $(el).find(itemsDiv).width() - $(el).width();
          translateXval = parseInt(xds) + parseInt(itemWidth * s);
          $(el + ' ' + leftBtn).removeClass("over");

          if (translateXval >= itemsCondition - itemWidth / 2) {
              translateXval = itemsCondition;
              $(el + ' ' + rightBtn).addClass("over");
          }
      }
      $(el + ' ' + itemsDiv).css('transform', 'translateX(' + -translateXval + 'px)');
  }

  //It is used to get some elements from btn
  function click(ell, ee) {
      var Parent = "#" + $(ee).parent().attr("id");
      var slide = $(Parent).attr("data-slide");
      ResCarousel(ell, Parent, slide);
  }

});

//Carrossel principal
async function getContent(){
  try{
    const response = await fetch ('https://sky-frontend.herokuapp.com/movies');
    const destaques = await response.json();
    showCatalogo(destaques);      
    //showDestaques(destaques);      
  } catch (error){
    console.log(error);
  }
}
//Carrossel de catálogo
function showCatalogo(destaques){
  let imagesCat = '';
  let count = 0;
  console.log(destaques[2].movies[0].images[0].url);  
    
      for(let j= 0; j <= destaques[2].movies.length; j++){
        imagesCat += `<div class="item"><div class="pad15"><img class="d-block w-100" alt="Catálogo" src=${destaques[2].movies[j].images[0].url}></div></div>`;
        document.querySelector('.MultiCarousel-inner').innerHTML = imagesCat;  
        }
      

      }


// function showDestaques(destaques){  
//   let images = '';
//   let count = 0;
  
//   for(let info of destaques){    
//     for(let i = 0; i <= info.items.length; i++){   
//       if(count < 1){
//         images += `<div class="carousel-item active"><img class="d-block w-100" alt="Destaques" src=${info.items[i].images[0].url}></div>`; 
//         count++;
//       } else {
//         images += `<div class="carousel-item"><img class="d-block w-100" alt="Destaques" src=${info.items[i].images[0].url}></div>`;      
//       }  
//       document.querySelector('.carousel-inner').innerHTML = images;
//     }
//   }
  
// }   

    getContent();
    