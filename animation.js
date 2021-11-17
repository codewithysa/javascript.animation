window.addEventListener('load', myFunction);


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
      const gridColor = document.querySelectorAll('.grid-colors');

      for(i = 0; i < gridColor.length; i++){
        gridColor[i].style.opacity = '1';
        gridColor[i].style.transform = 'translateY(-80%)';
        gridColor[i].style.transition = '3s ease';
        gridColor[i].style.marginLeft = '10px';
        gridColor[i].style.marginTop = '10px';
        item2.style.opacity = '0';
        items.style.color = 'transparent';
      }
      
  
      pickColor.style.opacity = '1'
      pickColor.style.transition = '3s ease';
      pickColor.style.transform = 'rotateY(360deg)';
      pickColor.style.animation = '5s pickColor linear infinite'

    })
}


