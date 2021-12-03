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
//onload window end


//scroll window event
window.addEventListener('scroll', myScroll); 

//scroll function
function myScroll(){
  const section = document.querySelector('.section-header');
  const ox = document.querySelector('.ox-sign');
  const rat = document.querySelector('.rat-sign');
  const tiger = document.querySelector('.tiger-sign');
  const rabbit = document.querySelector('.rabbit-sign');
  const dragon = document.querySelector('.dragon-sign');
  const snake = document.querySelector('.snake-sign');
  const horse = document.querySelector('.horse-sign');
  const sheep = document.querySelector('.sheep-sign');
  const monkey = document.querySelector('.monkey-sign');
  const rooster = document.querySelector('.rooster-sign'); 
  const dog = document.querySelector('.dog-sign'); 
  const pig = document.querySelector('.pig-sign'); 

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
    ox.style.transform = 'translateY(-5%)';
  }else{
    ox.style.opacity = '0';
    ox.style.transform = 'translateY(10%)';
  }

  if(sectionHeight >= 1080){
    rat.style.opacity = '1'
  rat.style.transition = '3s ease';
  }else{
    rat.style.opacity = '0';
    rat.style.transform = 'translateY(5%)';
  }

  if(sectionHeight >= 1444){
    tiger.style.opacity = '1'
    tiger.style.transition = '3s ease';
    tiger.style.transform = 'translateY(-15%)';
  }else{
    tiger.style.opacity = '0';
    tiger.style.transform = 'translateY(20%)';
  }

   
  if(sectionHeight >= 1860){
    rabbit.style.opacity = '1'
    rabbit.style.transition = '3s ease';
    rabbit.style.transform = 'translateY(-5%)';
  }else{
    rabbit.style.opacity = '0';
    rabbit.style.transform = 'translateY(10%)';
  }

  if(sectionHeight >= 2025){
    dragon.style.opacity = '1'
    dragon.style.transition = '3s ease';
    dragon.style.transform = 'translateY(-5%)';
  }else{
    dragon.style.opacity = '0';
    dragon.style.transform = 'translateY(10%)';
  }

  if(sectionHeight >= 2300){
    snake.style.opacity = '1'
    snake.style.transition = '3s ease';
    snake.style.transform = 'translateY(-5%)';
  }else{
    snake.style.opacity = '0';
    snake.style.transform = 'translateY(10%)';
  }

  if(sectionHeight >= 2678){
    horse.style.opacity = '1'
    horse.style.transition = '3s ease';
    horse.style.transform = 'translateY(-5%)';
  }else{
    horse.style.opacity = '0';
    horse.style.transform = 'translateY(10%)';
  }

  if(sectionHeight >= 3000){
    sheep.style.opacity = '1'
    sheep.style.transition = '3s ease';
    sheep.style.transform = 'translateY(-5%)';
  }else{
    sheep.style.opacity = '0';
    sheep.style.transform = 'translateY(10%)';
  }

  if(sectionHeight >= 3298){
    monkey.style.opacity = '1'
    monkey.style.transition = '3s ease';
    monkey.style.transform = 'translateY(-5%)';
  }else{
    monkey.style.opacity = '0';
    monkey.style.transform = 'translateY(10%)';
  }

  if(sectionHeight >= 3600){
    rooster.style.opacity = '1'
    rooster.style.transition = '3s ease';
    rooster.style.transform = 'translateY(-5%)';
  }else{
    rooster.style.opacity = '0';
    rooster.style.transform = 'translateY(10%)';
  }

  if(sectionHeight >= 3835){
    dog.style.opacity = '1';
    dog.style.transition = '3s ease';
    dog.style.transform = 'translateY(-5%)';
  }else{
    dog.style.opacity = '0';
    dog.style.transform = 'translateY(10%)';
  }

  if(sectionHeight >= 3835){
    pig.style.opacity = '1'
    pig.style.transition = '3s ease';
    pig.style.transform = 'translateY(-5%)';
  }else{
    pig.style.opacity = '0';
    pig.style.transform = 'translateY(5%)';
  }
}
//scroll window event end



//onchange input event 

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
        birthYearResult.innerHTML =  `${this.value} you are year of the rabbit! <a href="#rabbit-result">see more details</a>`
       }
     }else if(i % 12 === 8){
       if(i == this.value){
        birthYearResult.innerHTML =  `${this.value} you are year of the dragon! <a href="#dragon-result">see more details</a>`
       }
     }else if(i % 12 === 9){
       if(i == this.value){
        birthYearResult.innerHTML =  `${this.value} you are year of the snake! <a href="#snake-result">see more details</a>`
       }
     }else if(i % 12 === 10){
       if(i == this.value){
        birthYearResult.innerHTML =  `${this.value} you are year of the horse! <a href="#horse-result">see more details</a>`
       }
     }else if(i % 12 === 11){
       if(i == this.value){
        birthYearResult.innerHTML =  `${this.value} you are year of the sheep! <a href="#sheep-result">see more details</a>`
       }
     }else if(i % 12 === 0){
      if(i == this.value){
        birthYearResult.innerHTML =  `${this.value} you are year of the monkey! <a href="#monkey-result">see more details</a>`
      }
     }else if(i % 12 === 1){
       if(i == this.value){
        birthYearResult.innerHTML =  `${this.value} you are year of the rooster! <a href="#rooster-result">see more details</a>`
       }
     }else if(i % 12 === 2){
       if(i == this.value){
        birthYearResult.innerHTML =  `${this.value} you are year of the dog! <a href="#dog-result">see more details</a>`
       }
     }else if(i % 12 === 3){
       if(i == this.value){
        birthYearResult.innerHTML =  `${this.value} you are year of the pig! <a href="#pig-result">see more details</a>`
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
  
//onchange input event end