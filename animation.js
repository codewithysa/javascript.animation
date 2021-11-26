//onload window event
window.addEventListener('load', myFunction);

//onload function
function myFunction(){
    const item = document.getElementsByClassName('items');
    const item1 = item[0]
    const item2 = item[1]
    const item3 = document.getElementsByClassName('click-me');
    const items = item3[0]


    setTimeout(function(){
       item1.style.transition = '2s ease';
       item1.style.opacity = '1';
       item1.style.fontSize = '40px';
       item1.style.transform = 'translateY(80%)'
       item1.style.paddingTop = '50px';
    }, 100)

    setTimeout(function(){
        item1.style.opacity = '0';
        item1.style.transform = 'translateY(-50%)'
        item2.style.transition = '2s ease';
        item2.style.opacity = '1';
        item2.style.transform = 'translateY(50%)'
        item2.style.fontSize = '40px';
    }, 3000)

    setTimeout(function(){
      items.style.opacity = '1';
      items.style.transform = '2s ease';
      items.style.animation = '2s click linear infinite';
      items.style.cursor = 'pointer';
      item1.style.paddingTop = '10px';
    }, 6000)


    items.addEventListener('click', function(){
       
      const pickColor = document.querySelector('.pick-color');
      const gridColor = document.querySelectorAll('.color-header');

      for(i = 0; i < gridColor.length; i++){

        gridColor[i].style.opacity = '1';
        gridColor[i].style.transform = 'translateY(-40%)';
        gridColor[i].style.transition = '3s ease';
        gridColor[i].style.gridGap = '15px';
        item2.style.opacity = '0';
        items.style.color = 'transparent';
      }
 
      pickColor.style.opacity = '1'
      pickColor.style.transition = '3s ease';
      pickColor.style.transform = 'rotateY(360deg)';
      pickColor.style.animation = '5s pickColor linear infinite'

    })

}


//scroll window event
window.addEventListener('scroll', myScroll); 

//scroll function
function myScroll(){
  const section = document.querySelector('.section-header');
   const sectionHeight = Math.ceil(scrollY)
 
   if(sectionHeight >= 284){
     section.style.transition = '2s ease';
     section.style.transform = 'translateX(50%)';
     section.style.opacity = '1';
     section.style.marginTop = '0';
   }else{
    section.style.transition = '2s ease';
    section.style.transform = 'translateX(-50%)';
    section.style.opacity = '0';
   }

}


const btn = document.querySelector('.btn');
btn.addEventListener('click', e => {
  e.preventDefault();
  const birthYear = document.querySelector('.input-field').value
  const birthYearResults = document.querySelector('.birthyear-results');
  const birthYearResult = document.querySelector('.birthyear-result');
  const ratResult = document.querySelector('.rat-result');

  var ratYear = 1912;
  for(i = ratYear; i < 2044; i++){
    if(i % 12 === 4){
      if(i == birthYear){
        birthYearResult.innerHTML += `${i} you are year of the rat! <br/>` 
        birthYearResults.append(ratResult)
      }
    }else if(i % 12 === 5){
      if(i == birthYear){
        birthYearResult.innerHTML += `${i} you are year of the ox! <br/>`
      }
    }else if(i % 12 === 6){
      if(i == birthYear){
        birthYearResult.innerHTML += `${i} you are year of the tiger! <br/>`
      }
    }else if(i % 12 === 7){
      if(i == birthYear){
        birthYearResult.innerHTML += `${i} you are year of the rabbit! <br/>`
      }
    }else if(i % 12 === 8){
      if(i == birthYear){
        birthYearResult.innerHTML += `${i} you are year of the dragon! <br/>`
      }
    }else if(i % 12 === 9){
      if(i == birthYear){
        birthYearResult.innerHTML += `${i} you are year of the snake! <br/>`
      }
    }else if(i % 12 === 10){
      if(i == birthYear){
        birthYearResult.innerHTML += `${i} you are year of the horse! <br/>`
      }
    }else if(i % 12 === 11){
      if(i == birthYear){
        birthYearResult.innerHTML += `${i} you are year of the sheep! <br/>`
      }
    }else if(i % 12 === 0){
      if(i == birthYear){
        birthYearResult.innerHTML += `${i} you are year of the monkey! <br/>`
      }
    }else if(i % 12 === 1){
      if(i == birthYear){
        birthYearResult.innerHTML += `${i} you are year of the rooster! <br/>`
      }
    }else if(i % 12 === 2){
      if(i == birthYear){
        birthYearResult.innerHTML += `${i} you are year of the dog! <br/>`
      }
    }else if(i % 12 === 3){
      if(i == birthYear){
        birthYearResult.innerHTML += `${i} you are year of the pig! <br/>`
      }
    }
  }
})










