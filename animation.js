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
       item1.style.transform = 'translateY(60%)'
       item1.style.paddingTop = '50px';
    }, 100)

    setTimeout(function(){
        item1.style.opacity = '0';
        item1.style.transform = 'translateY(-50%)'
        item2.style.transition = '2s ease';
        item2.style.opacity = '1';
        item2.style.transform = 'translateY(60%)'
        item2.style.fontSize = '40px';
    }, 3500)

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
  const ox = document.querySelector('.ox-sign');
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

  if(sectionHeight >= 1346){
    ox.style.opacity = '1'
    ox.style.transition = '3s ease';
    ox.style.transform = 'translateY(-15%)';
  }else{
    ox.style.opacity = '0';
    ox.style.transform = 'translateY(20%)';
  }
}


const birthYear = document.querySelector('.input-field');
const birthYearResult = document.querySelector('.birthyear-result');
  
 birthYear.onchange=function(){
   var ratYear = 1912;
   for(i = ratYear; i < 2044; i++){
   if(i % 12 === 4){
     if(i == this.value){
       birthYearResult.innerHTML =  `${this.value} your are year of the rat! <a href="#rat-result">see more details</a>`
     }
     }else if(i % 12 === 5){
       if(i == this.value){
         birthYearResult.innerHTML =  `${this.value} you are year of the ox! <a href="#ox-result">see more details</a>`
       }
     }else if(i % 12 === 6){
       if(i == this.value){
        birthYearResult.innerHTML =  `${this.value} you are year of the tiger! <a href="#tiger-result">see more details</a>`
       }
     }else if(i % 12 === 7){
       if(i == this.value){
        birthYearResult.innerHTML =  `${this.value} you are year of the rabbit! <a href="#ox-result">see more details</a>`
       }
     }else if(i % 12 === 8){
       if(i == this.value){
        birthYearResult.innerHTML =  `${this.value} you are year of the dragon! <a href="#ox-result">see more details</a>`
       }
     }else if(i % 12 === 9){
       if(i == this.value){
        birthYearResult.innerHTML =  `${this.value} you are year of the snake! <a href="#ox-result">see more details</a>`
       }
     }else if(i % 12 === 10){
       if(i == this.value){
        birthYearResult.innerHTML =  `${this.value} you are year of the horse! <a href="#ox-result">see more details</a>`
       }
     }else if(i % 12 === 11){
       if(i == this.value){
        birthYearResult.innerHTML =  `${this.value} you are year of the sheep! <a href="#ox-result">see more details</a>`
       }
     }else if(i % 12 === 0){
      if(i == this.value){
        birthYearResult.innerHTML =  `${this.value} you are year of the monkey! <a href="#ox-result">see more details</a>`
      }
     }else if(i % 12 === 1){
       if(i == this.value){
        birthYearResult.innerHTML =  `${this.value} you are year of the rooster! <a href="#ox-result">see more details</a>`
       }
     }else if(i % 12 === 2){
       if(i == this.value){
        birthYearResult.innerHTML =  `${this.value} you are year of the dog! <a href="#ox-result">see more details</a>`
       }
     }else if(i % 12 === 3){
       if(i == this.value){
        birthYearResult.innerHTML =  `${this.value} you are year of the pig! <a href="#ox-result">see more details</a>`
       }else if(i % 12){
         if(this.value < ratYear){
          birthYearResult.innerHTML =  `${this.value} not found`
         }else if(i % 12){
         if(this.value.length == 0){
          birthYearResult.innerHTML =  `not found`
         }
         }
       }
     }
   }
  }
  
 
  




  // var ratYear = 1912;
  // for(i = ratYear; i < 2044; i++){
  //   if(i % 12 === 4){
  //     if(i == birthYear){
  //      birthYearResult.innerHTML = `${i} you are year of the rat!  <br/> <br/> ` ;
  //     }
  //   }else if(i % 12 === 5){
  //     if(i == birthYear){
  //       birthYearResult.innerHTML = `${i} you are year of the ox!  <br/> <br/> `
  //     }
  //   }else if(i % 12 === 6){
  //     if(i == birthYear){
  //       birthYearResult.innerHTML = `${i} you are year of the tiger!  <br/> <br/>`
  //     }
  //   }else if(i % 12 === 7){
  //     if(i == birthYear){
  //       birthYearResult.innerHTML = `${i} you are year of the rabbit!   <br/> <br/>`
  //     }
  //   }else if(i % 12 === 8){
  //     if(i == birthYear){
  //       birthYearResult.innerHTML = `${i} you are year of the dragon!  <br/> <br/> `
  //     }
  //   }else if(i % 12 === 9){
  //     if(i == birthYear){
  //       birthYearResult.innerHTML = `${i} you are year of the snake!  <br/> <br/>`
  //     }
  //   }else if(i % 12 === 10){
  //     if(i == birthYear){
  //       birthYearResult.innerHTML = `${i} you are year of the horse!  <br/> <br/>`
  //     }
  //   }else if(i % 12 === 11){
  //     if(i == birthYear){
  //       birthYearResult.innerHTML = `${i} you are year of the sheep!  <br/> <br/> `
  //     }
  //   }else if(i % 12 === 0){
  //     if(i == birthYear){
  //       birthYearResult.innerHTML = `${i} you are year of the monkey!   <br/> <br/>`
  //     }
  //   }else if(i % 12 === 1){
  //     if(i == birthYear){
  //       birthYearResult.innerHTML = `${i} you are year of the rooster!  <br/> <br/> `
  //     }
  //   }else if(i % 12 === 2){
  //     if(i == birthYear){
  //       birthYearResult.innerHTML = `${i} you are year of the dog!  <br/> <br/> `
  //     }
  //   }else if(i % 12 === 3){
  //     if(i == birthYear){
  //       birthYearResult.innerHTML = `${i} you are year of the pig!  <br/> <br/>`
  //     }else if(i % 12){
  //       if(birthYear < ratYear){
  //       return birthYearResult.innerHTML = `${birthYear} not found <br/> <br/>`
  //       }
  //     }
  //   }
  // }
  
  