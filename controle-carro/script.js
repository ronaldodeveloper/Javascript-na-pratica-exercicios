const log= console.log
const car= document.querySelector('.car')
const setas= document.querySelectorAll('.setas')

let position= car.getBoundingClientRect()
let positionTop= Math.floor(position.top)
let positionBottom= Math.floor(position.bottom)
let positionLeft= Math.floor(position.left)
let positionRight= Math.floor(position.right)

let width= Math.floor(position.width)
let height= Math.floor(position.height)


log(car.parentElement.clientLeft)
var isEvent='';

const controls= (dir)=>{

  
  return  Array.from(setas).filter((el)=>{
                   let resetClass= el.classList.remove('active')
                   return el.dataset.dir == `${dir}`
              }).map((el)=>{ 
                   return el.classList.add('active') 
              })
}

// console.log()

window.addEventListener('keydown',function(event){   

   isEvent=event.key

   switch(isEvent){
    case 'ArrowUp':
        controls('top')
        car.style.top = `${positionTop--}px`;
        break;

    case 'ArrowDown':
        controls('bottom')
        car.style.bottom = `${positionBottom--}px`;
        break;

    case 'ArrowLeft':
        controls('left')
        car.style.left = `${positionLeft--}px`;
            break;
    case 'ArrowRight':
        controls('right')
        car.style.right = `${positionRight--}px`;
        break;

    default: isEvent
   }  
})
