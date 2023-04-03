

const select= document.querySelector('.select');
const image= document.querySelector('.img');

select.addEventListener('change',function(e){
    let valor= Number(e.target.value)
    
     switch(valor){
        case 1: 
               image.src = 'https://cdn.conmebol.com/wp-content/uploads/2014/08/vasco-da-gama.jpg'
          break;
        case 2: 
               image.src = 'https://ik.imagekit.io/qaxhhe51fz/story/2021/03/Palmeiras-584x401.png'
          break;
        case 3: 
               image.src = 'https://www.gremio.net/assets/img/bg/og-default.jpg'
          break;
        case 4: 
               image.src = 'https://guiadoboleiro.com.br/wp-content/uploads/2022/01/5-curiosidades-sobre-o-Fluminense.jpg'
          break;

          default:  image.src = 'https://cdn.conmebol.com/wp-content/uploads/2014/08/vasco-da-gama.jpg'
     }
})