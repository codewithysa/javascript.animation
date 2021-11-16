window.addEventListener('load', myFunction);


function myFunction(){
    const item = document.getElementsByClassName('items');
    const item1 = item[0]
    const item2 = item[1]
    const item3 = document.getElementsByClassName('click-me');
    const items = item3[0]

    console.log(items)

    setTimeout(function(){
       item1.style.transition = '2s ease';
       item1.style.opacity = '1';
       item1.style.fontSize = '40px';
       item1.style.transform = 'translateY(50%)'
    }, 100)

    setTimeout(function(){
        item1.style.opacity = '0';
        item1.style.transform = 'translateY(-50%)'
        item2.style.transition = '2s ease';
        item2.style.opacity = '1';
        item2.style.transform = 'translateY(50%)'
        item2.style.fontSize = '40px';
    }, 2000)

    setTimeout(function(){
      items.style.opacity = '1';
      items.style.transform = '2s ease';
      items.style.animation = '2s click linear infinite';
      items.style.cursor = 'pointer';
    }, 5000)

    items.addEventListener('click', function(){
       
    })
}

