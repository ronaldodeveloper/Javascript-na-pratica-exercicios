const log= console.log
const car= document.querySelector('.car')

let position= car.getBoundingClientRect()
let positionTop= Math.floor(position.top)
let positionBottom= Math.floor(position.bottom)
let positionLeft= Math.floor(position.left)
let positionRight= Math.floor(position.right)

let width= Math.floor(position.width)
let height= Math.floor(position.height)


log(car.offsetLeft)
var isEvent='';

window.addEventListener('keydown',function(event){   

   isEvent=event.key

   switch(isEvent){
    case 'ArrowUp':
        car.style.top = `${positionTop--}px`;
        log('para cima')
        break;
    case 'ArrowDown':
        car.style.bottom = `${positionBottom--}px`;
        log('para baixo')
        break;
    case 'ArrowLeft':
        car.style.left = `${positionLeft--}px`;
            log('para esquerda')
            break;
    case 'ArrowRight':
        car.style.right = `${positionRight--}px`;
        log('para direita')
        break;

    default: log(isEvent)
   }  
})
